"use client";

import { FormEvent, useMemo, useRef, useState } from "react";

type PlaceSuggestion = {
  id: string;
  label: string;
};

type LocationField = "pickup" | "destination";

type Vehicle = {
  id: string;
  name: string;
  image: string;
  passengers: string;
  luggage: string;
};

const vehicles: Vehicle[] = [
  {
    id: "saloon",
    name: "Saloon",
    image: "/images/vehicles/UW_01_STANDARD_CAR.png",
    passengers: "1–4 Passengers",
    luggage: "2 Large + 2 Cabin Bags",
  },
  {
    id: "executive",
    name: "Executive",
    image: "/images/vehicles/UW_02_EXECUTIVE_CAR.png",
    passengers: "1–4 Passengers",
    luggage: "2 Large + 2 Cabin Bags",
  },
  {
  id: "mpv",
  name: "MPV",
  image: "/images/vehicles/UW_03_PEOPLE_CARRIER.png",
  passengers: "Up to 6 Passengers",
  luggage: "4 pax + 4 suitcases • 5 pax + 1 suitcase • 6 pax + hand luggage",
},
{
  id: "minibus",
  name: "Passenger Van",
  image: "/images/vehicles/UW_04_LARGE_VEHICLE.png",
  passengers: "Mercedes Vito or similar • Up to 7–8 passengers",
  luggage: "Capacity varies with passenger numbers — please tell us your luggage requirements",
},
];
const services = [
  "Airport Transfer",
  "Chauffeur Service",
  "Tours & Experiences",
  "Worldwide Travel",
  "Custom Journey",
];



