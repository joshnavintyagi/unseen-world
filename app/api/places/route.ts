import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type PhotonFeature = {
  geometry?: { coordinates?: [number, number] };
  properties?: {
    name?: string;
    street?: string;
    housenumber?: string;
    city?: string;
    district?: string;
    county?: string;
    state?: string;
    country?: string;
    postcode?: string;
    osm_id?: number;
    osm_type?: string;
    type?: string;
  };
};

type Suggestion = { id: string; label: string; score: number };

function clean(parts: Array<string | undefined>) {
  return parts
    .map((part) => part?.trim())
    .filter(
      (part, index, all): part is string =>
        Boolean(part) && all.indexOf(part) === index
    )
    .join(", ");
}

function normalise(value: string) {
  return value
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function words(value: string) {
  return normalise(value).split(" ").filter((word) => word.length > 1);
}

function labelFor(feature: PhotonFeature) {
  const p = feature.properties ?? {};
  const streetAddress = clean([
    clean([p.housenumber, p.street]) || undefined,
    p.name && p.name !== p.street ? p.name : undefined,
  ]);

  return clean([
    streetAddress || p.name,
    p.city || p.district,
    p.county,
    p.state,
    p.postcode,
    p.country,
  ]);
}

function scoreFeature(feature: PhotonFeature, query: string) {
  const p = feature.properties ?? {};
  const queryNormalised = normalise(query);
  const queryWords = words(query);
  const name = normalise(p.name ?? "");
  const street = normalise(p.street ?? "");
  const houseNumber = normalise(p.housenumber ?? "");
  const city = normalise(p.city ?? "");
  const district = normalise(p.district ?? "");
  const county = normalise(p.county ?? "");
  const state = normalise(p.state ?? "");
  const country = normalise(p.country ?? "");
  const postcode = normalise(p.postcode ?? "");
  const fullAddress = normalise(
    [p.housenumber, p.street, p.name, p.city, p.district, p.county, p.state, p.postcode, p.country]
      .filter(Boolean)
      .join(" ")
  );

  let score = 0;
  if (queryNormalised && fullAddress.includes(queryNormalised)) score += 100;

  for (const word of queryWords) {
    if (fullAddress.includes(word)) score += 12;
    if (name.includes(word)) score += 5;
    if (street.includes(word)) score += 7;
    if (houseNumber === word) score += 10;
    if (city.includes(word)) score += 14;
    if (district.includes(word)) score += 10;
    if (county.includes(word)) score += 6;
    if (state.includes(word)) score += 8;
    if (country.includes(word)) score += 6;
    if (postcode.includes(word)) score += 15;
  }

  const type = normalise(p.type ?? "");
  if (["house", "street", "locality", "district", "city", "town", "village", "airport", "station", "hotel"].some((value) => type.includes(value))) {
    score += 3;
  }
  return score;
}

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q")?.trim() ?? "";
  if (query.length < 2) return NextResponse.json({ suggestions: [] });

  try {
    const url = new URL("https://photon.komoot.io/api/");
    url.searchParams.set("q", query);
    url.searchParams.set("limit", "20");
    url.searchParams.set("lang", "en");

    const response = await fetch(url, {
      headers: { Accept: "application/json" },
      cache: "no-store",
    });

    if (!response.ok) return NextResponse.json({ suggestions: [] }, { status: 200 });

    const data = (await response.json()) as { features?: PhotonFeature[] };
    const ranked: Suggestion[] = (data.features ?? [])
      .map((feature, index) => {
        const label = labelFor(feature);
        const coordinates = feature.geometry?.coordinates;
        const p = feature.properties ?? {};
        return {
          id: `${p.osm_type ?? "place"}-${p.osm_id ?? index}-${coordinates?.join("-") ?? index}`,
          label,
          score: scoreFeature(feature, query),
        };
      })
      .filter((item) => Boolean(item.label))
      .sort((a, b) => b.score - a.score);

    const suggestions = ranked
      .filter(
        (item, index, all) =>
          all.findIndex((candidate) => normalise(candidate.label) === normalise(item.label)) === index
      )
      .slice(0, 7)
      .map(({ id, label }) => ({ id, label }));

    return NextResponse.json({ suggestions }, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    console.error("Photon location search failed:", error);
    return NextResponse.json({ suggestions: [] }, { status: 200 });
  }
}