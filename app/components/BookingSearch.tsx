"use client";

import {
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";

type JourneyDetails = {
  service: string;
  pickup: string;
  destination: string;
  travelDate: string;
  pickupTime: string;
  pickupHour: string;
  pickupMinute: string;
  pickupPeriod: string;
  flightNumber: string;
  airline: string;
  arrivingFrom: string;
  name: string;
  email: string;
  phone: string;
  travellers: string;
  additionalTravellers: string[];
  ticketedTravel: string;
  largeBags: string;
  cabinBags: string;
  specialItem: string;
  luggageNotes: string;
  message: string;
};

export default function BookingSearch() {
  const [showDetails, setShowDetails] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [travelDate, setTravelDate] = useState("");
  const [service, setService] = useState("Airport Transfer");
  const [travellerCount, setTravellerCount] = useState(1);
  const [showTravellerNames, setShowTravellerNames] = useState(false);
  const [ticketedTravel, setTicketedTravel] = useState("none");
  const [submittedJourney, setSubmittedJourney] =
    useState<JourneyDetails | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [pickupHour, setPickupHour] = useState("");
  const [pickupMinute, setPickupMinute] = useState("");
  const [pickupPeriod, setPickupPeriod] = useState<"" | "AM" | "PM">("");
  const [showHourOptions, setShowHourOptions] = useState(false);
  const [showMinuteOptions, setShowMinuteOptions] = useState(false);

  const requiresPassengerNames = ["flights", "cruise", "rail"].includes(
    ticketedTravel
  );

  const shouldShowTravellerNames =
    travellerCount > 1 && (showTravellerNames || requiresPassengerNames);

  const isAirportTransfer = service === "Airport Transfer";
  const asksTicketedTravel =
    service === "Worldwide Holiday" || service === "Custom Journey";

  const dateRef = useRef<HTMLInputElement>(null);
  const bookingRef = useRef<HTMLElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  const now = new Date();

  const todayString = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0"),
  ].join("-");

  function isShortNotice(dateString: string) {
    if (!dateString) return false;

    const [year, month, day] = dateString.split("-").map(Number);

    const selectedDate = new Date(
      year,
      month - 1,
      day,
      23,
      59,
      59
    );

    const currentDate = new Date();

    const difference =
      selectedDate.getTime() - currentDate.getTime();

    const hoursUntilJourney =
      difference / (1000 * 60 * 60);

    return hoursUntilJourney <= 48;
  }

  const shortNotice = isShortNotice(travelDate);

  function formatTravelDate(dateString: string) {
    if (!dateString) return "";

    const [year, month, day] = dateString.split("-").map(Number);

    return new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(year, month - 1, day));
  }

  function getFirstName(name: string) {
  const cleanName = name.trim();

  if (!cleanName) return "there";

  const firstName = cleanName.split(/\s+/)[0];

  return firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
}

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

  function scrollToBooking() {
    window.setTimeout(() => {
      bookingRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 50);
  }

  function scrollToDetails() {
    window.setTimeout(() => {
      detailsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!showDetails) {
      setShowDetails(true);
      setSubmitError("");
      scrollToDetails();
      return;
    }

    if (isSending) return;

    if (
      service === "Airport Transfer" &&
      (!pickupHour || !pickupMinute || !pickupPeriod)
    ) {
      setSubmitError(
        "Please select a complete pickup / arrival time, including AM or PM."
      );
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    const additionalTravellers = Array.from(
      { length: Math.max(0, travellerCount - 1) },
      (_, index) =>
        String(formData.get(`traveller-${index + 2}`) || "").trim()
    ).filter(Boolean);

    const journey: JourneyDetails = {
      service: String(formData.get("service") || ""),
      pickup: String(formData.get("pickup") || ""),
      destination: String(formData.get("destination") || ""),
      travelDate: String(formData.get("travelDate") || ""),
      pickupTime: `${pickupHour}:${pickupMinute} ${pickupPeriod}`,
      pickupHour,
      pickupMinute,
      pickupPeriod,
      flightNumber: String(formData.get("flightNumber") || ""),
      airline: String(formData.get("airline") || ""),
      arrivingFrom: String(formData.get("arrivingFrom") || ""),
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      travellers: String(formData.get("travellers") || ""),
      additionalTravellers,
      ticketedTravel: String(formData.get("ticketedTravel") || "none"),
      largeBags: String(formData.get("largeBags") || "0"),
      cabinBags: String(formData.get("cabinBags") || "0"),
      specialItem: String(formData.get("specialItem") || "None"),
      luggageNotes: String(formData.get("luggageNotes") || ""),
      message: String(formData.get("message") || ""),
    };

    setIsSending(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(journey),
      });

      let result: { success?: boolean; message?: string } = {};

      try {
        result = await response.json();
      } catch {
        // response.ok below still determines success.
      }

      if (!response.ok || result.success === false) {
        throw new Error(
          result.message || "We could not send your journey request."
        );
      }

      setSubmittedJourney(journey);
      setSubmitted(true);
      scrollToBooking();
    } catch (error) {
      console.error("Journey submission failed:", error);
      setSubmitError(
        "We couldn't send your journey request. Please try again. If the problem continues, call or WhatsApp our reservations team."
      );
    } finally {
      setIsSending(false);
    }
  }

  function buildWhatsAppMessage(journey: JourneyDetails) {
    const lines = [
      "Hello Unseen World,",
      "",
      "I have submitted a short-notice journey request and would like to check availability.",
      "",
      `Service: ${journey.service}`,
      `Travel date: ${formatTravelDate(journey.travelDate)}`,
      ...(journey.pickupTime ? [`Pickup / arrival time: ${journey.pickupTime}`] : []),
      `Pick-up: ${journey.pickup}`,
      `Destination: ${journey.destination}`,
      `Travellers: ${journey.travellers}`,
      "",
      `Name: ${journey.name}`,
    ];

    if (journey.additionalTravellers.length) {
      lines.push(
        "",
        "Additional travellers:",
        ...journey.additionalTravellers.map(
          (traveller, index) => `${index + 2}. ${traveller}`
        )
      );
    }

    if (journey.ticketedTravel && journey.ticketedTravel !== "none") {
      lines.push(`Ticketed travel: ${journey.ticketedTravel}`);
    }

    if (journey.service === "Airport Transfer") {
      if (journey.flightNumber || journey.airline || journey.arrivingFrom) {
        lines.push("", "Flight details:");

        if (journey.flightNumber) {
          lines.push(`Flight number: ${journey.flightNumber}`);
        }

        if (journey.airline) {
          lines.push(`Airline: ${journey.airline}`);
        }

        if (journey.arrivingFrom) {
          lines.push(`Arriving / flying from: ${journey.arrivingFrom}`);
        }
      }

      lines.push(
        "",
        "Luggage:",
        `Large/check-in bags: ${journey.largeBags}`,
        `Cabin/hand bags: ${journey.cabinBags}`,
        `Special item: ${journey.specialItem}`
      );

      if (journey.luggageNotes) {
        lines.push(`Luggage notes: ${journey.luggageNotes}`);
      }
    }

    if (journey.phone) {
      lines.push(`Phone: ${journey.phone}`);
    }

    if (journey.message) {
      lines.push("", `Additional details: ${journey.message}`);
    }

    lines.push("", "Thank you.");

    return encodeURIComponent(lines.join("\n"));
  }

  function resetJourney() {
    setSubmitted(false);
    setShowDetails(false);
    setTravelDate("");
    setService("Airport Transfer");
    setTravellerCount(1);
    setShowTravellerNames(false);
    setTicketedTravel("none");
    setSubmittedJourney(null);
    setSubmitError("");
    setIsSending(false);
    setPickupHour("");
    setPickupMinute("");
    setPickupPeriod("");

    window.setTimeout(() => {
      bookingRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  }

  useEffect(() => {
    if (submitted) {
      scrollToBooking();
    }
  }, [submitted]);

  /*
   * SUBMITTED / CONFIRMATION SCREEN
   */

  if (submitted && submittedJourney) {
    const submittedIsPriority = isShortNotice(
      submittedJourney.travelDate
    );

    const whatsappMessage =
      buildWhatsAppMessage(submittedJourney);

    const firstName = getFirstName(submittedJourney.name);

    /*
     * PRIORITY CONFIRMATION
     */

    if (submittedIsPriority) {
  return (
    <section
      ref={bookingRef}
      id="booking"
      className="mx-auto w-full max-w-[1240px] scroll-mt-20 overflow-x-hidden px-3 py-5 sm:px-6 sm:py-10"
    >
      <div className="priority-card relative isolate mx-auto w-full overflow-hidden rounded-[22px] border border-[#D4AF37]/35 bg-[#050b14] px-4 py-7 text-center shadow-[0_20px_70px_rgba(0,0,0,0.5)] sm:rounded-[28px] sm:px-8 sm:py-10 md:px-12 md:py-12">

        {/* BACKGROUND LIGHT */}
        <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_10%,rgba(212,175,55,0.11),transparent_26%),radial-gradient(circle_at_50%_72%,rgba(212,175,55,0.04),transparent_42%)]" />

        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />

        {/* DECORATIVE LIGHTS - DESKTOP ONLY */}
        <div className="pointer-events-none absolute -bottom-32 -left-20 -z-10 hidden h-[560px] w-[160px] rotate-[28deg] bg-gradient-to-t from-[#D4AF37]/25 via-[#D4AF37]/5 to-transparent blur-2xl sm:block" />

        <div className="pointer-events-none absolute -bottom-28 left-10 -z-10 hidden h-[520px] w-px rotate-[28deg] bg-gradient-to-t from-[#D4AF37]/60 via-[#D4AF37]/15 to-transparent shadow-[0_0_18px_rgba(212,175,55,0.35)] sm:block" />

        <div className="pointer-events-none absolute -bottom-32 -right-20 -z-10 hidden h-[560px] w-[160px] -rotate-[28deg] bg-gradient-to-t from-[#D4AF37]/25 via-[#D4AF37]/5 to-transparent blur-2xl sm:block" />

        <div className="pointer-events-none absolute -bottom-28 right-10 -z-10 hidden h-[520px] w-px -rotate-[28deg] bg-gradient-to-t from-[#D4AF37]/60 via-[#D4AF37]/15 to-transparent shadow-[0_0_18px_rgba(212,175,55,0.35)] sm:block" />

        {/* SMALL LIGHT PARTICLES */}
        <div className="pointer-events-none absolute left-[8%] top-[18%] h-1 w-1 rounded-full bg-[#F6DF8B] shadow-[0_0_12px_4px_rgba(212,175,55,0.35)]" />

        <div className="pointer-events-none absolute right-[8%] top-[27%] h-1 w-1 rounded-full bg-[#F6DF8B] shadow-[0_0_12px_4px_rgba(212,175,55,0.3)]" />

        {/* PRIORITY EMBLEM */}
        <div className="relative mx-auto mb-4 flex w-fit flex-col items-center sm:mb-5">

          {/* CROWN */}
          <svg
            viewBox="0 0 64 32"
            className="mb-[-4px] h-5 w-11 text-[#D4AF37] drop-shadow-[0_0_8px_rgba(212,175,55,0.35)] sm:h-7 sm:w-14"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M7 24 3 7l15 9L32 3l14 13 15-9-4 17H7Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />

            <path
              d="M10 28h44"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />

            <circle cx="3" cy="6" r="2" fill="currentColor" />
            <circle cx="32" cy="3" r="2" fill="currentColor" />
            <circle cx="61" cy="6" r="2" fill="currentColor" />
          </svg>

          {/* MEDALLION */}
          <div className="relative flex h-[58px] w-[58px] items-center justify-center rounded-full border border-[#D4AF37]/80 bg-[radial-gradient(circle,rgba(212,175,55,0.16),rgba(212,175,55,0.03)_55%,transparent_70%)] shadow-[0_0_30px_rgba(212,175,55,0.18)] sm:h-[72px] sm:w-[72px]">

            <div className="absolute inset-[6px] rounded-full border border-[#D4AF37]/25" />

            <svg
              viewBox="0 0 24 24"
              className="h-7 w-7 text-[#F0CF61] drop-shadow-[0_0_10px_rgba(212,175,55,0.45)] sm:h-9 sm:w-9"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M13 2 4.5 13H11l-1 9 8.5-11H12l1-9Z" />
            </svg>
          </div>

          {/* ORNAMENT */}
          <div className="mt-2 flex items-center gap-2">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#D4AF37]/70 sm:w-12" />

            <span className="h-1.5 w-1.5 rotate-45 border border-[#D4AF37]/80" />

            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#D4AF37]/70 sm:w-12" />
          </div>
        </div>

        {/* PRIORITY LABEL */}
        <p className="mx-auto max-w-full break-words px-1 text-[9px] font-semibold uppercase leading-5 tracking-[0.22em] text-[#D4AF37] sm:text-xs sm:tracking-[0.34em]">
          Priority journey request received
        </p>

        {/* PERSONALISED GREETING */}
        <h2 className="mx-auto mt-3 max-w-4xl break-words px-1 text-[28px] font-semibold leading-[1.12] text-white sm:mt-5 sm:text-4xl md:text-5xl">
          Welcome{" "}
          <span className="text-[#E2C35A]">
            {firstName}
          </span>
          ,{" "}
          <span className="block sm:inline">
            we&apos;re reviewing your plans.
          </span>
        </h2>

        {/* PRIORITY MESSAGE */}
        <p className="mx-auto mt-4 max-w-2xl break-words px-1 text-[14px] leading-6 text-slate-300 sm:mt-5 sm:text-base sm:leading-7">
          Your journey is within the next 48 hours, so your request has
          been marked for{" "}
          <span className="font-medium text-[#E2C35A]">
            priority attention
          </span>
          . Our team is reviewing availability for your plans.
        </p>

        {/* JOURNEY SUMMARY */}
        <div className="mx-auto mt-6 w-full max-w-4xl overflow-hidden rounded-[18px] border border-[#D4AF37]/35 bg-[#07101b]/90 text-left shadow-[0_14px_45px_rgba(0,0,0,0.3)] sm:mt-8 sm:rounded-[22px]">

          <div className="grid grid-cols-1 sm:grid-cols-2">

            {/* JOURNEY */}
            <div className="flex min-w-0 items-center gap-3 border-b border-white/[0.07] p-4 sm:gap-4 sm:border-r sm:p-5">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/[0.08] text-[#D4AF37] sm:h-10 sm:w-10">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 19V9l8-4 8 4v10" />
                  <path d="M8 19v-6h8v6" />
                  <path d="M3 19h18" />
                </svg>
              </div>

              <div className="min-w-0">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-500 sm:text-[10px]">
                  Journey
                </p>

                <p className="mt-1 break-words text-sm font-medium text-white sm:text-base">
                  {submittedJourney.service}
                </p>
              </div>
            </div>

            {/* DATE */}
            <div className="flex min-w-0 items-center gap-3 border-b border-white/[0.07] p-4 sm:gap-4 sm:p-5">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/[0.08] text-[#D4AF37] sm:h-10 sm:w-10">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="16"
                    rx="2"
                  />
                  <path d="M16 3v4M8 3v4M3 10h18" />
                </svg>
              </div>

              <div className="min-w-0">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-500 sm:text-[10px]">
                  Travel date
                </p>

                <p className="mt-1 break-words text-sm font-medium text-white sm:text-base">
                  {formatTravelDate(submittedJourney.travelDate)}
                </p>

                {submittedJourney.pickupTime && (
                  <p className="mt-1 text-xs font-medium text-[#E2C35A] sm:text-sm">
                    {submittedJourney.pickupTime}
                  </p>
                )}
              </div>
            </div>

            {/* PICK-UP */}
            <div className="flex min-w-0 items-center gap-3 border-b border-white/[0.07] p-4 sm:gap-4 sm:border-b-0 sm:border-r sm:p-5">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/[0.08] text-[#D4AF37] sm:h-10 sm:w-10">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </div>

              <div className="min-w-0">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-500 sm:text-[10px]">
                  Pick-up
                </p>

                <p className="mt-1 break-words text-sm font-medium text-white sm:text-base">
                  {submittedJourney.pickup}
                </p>
              </div>
            </div>

            {/* DESTINATION */}
            <div className="flex min-w-0 items-center gap-3 p-4 sm:gap-4 sm:p-5">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/[0.08] text-[#D4AF37] sm:h-10 sm:w-10">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="8" />
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
                </svg>
              </div>

              <div className="min-w-0">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-500 sm:text-[10px]">
                  Destination
                </p>

                <p className="mt-1 break-words text-sm font-medium text-white sm:text-base">
                  {submittedJourney.destination}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* URGENT CONTACT */}
        <div className="mx-auto mt-6 max-w-2xl sm:mt-7">

          <p className="text-base font-medium text-white sm:text-lg">
            Need us sooner, {firstName}?
          </p>

          <p className="mx-auto mt-1.5 max-w-xl px-1 text-xs leading-5 text-slate-400 sm:mt-2 sm:text-sm sm:leading-6">
            Your journey details are ready to send, so you won&apos;t
            need to enter them again.
          </p>
        </div>

        {/* CONTACT BUTTONS */}
        <div className="mx-auto mt-5 flex w-full max-w-2xl flex-col justify-center gap-3 sm:mt-6 sm:flex-row">

          {/* WHATSAPP */}
          <a
            href={`https://wa.me/447856585000?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-xl border border-[#E6C34F]/60 bg-gradient-to-b from-[#E0BF4E] to-[#CBA536] px-4 py-3 text-sm font-semibold text-[#07101b] shadow-[0_8px_30px_rgba(212,175,55,0.16)] transition duration-300 hover:-translate-y-0.5 hover:from-[#E8CD68] hover:to-[#D4AF37] hover:shadow-[0_10px_36px_rgba(212,175,55,0.25)] sm:w-auto sm:flex-1 sm:px-6"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#25D366] shadow-sm">
              <svg
                viewBox="0 0 24 24"
                className="h-[18px] w-[18px] text-white"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12.04 2a9.84 9.84 0 0 0-8.4 14.95L2 22l5.2-1.62A9.98 9.98 0 0 0 12.04 22 9.96 9.96 0 0 0 22 12.04 9.96 9.96 0 0 0 12.04 2Zm0 18.2a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.08.96 1-3-.2-.31a8.15 8.15 0 1 1 6.76 3.67Zm4.48-6.12c-.25-.12-1.45-.72-1.68-.8-.22-.08-.39-.12-.55.12-.16.25-.63.8-.77.96-.14.17-.28.19-.53.07-.24-.12-1.03-.38-1.96-1.21a7.36 7.36 0 0 1-1.36-1.7c-.14-.24-.01-.37.11-.5.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.75-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.25-.85.83-.85 2.02 0 1.19.87 2.34.99 2.5.12.16 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.45-.6 1.65-1.17.2-.58.2-1.07.14-1.17-.06-.1-.22-.16-.47-.28Z" />
              </svg>
            </span>

            Continue on WhatsApp
          </a>

          {/* CALL */}
          <a
            href="tel:+447856585000"
            className="inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-xl border border-[#E6C34F]/60 bg-gradient-to-b from-[#E0BF4E] to-[#CBA536] px-4 py-3 text-sm font-semibold text-[#07101b] shadow-[0_8px_30px_rgba(212,175,55,0.16)] transition duration-300 hover:-translate-y-0.5 hover:from-[#E8CD68] hover:to-[#D4AF37] hover:shadow-[0_10px_36px_rgba(212,175,55,0.25)] sm:w-auto sm:flex-1 sm:px-6"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#07101b] text-[#E0BF4E]">
              <svg
                viewBox="0 0 24 24"
                className="h-[17px] w-[17px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
              </svg>
            </span>

            Call Reservations
          </a>
        </div>

        {/* PLAN ANOTHER JOURNEY */}
        <button
          type="button"
          onClick={resetJourney}
          className="mt-4 rounded-xl border border-[#D4AF37]/35 bg-[#07101b]/70 px-5 py-2.5 text-sm font-medium text-[#E0BF4E] transition hover:border-[#D4AF37]/70 hover:bg-[#D4AF37]/[0.05] sm:mt-5 sm:px-6 sm:py-3"
        >
          Plan Another Journey
        </button>

        {/* TRUST STRIP */}
        <div className="mx-auto mt-7 max-w-4xl border-t border-[#D4AF37]/15 pt-5 sm:mt-9 sm:pt-7">

          <div className="grid grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">

            <div>
              <div className="mx-auto flex h-7 w-7 items-center justify-center text-[#D4AF37]">
                ⚡
              </div>

              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.08em] text-[#D4AF37] sm:mt-2 sm:text-xs">
                Priority handling
              </p>

              <p className="mt-1 hidden text-xs text-slate-500 sm:block">
                Your request is highlighted
              </p>
            </div>

            <div>
              <div className="mx-auto flex h-7 w-7 items-center justify-center text-[#D4AF37]">
                ◷
              </div>

              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.08em] text-[#D4AF37] sm:mt-2 sm:text-xs">
                Priority review
              </p>

              <p className="mt-1 hidden text-xs text-slate-500 sm:block">
                Availability being checked
              </p>
            </div>

            <div>
              <div className="mx-auto flex h-7 w-7 items-center justify-center text-[#D4AF37]">
                ♢
              </div>

              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.08em] text-[#D4AF37] sm:mt-2 sm:text-xs">
                Safe &amp; secure
              </p>

              <p className="mt-1 hidden text-xs text-slate-500 sm:block">
                Your details stay protected
              </p>
            </div>

            <div>
              <div className="mx-auto flex h-7 w-7 items-center justify-center text-[#D4AF37]">
                ✦
              </div>

              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.08em] text-[#D4AF37] sm:mt-2 sm:text-xs">
                Personal service
              </p>

              <p className="mt-1 hidden text-xs text-slate-500 sm:block">
                Travel designed around you
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

    /*
     * STANDARD CONFIRMATION
     */

    return (
      <section
        ref={bookingRef}
        id="booking"
        className="mx-auto max-w-6xl scroll-mt-24 px-6 py-14"
      >
        <div className="rounded-[28px] border border-[#D4AF37]/30 bg-white/[0.06] px-6 py-14 text-center shadow-2xl backdrop-blur-xl md:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            Journey request received
          </p>

          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Thank you, {firstName}. Your journey starts here.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            We&apos;ve received your journey details. Our team
            will review your plans and contact you with the next
            steps.
          </p>

          {submittedJourney.service === "Airport Transfer" &&
            submittedJourney.pickupTime && (
              <div className="mx-auto mt-6 max-w-xl rounded-2xl border border-[#D4AF37]/25 bg-slate-950/40 px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
                  Pickup / arrival time
                </p>

                <p className="mt-1 font-medium text-white">
                  {formatTravelDate(submittedJourney.travelDate)} at{" "}
                  {submittedJourney.pickupTime}
                </p>
              </div>
            )}

          <button
            type="button"
            onClick={resetJourney}
            className="mt-8 rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
          >
            Plan Another Journey
          </button>
        </div>
      </section>
    );
  }

  /*
   * BOOKING FORM
   */

  return (
    <section
      ref={bookingRef}
      id="booking"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-14"
    >
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
            Book a private transfer or tell us about the journey
            you would like us to create.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 md:p-8">

          {/* JOURNEY DETAILS */}

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

            <label className="block">
              <span className="mb-2 block text-xs font-medium text-slate-300">
                Service
              </span>

              <select
                name="service"
                required
                value={service}
                onChange={(event) => {
                  const nextService = event.target.value;
                  setService(nextService);

                  if (
                    nextService !== "Worldwide Holiday" &&
                    nextService !== "Custom Journey"
                  ) {
                    setTicketedTravel("none");
                  }
                }}
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
                name="pickup"
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
                name="destination"
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
                  name="travelDate"
                  required
                  type="date"
                  min={todayString}
                  value={travelDate}
                  onChange={(event) =>
                    setTravelDate(event.target.value)
                  }
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

          {/* AIRPORT TRANSFER TIME & FLIGHT DETAILS */}

          {isAirportTransfer && (
            <div className="mt-5 rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.035] p-4 sm:p-5">
              <div>
                <p className="text-sm font-semibold text-white">
                  Airport transfer timing
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Tell us when you need the vehicle. Flight details are optional
                  at enquiry stage and can be provided later if they are not yet confirmed.
                </p>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-[300px_160px_minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
                <div className="block min-w-0 sm:max-w-[300px]">
                  <span className="mb-2 block text-xs font-medium text-slate-300">
                    Pickup / scheduled flight arrival time
                    <span className="ml-1 text-[#D4AF37]">*</span>
                  </span>

                  <div className="grid grid-cols-[64px_8px_64px_78px] items-start gap-1.5">
                    <div className="relative">
                      <label className="sr-only" htmlFor="pickupHour">
                        Hour
                      </label>

                      <div className="relative">
                        <input
                          id="pickupHour"
                          name="pickupHour"
                          required
                          inputMode="numeric"
                          autoComplete="off"
                          maxLength={2}
                          value={pickupHour}
                          onFocus={() => {
                            setShowHourOptions(true);
                            setShowMinuteOptions(false);
                          }}
                          onChange={(event) => {
                            const value = event.target.value
                              .replace(/\D/g, "")
                              .slice(0, 2);

                            if (!value || Number(value) <= 12) {
                              setPickupHour(value);
                              setShowHourOptions(true);
                            }
                          }}
                          onBlur={() => {
                            window.setTimeout(() => setShowHourOptions(false), 150);

                            if (pickupHour) {
                              setPickupHour(
                                String(
                                  Math.max(
                                    1,
                                    Math.min(12, Number(pickupHour))
                                  )
                                ).padStart(2, "0")
                              );
                            }
                          }}
                          placeholder="HH"
                          aria-label="Pickup hour"
                          aria-expanded={showHourOptions}
                          className="h-10 w-full rounded-lg border border-white/10 bg-slate-950 px-1.5 pr-5 text-center text-[13px] font-medium text-white outline-none transition placeholder:text-slate-500 focus:border-[#D4AF37]"
                        />

                        <svg
                          aria-hidden="true"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="pointer-events-none absolute right-1.5 top-1/2 h-3 w-3 -translate-y-1/2 text-slate-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>

                      {showHourOptions && (
                        <div className="absolute left-0 top-[44px] z-50 max-h-[224px] w-full overflow-y-auto overscroll-contain rounded-xl border border-[#D4AF37]/30 bg-[#081220] p-1 pb-2 shadow-2xl">
                          {Array.from({ length: 12 }, (_, index) =>
                            String(index + 1).padStart(2, "0")
                          ).map((hour) => (
                            <button
                              key={hour}
                              type="button"
                              onMouseDown={(event) => event.preventDefault()}
                              onClick={() => {
                                setPickupHour(hour);
                                setShowHourOptions(false);
                              }}
                              className={`block w-full rounded-md px-1.5 py-1.5 text-center text-xs font-medium transition ${
                                pickupHour === hour
                                  ? "bg-[#D4AF37] text-[#081220]"
                                  : "text-slate-200 hover:bg-white/[0.08] hover:text-[#D4AF37]"
                              }`}
                            >
                              {hour}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <span className="pt-1.5 text-base font-semibold text-slate-500">
                      :
                    </span>

                    <div className="relative">
                      <label className="sr-only" htmlFor="pickupMinute">
                        Minutes
                      </label>

                      <div className="relative">
                        <input
                          id="pickupMinute"
                          name="pickupMinute"
                          required
                          inputMode="numeric"
                          autoComplete="off"
                          maxLength={2}
                          value={pickupMinute}
                          onFocus={() => {
                            setShowMinuteOptions(true);
                            setShowHourOptions(false);
                          }}
                          onChange={(event) => {
                            const value = event.target.value
                              .replace(/\D/g, "")
                              .slice(0, 2);

                            if (!value || Number(value) <= 59) {
                              setPickupMinute(value);
                              setShowMinuteOptions(true);
                            }
                          }}
                          onBlur={() => {
                            window.setTimeout(
                              () => setShowMinuteOptions(false),
                              150
                            );

                            if (pickupMinute) {
                              setPickupMinute(
                                pickupMinute.padStart(2, "0")
                              );
                            }
                          }}
                          placeholder="MM"
                          aria-label="Pickup minutes"
                          aria-expanded={showMinuteOptions}
                          className="h-10 w-full rounded-lg border border-white/10 bg-slate-950 px-1.5 pr-5 text-center text-[13px] font-medium text-white outline-none transition placeholder:text-slate-500 focus:border-[#D4AF37]"
                        />

                        <svg
                          aria-hidden="true"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="pointer-events-none absolute right-1.5 top-1/2 h-3 w-3 -translate-y-1/2 text-slate-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>

                      {showMinuteOptions && (
                        <div className="absolute left-0 top-[44px] z-50 max-h-[224px] w-full overflow-y-auto overscroll-contain rounded-xl border border-[#D4AF37]/30 bg-[#081220] p-1 pb-2 shadow-2xl">
                          {Array.from({ length: 60 }, (_, index) =>
                            String(index).padStart(2, "0")
                          ).map((minute) => (
                            <button
                              key={minute}
                              type="button"
                              onMouseDown={(event) => event.preventDefault()}
                              onClick={() => {
                                setPickupMinute(minute);
                                setShowMinuteOptions(false);
                              }}
                              className={`block w-full rounded-md px-1.5 py-1.5 text-center text-xs font-medium transition ${
                                pickupMinute === minute
                                  ? "bg-[#D4AF37] text-[#081220]"
                                  : "text-slate-200 hover:bg-white/[0.08] hover:text-[#D4AF37]"
                              }`}
                            >
                              {minute}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <label className="relative block">
                      <span className="sr-only">AM or PM</span>

                      <select
                        name="pickupPeriod"
                        required
                        value={pickupPeriod}
                        onChange={(event) =>
                          setPickupPeriod(
                            event.target.value as "" | "AM" | "PM"
                          )
                        }
                        aria-label="AM or PM"
                        className="h-10 w-full cursor-pointer appearance-none rounded-lg border border-[#D4AF37]/35 bg-[#D4AF37]/[0.08] px-1.5 pr-6 text-center text-[13px] font-semibold text-[#E2C35A] outline-none transition hover:border-[#D4AF37]/60 focus:border-[#D4AF37]"
                      >
                        <option value="" disabled>
                          Select
                        </option>
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
                      </select>

                      <svg
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="pointer-events-none absolute right-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#D4AF37]"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </label>
                  </div>

                  <p className="mt-2 max-w-[290px] text-[11px] leading-5 text-slate-500">
                    For airport collections, enter the scheduled flight arrival time.
                    For journeys to the airport, enter the time you want us to collect you.
                  </p>
                </div>

                <label className="block min-w-0">
                  <span className="mb-2 block text-xs font-medium text-slate-300">
                    Flight number
                    <span className="ml-1 text-slate-500">(optional)</span>
                  </span>

                  <input
                    name="flightNumber"
                    type="text"
                    placeholder="e.g. BA1432"
                    className="h-10 min-w-0 w-full rounded-lg border border-white/10 bg-slate-950 px-3 text-[13px] text-white outline-none transition placeholder:text-slate-500 focus:border-[#D4AF37]"
                  />
                </label>

                <label className="block min-w-0">
                  <span className="mb-2 block text-xs font-medium text-slate-300">
                    Airline
                    <span className="ml-1 text-slate-500">(optional)</span>
                  </span>

                  <input
                    name="airline"
                    type="text"
                    placeholder="e.g. British Airways"
                    className="h-10 min-w-0 w-full rounded-lg border border-white/10 bg-slate-950 px-3 text-[13px] text-white outline-none transition placeholder:text-slate-500 focus:border-[#D4AF37]"
                  />
                </label>

                <label className="block min-w-0">
                  <span className="mb-2 block text-xs font-medium text-slate-300">
                    Arriving / flying from
                    <span className="ml-1 text-slate-500">(optional)</span>
                  </span>

                  <input
                    name="arrivingFrom"
                    type="text"
                    placeholder="e.g. London Heathrow"
                    className="h-10 min-w-0 w-full rounded-lg border border-white/10 bg-slate-950 px-3 text-[13px] text-white outline-none transition placeholder:text-slate-500 focus:border-[#D4AF37]"
                  />
                </label>
              </div>
            </div>
          )}

          {/* SHORT NOTICE */}

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
                    Your travel date is within the next 48 hours,
                    so we&apos;ll give your plans priority
                    attention. Complete your details below and our
                    team will review availability as soon as
                    possible.
                  </p>

                  <p className="mt-2 text-xs text-slate-500">
                    You can still send your journey request
                    normally.
                  </p>
                </div>
              </div>
            </div>
          )}

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
            <div
              ref={detailsRef}
              className="mt-8 scroll-mt-24 border-t border-white/10 pt-8"
            >
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
                Tell us how to contact you and anything else we
                should know about your journey.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">

                <label className="block">
                  <span className="mb-2 block text-xs font-medium text-slate-300">
                    Lead traveller / contact name
                  </span>

                  <input
                    name="name"
                    required
                    type="text"
                    placeholder="Your full name"
                    className="h-12 w-full rounded-xl border border-white/10 bg-slate-950 px-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#D4AF37]"
                  />
                </label>

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

                <label className="block">
                  <span className="mb-2 block text-xs font-medium text-slate-300">
                    Travellers
                  </span>

                  <input
                    name="travellers"
                    required
                    type="number"
                    min="1"
                    max="16"
                    value={travellerCount}
                    onChange={(event) => {
                      const nextCount = Math.max(
                        1,
                        Math.min(16, Number(event.target.value) || 1)
                      );
                      setTravellerCount(nextCount);

                      if (nextCount === 1) {
                        setShowTravellerNames(false);
                      }
                    }}
                    className="h-12 w-full rounded-xl border border-white/10 bg-slate-950 px-3 text-sm text-white outline-none transition focus:border-[#D4AF37]"
                  />
                </label>
              </div>

              {/* INTELLIGENT TRAVELLER DETAILS */}

              {travellerCount > 1 && (
                <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/40 p-4 sm:p-5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Travelling with others?
                      </p>
                      <p className="mt-1 max-w-2xl text-xs leading-5 text-slate-400">
                        For most journeys, additional traveller names are optional at enquiry stage.
                      </p>
                    </div>

                    {!requiresPassengerNames && (
                      <button
                        type="button"
                        onClick={() => setShowTravellerNames((current) => !current)}
                        className="shrink-0 rounded-lg border border-[#D4AF37]/35 px-4 py-2 text-xs font-semibold text-[#D4AF37] transition hover:border-[#D4AF37]/70"
                      >
                        {showTravellerNames ? "Hide names" : "+ Add traveller names"}
                      </button>
                    )}
                  </div>

                  {requiresPassengerNames && (
                    <div className="mt-4 rounded-xl border border-[#D4AF37]/25 bg-[#D4AF37]/[0.06] px-4 py-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#D4AF37]">
                        Passenger names required
                      </p>
                      <p className="mt-1 text-xs leading-5 text-slate-400">
                        This journey includes ticketed travel. Please enter traveller names as they appear on their travel documents.
                      </p>
                    </div>
                  )}

                  {shouldShowTravellerNames && (
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {Array.from(
                        { length: travellerCount - 1 },
                        (_, index) => index + 2
                      ).map((travellerNumber) => (
                        <label key={travellerNumber} className="block">
                          <span className="mb-2 block text-xs font-medium text-slate-300">
                            Traveller {travellerNumber} name
                            {!requiresPassengerNames && (
                              <span className="ml-1 text-slate-500">(optional)</span>
                            )}
                          </span>
                          <input
                            name={`traveller-${travellerNumber}`}
                            required={requiresPassengerNames}
                            type="text"
                            placeholder={
                              requiresPassengerNames
                                ? "Name as shown on travel document"
                                : "Traveller name"
                            }
                            className="h-11 w-full rounded-xl border border-white/10 bg-slate-950 px-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#D4AF37]"
                          />
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* TICKETED TRAVEL */}

              {asksTicketedTravel && (
                <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/40 p-4 sm:p-5">
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-white">
                      Does this journey include ticketed travel?
                    </span>
                    <select
                      name="ticketedTravel"
                      value={ticketedTravel}
                      onChange={(event) => {
                        const value = event.target.value;
                        setTicketedTravel(value);
                        if (["flights", "cruise", "rail"].includes(value)) {
                          setShowTravellerNames(true);
                        }
                      }}
                      className="h-11 w-full rounded-xl border border-white/10 bg-slate-950 px-3 text-sm text-white outline-none transition focus:border-[#D4AF37] sm:max-w-sm"
                    >
                      <option value="none">No / Not sure</option>
                      <option value="flights">Flights</option>
                      <option value="cruise">Cruise</option>
                      <option value="rail">Rail</option>
                    </select>
                  </label>
                </div>
              )}

              {/* AIRPORT TRANSFER LUGGAGE */}

              {isAirportTransfer && (
                <div className="mt-5 rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.035] p-4 sm:p-5">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Luggage
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      This helps us arrange a vehicle with suitable passenger and luggage capacity.
                    </p>
                  </div>

                  <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <label className="block">
                      <span className="mb-2 block text-xs font-medium text-slate-300">
                        Large / check-in bags
                      </span>
                      <input
                        name="largeBags"
                        type="number"
                        min="0"
                        max="20"
                        defaultValue="0"
                        className="h-11 w-full rounded-xl border border-white/10 bg-slate-950 px-3 text-sm text-white outline-none transition focus:border-[#D4AF37]"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-xs font-medium text-slate-300">
                        Cabin / hand bags
                      </span>
                      <input
                        name="cabinBags"
                        type="number"
                        min="0"
                        max="20"
                        defaultValue="0"
                        className="h-11 w-full rounded-xl border border-white/10 bg-slate-950 px-3 text-sm text-white outline-none transition focus:border-[#D4AF37]"
                      />
                    </label>

                    <label className="block sm:col-span-2 lg:col-span-1">
                      <span className="mb-2 block text-xs font-medium text-slate-300">
                        Special / oversized item
                      </span>
                      <select
                        name="specialItem"
                        defaultValue="None"
                        className="h-11 w-full rounded-xl border border-white/10 bg-slate-950 px-3 text-sm text-white outline-none transition focus:border-[#D4AF37]"
                      >
                        <option>None</option>
                        <option>Wheelchair</option>
                        <option>Pushchair / stroller</option>
                        <option>Golf clubs</option>
                        <option>Skis / snowboard</option>
                        <option>Bicycle</option>
                        <option>Musical instrument</option>
                        <option>Other</option>
                      </select>
                    </label>
                  </div>

                  <label className="mt-4 block">
                    <span className="mb-2 block text-xs font-medium text-slate-300">
                      Anything unusually large or heavy?
                      <span className="ml-1 text-slate-500">(optional)</span>
                    </span>
                    <input
                      name="luggageNotes"
                      type="text"
                      placeholder="Approximate size/weight or any useful luggage details"
                      className="h-11 w-full rounded-xl border border-white/10 bg-slate-950 px-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#D4AF37]"
                    />
                  </label>
                </div>
              )}

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
                  onClick={() => {
                    setShowDetails(false);

                    window.setTimeout(() => {
                      bookingRef.current?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                    }, 50);
                  }}
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  ← Back
                </button>

                <div className="flex w-full flex-col gap-3 sm:w-auto sm:items-end">
                  {submitError && (
                    <p
                      role="alert"
                      className="max-w-md rounded-xl border border-red-400/25 bg-red-400/[0.06] px-4 py-3 text-sm leading-6 text-red-200"
                    >
                      {submitError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSending}
                    className="rounded-xl bg-[#D4AF37] px-8 py-3.5 text-sm font-semibold text-[#081220] transition hover:bg-[#e5c653] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSending
                      ? "Sending Request..."
                      : shortNotice
                        ? "Send Priority Request →"
                        : "Send Journey Request →"}
                  </button>
                </div>
              </div>
            </div>
          )}
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