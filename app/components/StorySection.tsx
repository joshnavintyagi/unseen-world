"use client";

import { useEffect, useState } from "react";

const images = [
  "/images/destinations/highlands-1.jpg",
  "/images/destinations/highlands-2.jpg",
  "/images/destinations/highlands-3.jpg",
];

export default function StorySection() {
  const [image, setImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setImage((current) => (current + 1) % images.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="mx-auto max-w-[1400px] px-6 py-32 md:px-12">
      <div className="grid items-center gap-20 lg:grid-cols-2">

        {/* Image */}

        <div className="relative h-[700px] overflow-hidden rounded-[40px]">

          {images.map((src, index) => (
            <img
              key={src}
              src={src}
              alt="Scottish Highlands"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                image === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          <div className="absolute inset-0 bg-gradient-to-t from-[#081220]/80 via-transparent to-transparent" />

        </div>

        {/* Text */}

        <div>

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
            HIGHLAND ADVENTURES
          </p>

          <h2 className="text-5xl font-semibold leading-tight md:text-6xl">
            Scotland wasn't made to be rushed.
          </h2>

          <p className="mt-8 text-xl leading-9 text-slate-300">
            Leave the crowds behind and discover dramatic mountains,
            hidden castles, ancient glens and unforgettable roads with
            your own private guide.
          </p>

          <div className="mt-12 space-y-5">

            <div className="flex items-center gap-4">
              <div className="h-2 w-2 rounded-full bg-[#D4AF37]" />
              <p className="text-lg text-slate-300">
                Private chauffeur throughout your journey
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-2 w-2 rounded-full bg-[#D4AF37]" />
              <p className="text-lg text-slate-300">
                Hidden places most visitors never discover
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-2 w-2 rounded-full bg-[#D4AF37]" />
              <p className="text-lg text-slate-300">
                Flexible itinerary built around you
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-2 w-2 rounded-full bg-[#D4AF37]" />
              <p className="text-lg text-slate-300">
                Luxury travel with local expertise
              </p>
            </div>

          </div>

          <a
            href="#booking"
            className="mt-14 inline-flex rounded-full bg-[#D4AF37] px-8 py-4 font-semibold text-[#081220] transition hover:scale-105"
          >
            Plan My Highland Journey
          </a>

        </div>

      </div>
    </section>
  );
}