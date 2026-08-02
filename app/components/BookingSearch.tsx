"use client";

import { FormEvent, useRef, useState } from "react";

export default function BookingSearch() {
  const [submitted, setSubmitted] = useState(false);
  const dateRef = useRef<HTMLInputElement>(null);

  function openCalendar() {
    const input = dateRef.current;
    if (!input) return;

    try {
      input.showPicker?.();
    } catch {
      input.focus();
      input.click();
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section id="booking" className="mx-auto max-w-6xl px-6 py-14">
        <div className="rounded-[28px] border border-[#D4AF37]/30 bg-white/[0.06] px-6 py-14 text-center shadow-2xl backdrop-blur-xl md:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            Journey request received
          </p>

          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Your journey starts here.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            Thank you for telling us about your plans. Our team will review your
            journey and get back to you with the next steps.
          </p>

          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-8 rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#D4AF37]"
          >
            Plan Another Journey
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="mx-auto max-w-6xl px-6 py-14">
      <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.06] shadow-2xl backdrop-blur-xl">
        <div className="border-b border-white/10 px-6 py-6 md:px-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            Start your journey
          </p>

          <h2 className="text-3xl font-semibold md:text-4xl">
            Where would you like to go?
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 md:text-base">
            Book a private transfer or tell us about the journey you would like
            us to create.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 md:p-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <label className="block">
              <span className="mb-2 block text-xs font-medium text-slate-300">
                Service
              </span>

              <select
                required
                className="h-12 w-full rounded-xl border border-white/10 bg-slate-950 px-3 text-sm text-white outline-none transition focus:border-[#D4AF37]"
              >
                <option>Airport Transfer</option>
                <option>Private Tour</option>
                <option>Worldwide Holiday</option>
                <option>Custom Journey</option>
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-xs font-medium text-slate-300">
                Pick-up location
              </span>

              <input
                required
                type="text"
                placeholder="Airport, hotel or address"
                className="h-12 w-full rounded-xl border border-white/10 bg-slate-950 px-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#D4AF37]"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-xs font-medium text-slate-300">
                Destination
              </span>

              <input
                required
                type="text"
                placeholder="Where are you going?"
                className="h-12 w-full rounded-xl border border-white/10 bg-slate-950 px-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#D4AF37]"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-xs font-medium text-slate-300">
                Travel date
              </span>

              <div className="relative">
                <input
                  ref={dateRef}
                  required
                  type="date"
                  className="journey-date h-12 w-full rounded-xl border border-white/10 bg-slate-950 px-3 pr-12 text-sm text-white outline-none transition focus:border-[#D4AF37]"
                />

                <button
                  type="button"
                  onClick={openCalendar}
                  aria-label="Open calendar"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#D4AF37] transition hover:text-[#e5c653]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      width="18"
                      height="18"
                      x="3"
                      y="4"
                      rx="2"
                      ry="2"
                    />
                    <line x1="16" x2="16" y1="2" y2="6" />
                    <line x1="8" x2="8" y1="2" y2="6" />
                    <line x1="3" x2="21" y1="10" y2="10" />
                  </svg>
                </button>
              </div>
            </label>
          </div>

          <div className="mt-5 flex justify-end">
            <button
              type="submit"
              className="h-12 rounded-xl bg-[#D4AF37] px-8 text-sm font-semibold text-[#081220] transition hover:bg-[#e5c653]"
            >
              Plan My Journey →
            </button>
          </div>
        </form>
      </div>

      <style jsx>{`
        .journey-date::-webkit-calendar-picker-indicator {
          opacity: 0;
          position: absolute;
          width: 0;
          height: 0;
          pointer-events: none;
        }

        .journey-date {
          color-scheme: dark;
        }
      `}</style>
    </section>
  );
}