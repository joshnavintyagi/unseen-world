"use client";

type Vehicle = {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  passengerText: string;
  luggageText: string;
};

const vehicles: Vehicle[] = [
  {
    id: "executive-sedan",
    name: "Executive Sedan",
    subtitle: "Mercedes E-Class or similar",
    image: "/images/vehicles/executive-sedan.jpg",
    passengerText: "Up to 3 passengers",
    luggageText: "Up to 2 large suitcases",
  },
  {
    id: "luxury-mpv",
    name: "Luxury MPV",
    subtitle: "Mercedes V-Class or similar",
    image: "/images/vehicles/luxury-mpv.jpg",
    passengerText: "6 passengers + hand luggage",
    luggageText: "or 4 passengers + 4 large suitcases",
  },
  {
    id: "executive-van",
    name: "Executive Van",
    subtitle: "Mercedes Sprinter or similar",
    image: "/images/vehicles/executive-van.jpg",
    passengerText: "Up to 8 passengers",
    luggageText: "Generous luggage capacity",
  },
];

type VehicleSelectionProps = {
  selectedVehicle: string;
  onSelectVehicle: (vehicle: string) => void;
};

export default function VehicleSelection({
  selectedVehicle,
  onSelectVehicle,
}: VehicleSelectionProps) {
  return (
    <div className="mt-6 border-t border-white/10 pt-6">
      <div className="mb-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
          Choose Your Vehicle
        </p>

        <h3 className="mt-2 text-xl font-semibold text-white">
          Travel in the space that suits you
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          Select your preferred vehicle. Capacity may vary slightly depending
          on luggage size and configuration.
        </p>
      </div>

      <div className="space-y-3">
        {vehicles.map((vehicle) => {
          const selected = selectedVehicle === vehicle.id;

          return (
            <button
              key={vehicle.id}
              type="button"
              onClick={() => onSelectVehicle(vehicle.id)}
              className={`w-full overflow-hidden rounded-xl border text-left transition ${
                selected
                  ? "border-[#D4AF37] bg-[#D4AF37]/[0.07]"
                  : "border-white/10 bg-[#07111c]/70 hover:border-[#D4AF37]/50"
              }`}
            >
              <div className="grid items-center gap-4 p-3 sm:grid-cols-[150px_1fr_auto] sm:p-4">
                <div className="h-[95px] overflow-hidden rounded-lg bg-black/20">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-[16px] font-semibold text-white">
                      {vehicle.name}
                    </h4>

                    {selected && (
                      <span className="rounded-full bg-[#D4AF37] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#06111d]">
                        Selected
                      </span>
                    )}
                  </div>

                  <p className="mt-1 text-[12px] text-slate-400">
                    {vehicle.subtitle}
                  </p>

                  <div className="mt-3 flex flex-col gap-1 text-[12px] text-slate-200">
                    <span>♙ {vehicle.passengerText}</span>
                    <span>▣ {vehicle.luggageText}</span>
                  </div>

                  {vehicle.id === "luxury-mpv" && (
                    <p className="mt-2 text-[10px] leading-4 text-slate-500">
                      Large suitcase guideline: approximately 23 kg each.
                    </p>
                  )}
                </div>

                <div
                  className={`flex min-h-[42px] min-w-[105px] items-center justify-center rounded-lg border px-5 text-[12px] font-semibold ${
                    selected
                      ? "border-[#D4AF37] bg-[#D4AF37] text-[#06111d]"
                      : "border-[#D4AF37]/60 text-[#D4AF37]"
                  }`}
                >
                  {selected ? "Selected ✓" : "Select"}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}