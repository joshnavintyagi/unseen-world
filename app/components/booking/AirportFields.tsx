"use client";

type Props = {
  service: string;
  flightNumber: string;
  airline: string;
  meetAndGreet: boolean;
  onFlightNumberChange: (value: string) => void;
  onAirlineChange: (value: string) => void;
  onMeetAndGreetChange: (value: boolean) => void;
};

export default function AirportFields({
  service,
  flightNumber,
  airline,
  meetAndGreet,
  onFlightNumberChange,
  onAirlineChange,
  onMeetAndGreetChange,
}: Props) {
  if (service !== "Airport Transfer") return null;

  return (
    <div className="mt-8 rounded-2xl border border-[#D4AF37]/20 bg-[#091521] p-6">
      <h3 className="mb-6 text-lg font-semibold text-white">
        Flight Information
      </h3>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#D4AF37]">
            Flight Number
          </label>

          <input
            type="text"
            placeholder="e.g. BA147"
            value={flightNumber}
            onChange={(e) => onFlightNumberChange(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-[#06111d] px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-[#D4AF37]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#D4AF37]">
            Airline
          </label>

          <input
            type="text"
            placeholder="British Airways"
            value={airline}
            onChange={(e) => onAirlineChange(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-[#06111d] px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-[#D4AF37]"
          />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between rounded-xl border border-white/10 bg-[#06111d] px-5 py-4">
        <div>
          <p className="font-medium text-white">
            Meet & Greet
          </p>

          <p className="mt-1 text-sm text-slate-400">
            Driver meets you inside the terminal with a name board.
          </p>
        </div>

        <button
          type="button"
          onClick={() => onMeetAndGreetChange(!meetAndGreet)}
          className={`rounded-full px-5 py-2 font-semibold transition ${
            meetAndGreet
              ? "bg-[#D4AF37] text-[#06111d]"
              : "border border-white/20 text-white"
          }`}
        >
          {meetAndGreet ? "Included" : "Add"}
        </button>
      </div>
    </div>
  );
}