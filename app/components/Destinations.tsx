"use client";

import { useEffect, useState } from "react";

type Destination = {
  name: string;
  location: string;
  description: string;
  duration: string;
  badge: string;
  images: string[];
  imagePosition: string;
};

const destinations: Destination[] = [
  {
    name: "Scottish Highlands",
    location: "Scotland",
    description:
      "Discover ancient castles, dramatic mountain passes, mirror-like lochs and breathtaking landscapes on a private Highland adventure.",
    duration: "1–5 day private tours",
    badge: "Most popular",
    images: [
      "/images/destinations/highlands-1.jpg",
      "/images/destinations/highlands-2.jpg",
      "/images/destinations/highlands-3.jpg",
    ],
    imagePosition: "center",
  },
  {
    name: "London",
    location: "England",
    description:
      "From royal landmarks and the London Eye to vibrant neighbourhoods and modern skylines, experience the capital your way.",
    duration: "Private city tours",
    badge: "Iconic city",
    images: [
      "/images/destinations/london-1.jpg",
      "/images/destinations/london-2.jpg",
      "/images/destinations/london-3.jpg",
    ],
    imagePosition: "center",
  },
  {
    name: "Edinburgh",
    location: "Scotland",
    description:
      "Walk through medieval streets, explore Edinburgh Castle and uncover centuries of Scottish history with your private guide.",
    duration: "Private city experiences",
    badge: "Guest favourite",
    images: [
      "/images/destinations/edinburgh-1.jpg",
      "/images/destinations/edinburgh-2.jpg",
      "/images/destinations/edinburgh-3.jpg",
    ],
    imagePosition: "center",
  },
];

function DestinationCard({
  destination,
}: {
  destination: Destination;
}) {
  const [activeImage, setActiveImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveImage(
        (currentImage) =>
          (currentImage + 1) % destination.images.length,
      );
    }, 2800);

    return () => window.clearInterval(timer);
  }, [isHovered, destination.images.length]);

  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative min-h-[570px] overflow-hidden rounded-[32px] border border-white/15 bg-slate-900 shadow-2xl transition duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/70"
    >
      {destination.images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={`${destination.name} private travel experience ${index + 1}`}
          style={{ objectPosition: destination.imagePosition }}
          className={`absolute inset-0 h-full w-full object-cover contrast-[1.05] saturate-[1.12] transition-all duration-[900ms] ease-in-out group-hover:scale-[1.06] group-hover:saturate-[1.22] ${
            activeImage === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-[#020914]/95" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020914]/80 via-transparent to-transparent" />

      <div className="absolute left-6 top-6 z-20">
        <span className="rounded-full border border-white/25 bg-[#081220]/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
          {destination.badge}
        </span>
      </div>

      <div className="absolute right-4 top-4 z-20 flex items-center gap-2 rounded-full border border-white/15 bg-[#081220]/35 px-3 py-2 backdrop-blur-md">
        {destination.images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveImage(index)}
            aria-label={`Show image ${index + 1} of ${destination.name}`}
            className={`cursor-pointer rounded-full transition-all duration-300 ${
              activeImage === index
                ? "h-2.5 w-7 bg-[#D4AF37]"
                : "h-2.5 w-2.5 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 p-7 md:p-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#E7C84B]">
          {destination.location}
        </p>

        <h3 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
          {destination.name}
        </h3>

        <p className="mt-4 min-h-[84px] text-base leading-7 text-slate-200">
          {destination.description}
        </p>

        <div className="mt-6 border-t border-white/20 pt-5">
          <p className="mb-5 text-sm font-medium text-slate-300">
            {destination.duration}
          </p>

          <a
            href="#booking"
            className="inline-flex items-center gap-3 rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#081220] transition duration-300 hover:scale-105 hover:bg-[#E7C84B]"
          >
            Explore tour
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-[32px] ring-1 ring-inset ring-white/10" />
    </article>
  );
}

export default function Destinations() {
  return (
    <section
      id="destinations"
      className="mx-auto max-w-[1400px] px-6 py-24 md:px-12"
    >
      <div className="mb-14 max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
          Signature destinations
        </p>

        <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
          Journeys that stay with you forever.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Private journeys through Britain&apos;s most inspiring landscapes,
          historic cities and unforgettable places.
        </p>
      </div>

      <div className="grid gap-7 lg:grid-cols-3">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.name}
            destination={destination}
          />
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-y border-white/10 py-6 text-sm text-slate-400">
        <span>Private chauffeur service</span>
        <span className="hidden text-[#D4AF37] sm:inline">◆</span>
        <span>Tailor-made itineraries</span>
        <span className="hidden text-[#D4AF37] sm:inline">◆</span>
        <span>Local destination experts</span>
      </div>
    </section>
  );
}