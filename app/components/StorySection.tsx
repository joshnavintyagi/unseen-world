"use client";

import { useEffect, useState } from "react";

const images = [
  "/images/destinations/highlands-1.jpg",
  "/images/destinations/highlands-2.jpg",
  "/images/destinations/highlands-3.jpg",
];

const highlights = [
  "Private chauffeur throughout your journey",
  "Hidden places most visitors never discover",
  "Flexible itinerary built around you",
  "Luxury travel with local expertise",
];

export default function StorySection() {
  const [image, setImage] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setImage((current) => (current + 1) % images.length);
    }, 3500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-12">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* Image */}
        <div className="relative h-[460px] overflow-hidden rounded-[32px] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.4)] md:h-[520px]">
          {images.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`Scottish Highlands private journey ${index + 1}`}
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
                image === index
                  ? "scale-100 opacity-100"
                  : "scale-[1.03] opacity-0"
              }`}
            />
          ))}

          <div className="absolute inset-0 bg-gradient-to-t from-[#081220]/55 via-transparent to-transparent" />

          {/* Slideshow indicators */}
          <div className="absolute bottom-6 left-6 z-10 flex items-center gap-2 rounded-full border border-white/15 bg-[#081220]/45 px-3 py-2 backdrop-blur-md">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setImage(index)}
                aria-label={`Show Highland image ${index + 1}`}
                className={`cursor-pointer rounded-full transition-all duration-300 ${
                  image === index
                    ? "h-2.5 w-7 bg-[#D4AF37]"
                    : "h-2.5 w-2.5 bg-white/60 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="max-w-xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Highland Adventures
          </p>

          <h2 className="text-4xl font-semibold leading-[1.08] md:text-5xl xl:text-6xl">
            Scotland wasn&apos;t made to be rushed.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Leave the crowds behind and discover dramatic mountains, hidden
            castles, ancient glens and unforgettable roads with your own
            private guide.
          </p>

          <div className="mt-8 grid gap-4">
            {highlights.map((highlight) => (
              <div key={highlight} className="flex items-center gap-4">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#D4AF37]" />

                <p className="text-base leading-7 text-slate-300">
                  {highlight}
                </p>
              </div>
            ))}
          </div>

          <a
            href="#booking"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#D4AF37] px-7 py-3.5 font-semibold text-[#081220] transition duration-300 hover:scale-105 hover:bg-[#E7C84B]"
          >
            Plan My Highland Journey
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}