export default function MobileQuickBooking() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState("Airport Transfer");
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [travelTime, setTravelTime] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showExtras, setShowExtras] = useState(false);
  const [activeLocationField, setActiveLocationField] =
    useState<LocationField | null>(null);
  const [suggestions, setSuggestions] = useState<
    Record<LocationField, PlaceSuggestion[]>
  >({ pickup: [], destination: [] });
  const [isSearching, setIsSearching] = useState(false);
  const searchTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const searchController = useRef<AbortController | null>(null);

  const today = useMemo(() => {
    const date = new Date();
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(date.getDate()).padStart(2, "0")}`;
  }, []);

  function searchPlaces(field: LocationField, query: string) {
    if (searchTimer.current) clearTimeout(searchTimer.current);
    searchController.current?.abort();

    if (query.trim().length < 2) {
      setSuggestions((current) => ({ ...current, [field]: [] }));
      setIsSearching(false);
      return;
    }

    setActiveLocationField(field);
    setIsSearching(true);

    searchTimer.current = setTimeout(async () => {
      const controller = new AbortController();
      searchController.current = controller;

      try {
        const response = await fetch(
          `/api/places?q=${encodeURIComponent(query.trim())}`,
          { signal: controller.signal }
        );

        if (!response.ok) throw new Error("Location search failed");

        const result = (await response.json()) as {
          suggestions?: PlaceSuggestion[];
        };

        const orderedSuggestions = [...(result.suggestions ?? [])]
          .sort((first, second) =>
            first.label.localeCompare(second.label, "en-GB", {
              sensitivity: "base",
              numeric: true,
            })
          )
          .slice(0, 5);

        setSuggestions((current) => ({
          ...current,
          [field]: orderedSuggestions,
        }));
      } catch (searchError) {
        if ((searchError as Error).name !== "AbortError") {
          setSuggestions((current) => ({ ...current, [field]: [] }));
        }
      } finally {
        if (!controller.signal.aborted) setIsSearching(false);
      }
    }, 220);
  }

  function selectPlace(field: LocationField, suggestion: PlaceSuggestion) {
    if (field === "pickup") setPickup(suggestion.label);
    else setDestination(suggestion.label);

    setSuggestions((current) => ({ ...current, [field]: [] }));
    setActiveLocationField(null);
  }

  function locationMenu(field: LocationField) {
    if (activeLocationField !== field) return null;

    const items = suggestions[field];

    return (
      <div className="absolute inset-x-0 top-[76px] z-50 overflow-hidden rounded-xl border border-[#D4AF37]/35 bg-[#081321] shadow-2xl">
        {isSearching && items.length === 0 ? (
          <p className="px-4 py-4 text-sm text-slate-400">
            Finding locations…
          </p>
        ) : items.length > 0 ? (
          <div className="max-h-64 overflow-y-auto">
            {items.map((item) => (
              <button
                key={item.id}
                type="button"
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => selectPlace(field, item)}
                className="flex min-h-14 w-full items-start gap-3 border-b border-white/[0.07] px-4 py-3 text-left text-sm leading-5 text-white last:border-b-0"
              >
                <span className="mt-0.5 text-[#D4AF37]">●</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        ) : (
          <p className="px-4 py-4 text-sm text-slate-500">
            Keep typing an address, airport, hotel or place.
          </p>
        )}
      </div>
    );
  }

  function continueFromJourney() {
  if (!pickup.trim() || !destination.trim() || !travelDate || !travelTime) {
    setError("Please complete the pick-up, destination, date and time.");
    return;
  }

  const now = new Date();

  const selectedDateTime = new Date(
    `${travelDate}T${travelTime}:00`
  );

  if (selectedDateTime.getTime() < now.getTime()) {
    setError("Please choose a future date and time.");
    return;
  }

  setError("");
  setStep(2);
}

function chooseVehicle(vehicleId: string) {
  setSelectedVehicle(vehicleId);
  setError("");

  window.setTimeout(() => {
    setStep(3);
  }, 220);
}

  async function submitJourney(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim()) {
  setError("Please enter your name.");
  return;
}

const validPhone = /^[0-9+\s()-]{7,20}$/.test(phone.trim());

if (!validPhone) {
  setError("Please enter a valid mobile number.");
  return;
}

    if (!selectedVehicle) {
      setError("Please select a vehicle.");
      setStep(2);
      return;
    }

    setIsSending(true);
    setError("");

    const [pickupHour = "", pickupMinute = ""] = travelTime.split(":");

    const journey = {
      service,
      vehicle: selectedVehicle,
      pickup: pickup.trim(),
      destination: destination.trim(),
      travelDate,
      pickupTime: travelTime,
      pickupHour,
      pickupMinute,
      pickupPeriod: "",
      flightNumber: "",
      airline: "",
      arrivingFrom: "",
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      travellers: String(passengers),
      additionalTravellers: [],
      ticketedTravel: "none",
      largeBags: "Selected by vehicle capacity",
      cabinBags: "Selected by vehicle capacity",
      specialItem: "None",
      luggageNotes: "",
      childSeat: "No",
      petTravel: "No",
      petDetails: "",
      message: message.trim(),
    };

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(journey),
      });

      let result: { success?: boolean; message?: string } = {};
      try {
        result = await response.json();
      } catch {
        // The response status still determines success.
      }

      if (!response.ok || result.success === false) {
        throw new Error(result.message || "Journey request could not be sent.");
      }

      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (submitError) {
      console.error(submitError);
      setError(
        "We could not send your request. Please try again or contact us on WhatsApp."
      );
    } finally {
      setIsSending(false);
    }
  }

  function reset() {
    setStep(1);
    setService("Airport Transfer");
    setPickup("");
    setDestination("");
    setTravelDate("");
    setTravelTime("");
    setSelectedVehicle("");
    setPassengers(1);
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
    setError("");
    setSubmitted(false);
  }

  if (submitted) {
    return (
      <section id="booking" className="w-full px-4 py-8 md:hidden">
        <div className="mx-auto max-w-md rounded-[26px] border border-[#D4AF37]/40 bg-[#08131f] p-6 text-center shadow-2xl">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#D4AF37]/60 bg-[#D4AF37]/10 text-3xl text-[#D4AF37]">
            ✓
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            Request Received
          </p>

          <h2 className="mt-3 font-serif text-3xl text-white">
            Thank you, {name.split(/\s+/)[0] || "traveller"}.
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-300">
            We will review your journey and contact you with availability and
            the next steps.
          </p>

          <a
            href="https://wa.me/447856585000"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex min-h-14 w-full items-center justify-center rounded-xl bg-[#25D366] px-5 text-base font-semibold text-white"
          >
            Contact Us on WhatsApp
          </a>

          <button
            type="button"
            onClick={reset}
            className="mt-3 min-h-12 w-full rounded-xl border border-white/15 px-5 text-sm font-semibold text-white"
          >
            Plan Another Journey
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="w-full overflow-x-hidden px-4 py-8 md:hidden">
      <div className="mx-auto w-full max-w-md overflow-visible rounded-[26px] border border-white/10 bg-[#08131f] shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
        <div className="border-b border-white/10 px-5 pb-5 pt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            Step {step} of 3
          </p>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {[1, 2, 3].map((number) => (
              <span
                key={number}
                className={`h-1.5 rounded-full transition ${
                  number <= step ? "bg-[#D4AF37]" : "bg-white/10"
                }`}
              />
            ))}
          </div>

          <h2 className="mt-5 font-serif text-[30px] leading-tight text-white">
            {step === 1 && "Plan your journey"}
            {step === 2 && "Select your vehicle"}
            {step === 3 && "Your details"}
          </h2>

          <p className="mt-2 text-[15px] leading-6 text-slate-300">
            {step === 1 && "Tell us where and when you would like to travel."}
            {step === 2 &&
              "Choose by passenger and luggage capacity. Images are illustrative."}
            {step === 3 && "Tell us how we should contact you."}
          </p>
        </div>

        {step === 1 && (
          <div className="space-y-5 p-5">
            <FieldLabel label="Service">
              <select
                value={service}
                onChange={(event) => setService(event.target.value)}
                className="h-14 w-full rounded-xl border border-white/15 bg-[#040b13] px-4 text-base text-white outline-none focus:border-[#D4AF37]"
              >
                {services.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </FieldLabel>

            <div className="relative">
              <FieldLabel label="Pick-up location">
                <input
                  value={pickup}
                  onFocus={() => {
                    if (pickup.trim().length >= 2) {
                      setActiveLocationField("pickup");
                    }
                  }}
                  onChange={(event) => {
                    setPickup(event.target.value);
                    searchPlaces("pickup", event.target.value);
                  }}
                  onBlur={() =>
                    window.setTimeout(() => setActiveLocationField(null), 160)
                  }
                  placeholder="Address, airport, hotel or place"
                  className="h-14 w-full rounded-xl border border-white/15 bg-[#040b13] px-4 text-base text-white outline-none placeholder:text-slate-500 focus:border-[#D4AF37]"
                />
              </FieldLabel>
              {locationMenu("pickup")}
            </div>

            <div className="relative">
              <FieldLabel label="Destination">
                <input
                  value={destination}
                  onFocus={() => {
                    if (destination.trim().length >= 2) {
                      setActiveLocationField("destination");
                    }
                  }}
                  onChange={(event) => {
                    setDestination(event.target.value);
                    searchPlaces("destination", event.target.value);
                  }}
                  onBlur={() =>
                    window.setTimeout(() => setActiveLocationField(null), 160)
                  }
                  placeholder="Where would you like to go?"
                  className="h-14 w-full rounded-xl border border-white/15 bg-[#040b13] px-4 text-base text-white outline-none placeholder:text-slate-500 focus:border-[#D4AF37]"
                />
              </FieldLabel>
              {locationMenu("destination")}
            </div>

            <div className="grid grid-cols-1 gap-3 min-[390px]:grid-cols-2">
  <FieldLabel label="Date">
    <input
      type="date"
      min={today}
      value={travelDate}
      onChange={(event) => setTravelDate(event.target.value)}
      style={{ colorScheme: "dark" }}
      className="h-14 w-full min-w-0 rounded-xl border border-white/15 bg-[#040b13] px-4 text-base text-white outline-none focus:border-[#D4AF37]"
    />
  </FieldLabel>

  <FieldLabel label="Time (24-hour)">
  <input
    type="time"
    value={travelTime}
    onChange={(event) => setTravelTime(event.target.value)}
    step="60"
    required
    style={{ colorScheme: "dark" }}
    className="h-14 w-full min-w-0 rounded-xl border border-white/15 bg-[#040b13] px-4 text-base text-white outline-none focus:border-[#D4AF37]"
  />
</FieldLabel>
</div>

            <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-[#040b13] p-4">
              <div>
                <p className="text-sm font-semibold text-white">
                  Passengers
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Including children
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setPassengers((current) => Math.max(1, current - 1))
                  }
                  disabled={passengers <= 1}
                  aria-label="Remove passenger"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/55 text-2xl text-[#D4AF37] disabled:cursor-not-allowed disabled:opacity-35"
                >
                  −
                </button>

                <span className="min-w-7 text-center text-xl font-semibold text-white">
                  {passengers}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setPassengers((current) => Math.min(8, current + 1))
                  }
                  disabled={passengers >= 8}
                  aria-label="Add passenger"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D4AF37] text-2xl text-[#06111d] disabled:cursor-not-allowed disabled:opacity-35"
                >
                  +
                </button>
              </div>
            </div>

            {error && <ErrorMessage message={error} />}

            <button
              type="button"
              onClick={continueFromJourney}
              className="min-h-14 w-full rounded-xl bg-[#D4AF37] px-5 text-base font-semibold text-[#06111d]"
            >
              Continue →
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4 p-5">
            {vehicles.map((vehicle) => {
              const selected = selectedVehicle === vehicle.id;

              return (
                <button
                  key={vehicle.id}
                  type="button"
                  onClick={() => chooseVehicle(vehicle.id)}
                  className={`w-full overflow-hidden rounded-2xl border text-left transition ${
                    selected
                      ? "border-[#D4AF37] bg-[#D4AF37]/10"
                      : "border-white/10 bg-[#040b13]"
                  }`}
                >
                  <div className="flex min-h-[126px] items-center gap-4 p-4">
                    <div className="flex h-24 w-28 shrink-0 items-center justify-center rounded-xl bg-white/[0.03]">
                      <img
                        src={vehicle.image}
                        alt=""
                        className="h-full w-full object-contain p-2"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-serif text-xl text-white">
                        {vehicle.name}
                      </h3>
                      <p className="mt-2 text-sm text-slate-300">
                        {vehicle.passengers}
                      </p>
                      <p className="mt-1 text-sm text-slate-300">
                        {vehicle.luggage}
                      </p>
                      <span className="mt-3 inline-flex rounded-lg border border-[#D4AF37]/60 px-4 py-2 text-sm font-semibold text-[#D4AF37]">
                        {selected ? "Selected ✓" : "Select"}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}

            {error && <ErrorMessage message={error} />}

            <button
              type="button"
              onClick={() => setStep(1)}
              className="min-h-12 w-full rounded-xl border border-white/15 text-sm font-semibold text-white"
            >
              ← Back
            </button>
          </div>
        )}

        {step === 3 && (
          <form onSubmit={submitJourney} className="space-y-5 p-5">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#040b13]">
  <button
    type="button"
    onClick={() => setShowExtras((current) => !current)}
    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
  >
    <div>
      <p className="text-sm font-semibold text-white">
        Additional Journey Details
      </p>

      <p className="mt-1 text-xs leading-5 text-slate-400">
        Optional — flight details, child seat and pet travel
      </p>
    </div>

    <span className="shrink-0 text-2xl text-[#D4AF37]">
      {showExtras ? "−" : "+"}
    </span>
  </button>

  {showExtras && (
    <div className="space-y-5 border-t border-white/10 p-5">
      {service === "Airport Transfer" && (
        <>
          <FieldLabel label="Flight number (optional)">
            <input
              value={flightNumber}
              onChange={(event) => setFlightNumber(event.target.value)}
              placeholder="e.g. BA1432"
              className="h-14 w-full rounded-xl border border-white/15 bg-[#040b13] px-4 text-base text-white outline-none placeholder:text-slate-500 focus:border-[#D4AF37]"
            />
          </FieldLabel>

          <FieldLabel label="Airline (optional)">
            <input
              value={airline}
              onChange={(event) => setAirline(event.target.value)}
              placeholder="British Airways"
              className="h-14 w-full rounded-xl border border-white/15 bg-[#040b13] px-4 text-base text-white outline-none placeholder:text-slate-500 focus:border-[#D4AF37]"
            />
          </FieldLabel>

          <FieldLabel label="Arriving from (optional)">
            <input
              value={arrivingFrom}
              onChange={(event) => setArrivingFrom(event.target.value)}
              placeholder="Dubai"
              className="h-14 w-full rounded-xl border border-white/15 bg-[#040b13] px-4 text-base text-white outline-none placeholder:text-slate-500 focus:border-[#D4AF37]"
            />
          </FieldLabel>
        </>
      )}

      <SelectRow
        label="Child seat"
        value={childSeat}
        onChange={setChildSeat}
        options={[
          "No",
          "Infant seat",
          "Child seat",
          "Booster seat",
          "Multiple seats",
        ]}
      />

      <SelectRow
        label="Travelling with a pet?"
        value={petTravel}
        onChange={setPetTravel}
        options={["No", "Yes"]}
      />

      {petTravel === "Yes" && (
        <FieldLabel label="Pet details">
          <input
            value={petDetails}
            onChange={(event) => setPetDetails(event.target.value)}
            placeholder="Type, size and travel carrier"
            className="h-14 w-full rounded-xl border border-white/15 bg-[#040b13] px-4 text-base text-white outline-none placeholder:text-slate-500 focus:border-[#D4AF37]"
          />
        </FieldLabel>
      )}
    </div>
  )}
</div>
            
            <FieldLabel label="Full name">
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                autoComplete="name"
                placeholder="Your name"
                className="h-14 w-full rounded-xl border border-white/15 bg-[#040b13] px-4 text-base text-white outline-none placeholder:text-slate-500 focus:border-[#D4AF37]"
              />
            </FieldLabel>

            <FieldLabel label="Mobile number">
  <input
    value={phone}
    onChange={(event) => {
      const value = event.target.value.replace(/[^\d+\s()-]/g, "");
      setPhone(value);
    }}
    type="tel"
    inputMode="tel"
    autoComplete="tel"
    placeholder="+44 7856 585000"
        title="Enter a valid phone number using numbers only."
    required
    className="h-14 w-full rounded-xl border border-white/15 bg-[#040b13] px-4 text-base text-white outline-none placeholder:text-slate-500 focus:border-[#D4AF37]"
  />
</FieldLabel>

            <FieldLabel label="Email (optional)">
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="you@example.com"
                className="h-14 w-full rounded-xl border border-white/15 bg-[#040b13] px-4 text-base text-white outline-none placeholder:text-slate-500 focus:border-[#D4AF37]"
              />
            </FieldLabel>

            <FieldLabel label="Anything else we should know? (optional)">
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                rows={4}
                placeholder="Flight details, child seat, wheelchair, golf clubs, meet & greet or another requirement"
                className="w-full resize-none rounded-xl border border-white/15 bg-[#040b13] p-4 text-base leading-6 text-white outline-none placeholder:text-slate-500 focus:border-[#D4AF37]"
              />
            </FieldLabel>

            {error && <ErrorMessage message={error} />}

            <button
              type="submit"
              disabled={isSending}
              className="min-h-14 w-full rounded-xl bg-[#D4AF37] px-5 text-base font-semibold text-[#06111d] disabled:opacity-60"
            >
              {isSending ? "Sending…" : "Request My Journey →"}
            </button>

            <button
              type="button"
              onClick={() => setStep(2)}
              className="min-h-12 w-full rounded-xl border border-white/15 text-sm font-semibold text-white"
            >
              ← Back
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function FieldLabel({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block min-w-0">
      <span className="mb-2 block text-sm font-medium text-slate-200">
        {label}
      </span>
      {children}
    </label>
  );
}

function ErrorMessage({ message }: { message: string }) {
  return (
    <p
      role="alert"
      className="rounded-xl border border-red-400/30 bg-red-400/[0.07] px-4 py-3 text-sm leading-6 text-red-200"
    >
      {message}
    </p>
  );
}
