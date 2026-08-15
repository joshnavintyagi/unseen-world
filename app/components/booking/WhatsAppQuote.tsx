"use client";

type BookingDetails = {
  service: string;
  pickup: string;
  destination: string;
  date: string;
  time: string;
  passengers: number;
  luggage: number;
  vehicle: string;
  pets: boolean;
  flightNumber?: string;
  airline?: string;
  specialRequests?: string;
};

type Props = {
  booking: BookingDetails;
};

export default function WhatsAppQuote({ booking }: Props) {
  const createMessage = () => {
    const message = `Hello Unseen World,

I'd like a quotation.

━━━━━━━━━━━━━━━━━━

Service: ${booking.service}

📍 Pick-up:
${booking.pickup}

📍 Destination:
${booking.destination}

📅 Date:
${booking.date}

🕒 Time:
${booking.time}

👥 Passengers:
${booking.passengers}

🚗 Vehicle:
${booking.vehicle}

🧳 Luggage:
${booking.luggage}

🐾 Pets:
${booking.pets ? "Yes" : "No"}

✈ Flight:
${booking.flightNumber || "-"}

🛫 Airline:
${booking.airline || "-"}

📝 Special Requests:
${booking.specialRequests || "-"}

━━━━━━━━━━━━━━━━━━

Please send me a quotation.

Thank you.`;

    return encodeURIComponent(message);
  };

  return (
    <a
      href={`https://wa.me/447856585000?text=${createMessage()}`}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-[#25D366] px-6 py-4 text-lg font-semibold text-white transition hover:brightness-110"
    >
      💬 Get Instant Quote on WhatsApp
    </a>
  );
}