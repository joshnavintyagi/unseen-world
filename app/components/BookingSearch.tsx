"use client";

import { FormEvent, useRef, useState } from "react";

export default function BookingSearch() {
  const [showDetails, setShowDetails] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [travelDate, setTravelDate] = useState("");
  const dateRef = useRef<HTMLInputElement>(null);

  /*
   * Today's date in the visitor's LOCAL timezone.
   * This prevents yesterday/past dates from being selected.
   */
  const now = new Date();

  const todayString = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0"),
  ].join("-");

  /*
   * Determine whether the selected date falls within
   * the short-notice 48-hour window.
   */
  function isShortNotice(dateString: string) {
    if (!dateString) return false;

    const [year, month, day] = dateString.split("-").map(Number);

    const selectedDate = new Date(year, month - 1, day);

    const currentDate = new Date();

    const difference = selectedDate.getTime() - currentDate.getTime();

    const hoursUntilJourney = difference / (1000 * 60 * 60);

    return hoursUntilJourney <= 48;
  }

  const shortNotice = isShortNotice(travelDate);

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

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!showDetails) {
      setShowDetails(true);
      return;
    }

    /*
     * Later, when we connect the server/email system,
     * shortNotice will determine whether the enquiry
     * arrives as STANDARD or PRIORITY.
     */

    console.log(
      shortNotice
        ? "PRIORITY — SHORT-NOTICE JOURNEY"
        : "STANDARD JOURNEY REQUEST"
    );

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section id="booking" className="mx-auto max-w-6xl px-6 py-14">
        <div className="rounded-[28px] border border-[#D4AF37]/30 bg-white/[0.06] px-6 py-14 text-center shadow-2xl backdrop-blur-xl md:px-10">

          {shortNotice ? (
            <>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                Priority journey request received
              </p>

              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                We&apos;re reviewing your plans.
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
                Your journey is within the next 48 hours, so we&apos;ve marked
                your request for priority attention. Our team will review
                availability and contact you as soon as we can.
              </p>
            </>
          ) : (
            <>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                Journey request received
              </p>

              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Thank you. Your journey starts here.
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
                We&apos;ve received your journey details. Our team will review
                your plans and contact you with the next steps.
              </p>
            </>
          )}

          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setShowDetails(false);
              setTravelDate("");
            }}
            className="mt-8 rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
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

        {/* HEADER */}

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

          {/* JOURNEY DETAILS */}

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

            {/* SERVICE */}

            <label className="block">
              <span className="mb-2 block text-xs font-medium text-slate-300">
                Service
              </span>

              <select
                name="service"
                required
                className="h-12 w-full rounded-xl border border-white/10 bg-slate-950 px-3 text-sm text-white outline-none transition focus:border-[#D4AF37]"
              >
                <option>Airport Transfer</option>
                <option>Private Tour</option>
                <option>Worldwide Holiday</option>
                <option>Custom Journey</option>
              </select>
            </label>

            {/* PICKUP */}

            <label className="block">
              <span className="mb-2 block text-xs font-medium text-slate-300">
                Pick-up location
              </span>

              <input
                name="pickup"
                required
                type="text"
                placeholder="Airport, hotel or address"
                className="h-12 w-full rounded-xl border border-white/10 bg-slate-950 px-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#D4AF37]"
              />
            </label>

            {/* DESTINATION */}

            <label className="block">
              <span className="mb-2 block text-xs font-medium text-slate-300">
                Destination
              </span>

              <input
                name="destination"
                required
                type="text"
                placeholder="Where are you going?"
                className="h-12 w-full rounded-xl border border-white/10 bg-slate-950 px-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#D4AF37]"
              />
            </label>

            {/* TRAVEL DATE */}

            <label className="block">
              <span className="mb-2 block text-xs font-medium text-slate-300">
                Travel date
              </span>

              <div className="relative">
                <input
                  ref={dateRef}
                  name="travelDate"
                  required
                  type="date"
                  min={todayString}
                  value={travelDate}
                  onChange={(event) => setTravelDate(event.target.value)}
                  className="journey-date h-12 w-full cursor-pointer rounded-xl border border-white/10 bg-slate-950 px-3 pr-12 text-sm text-white outline-none transition focus:border-[#D4AF37]"
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

          {/* SHORT-NOTICE ALERT */}

          {travelDate && shortNotice && (
            <div className="mt-5 rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/[0.06] px-5 py-5">
              <div className="flex gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-lg text-[#D4AF37]">
                  ⚡
                </div>

                <div>
                  <p className="font-semibold text-white">
                    Short-notice journey
                  </p>

                  <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-300">
                    Your travel date is within the next 48 hours, so we&apos;ll
                    give your plans priority attention. Complete your details
                    below and our team will review availability as soon as
                    possible.
                  </p>

                  <p className="mt-2 text-xs text-slate-500">
                    You can still send your journey request normally.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* FIRST STEP BUTTON */}

          {!showDetails && (
            <div className="mt-5 flex justify-end">
              <button
                type="submit"
                className="h-12 rounded-xl bg-[#D4AF37] px-8 text-sm font-semibold text-[#081220] transition hover:bg-[#e5c653]"
              >
                Plan My Journey →
              </button>
            </div>
          )}

          {/* CUSTOMER DETAILS */}

          {showDetails && (
            <div className="mt-8 border-t border-white/10 pt-8">

              {shortNotice && (
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#D4AF37]">
                  ⚡ Priority journey
                </div>
              )}

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                Your details
              </p>

              <h3 className="mt-2 text-2xl font-semibold">
                Almost there.
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Tell us how to contact you and anything else we should know
                about your journey.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">

                {/* NAME */}

                <label className="block">
                  <span className="mb-2 block text-xs font-medium text-slate-300">
                    Full name
                  </span>

                  <input
                    name="name"
                    required
                    type="text"
                    placeholder="Your full name"
                    className="h-12 w-full rounded-xl border border-white/10 bg-slate-950 px-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#D4AF37]"
                  />
                </label>

                {/* EMAIL */}

                <label className="block">
                  <span className="mb-2 block text-xs font-medium text-slate-300">
                    Email
                  </span>

                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="you@example.com"
                    className="h-12 w-full rounded-xl border border-white/10 bg-slate-950 px-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#D4AF37]"
                  />
                </label>

                {/* PHONE */}

                <label className="block">
                  <span className="mb-2 block text-xs font-medium text-slate-300">
                    Phone number
                  </span>

                  <input
                    name="phone"
                    type="tel"
                    placeholder="+44"
                    className="h-12 w-full rounded-xl border border-white/10 bg-slate-950 px-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#D4AF37]"
                  />
                </label>

                {/* TRAVELLERS */}

                <label className="block">
                  <span className="mb-2 block text-xs font-medium text-slate-300">
                    Travellers
                  </span>

                  <input
                    name="travellers"
                    required
                    type="number"
                    min="1"
                    defaultValue="1"
                    className="h-12 w-full rounded-xl border border-white/10 bg-slate-950 px-3 text-sm text-white outline-none transition focus:border-[#D4AF37]"
                  />
                </label>
              </div>

              {/* MESSAGE */}

              <label className="mt-4 block">
                <span className="mb-2 block text-xs font-medium text-slate-300">
                  Journey details or special requests
                </span>

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Flight number, hotel, places you'd like to visit, luggage, accessibility requirements or anything else we should know..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-slate-950 p-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#D4AF37]"
                />
              </label>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                <button
                  type="button"
                  onClick={() => setShowDetails(false)}
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  ← Back
                </button>

                <button
                  type="submit"
                  className="rounded-xl bg-[#D4AF37] px-8 py-3.5 text-sm font-semibold text-[#081220] transition hover:bg-[#e5c653]"
                >
                  {shortNotice
                    ? "Send Priority Request →"
                    : "Send Journey Request →"}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>

      {/* HIDE BROWSER'S SECOND CALENDAR ICON */}

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