"use client";

export default function FloatingWhatsApp() {
  const message = encodeURIComponent(`Hi Unseen World,

I'd like a quote.

📍 Pick-up:
📍 Drop-off:
📅 Date:
🕒 Time:
👥 Passengers:
🚗 Vehicle:
🧳 Luggage:
🐾 Pet:
`);

  return (
    <a
  href={`https://wa.me/447856585000?text=${message}`}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="WhatsApp"
  className="fixed bottom-6 right-6 z-[9999] transition-all duration-300 hover:scale-110 animate-whatsapp"
>
  <img
    src="/images/icons/whatsapp.png"
    alt="WhatsApp"
    className="h-16 w-16 object-contain"
  />
</a>
  );
}