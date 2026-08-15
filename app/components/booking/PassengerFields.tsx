"use client";

type Props = {
  passengers: number;
  luggage: number;
  pets: boolean;
  onPassengersChange: (value: number) => void;
  onLuggageChange: (value: number) => void;
  onPetsChange: (value: boolean) => void;
};

export default function PassengerFields({
  passengers,
  luggage,
  pets,
  onPassengersChange,
  onLuggageChange,
  onPetsChange,
}: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div>
        <label className="mb-2 block text-sm font-semibold text-[#D4AF37]">
          Passengers
        </label>

        <select
          value={passengers}
          onChange={(e) => onPassengersChange(Number(e.target.value))}
          className="w-full rounded-xl border border-white/10 bg-[#091521] px-4 py-3 text-white outline-none focus:border-[#D4AF37]"
        >
          {[1,2,3,4,5,6,7,8].map((n)=>(
            <option key={n} value={n}>
              {n} Passenger{n>1?"s":""}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-[#D4AF37]">
          Luggage
        </label>

        <select
          value={luggage}
          onChange={(e) => onLuggageChange(Number(e.target.value))}
          className="w-full rounded-xl border border-white/10 bg-[#091521] px-4 py-3 text-white outline-none focus:border-[#D4AF37]"
        >
          {[0,1,2,3,4,5,6,7,8].map((n)=>(
            <option key={n} value={n}>
              {n} Bag{n!==1?"s":""}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-[#D4AF37]">
          Travelling with Pets?
        </label>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => onPetsChange(false)}
            className={`flex-1 rounded-xl border px-4 py-3 transition ${
              !pets
                ? "border-[#D4AF37] bg-[#0f1d2a] text-white"
                : "border-white/10 bg-[#091521] text-slate-300"
            }`}
          >
            No
          </button>

          <button
            type="button"
            onClick={() => onPetsChange(true)}
            className={`flex-1 rounded-xl border px-4 py-3 transition ${
              pets
                ? "border-[#D4AF37] bg-[#0f1d2a] text-white"
                : "border-white/10 bg-[#091521] text-slate-300"
            }`}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}