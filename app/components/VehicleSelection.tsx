"use client";

type Vehicle = {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  passengerText: string;
  luggageText: string;
  note?: string;
};

const vehicles: Vehicle[] = [
  {
    id: "standard-car",
    name: "Standard Car",
    subtitle: "Comfortable everyday private travel",
   image: "/images/vehicles/UW_01_STANDARD_CAR.png",
    passengerText: "Up to 4 passengers",
    luggageText: "Up to 2 large suitcases",
  },
  {
    id: "executive-car",
    name: "Executive Car",
    subtitle: "Premium vehicle category",
    image: "/images/vehicles/UW_02_EXECUTIVE_CAR.png",
    passengerText: "Up to 4 passengers",
    luggageText: "Up to 2 large suitcases",
  },
  {
    id: "people-carrier",
    name: "People Carrier / MPV",
    subtitle: "Extra space for passengers and luggage",
    image: "/images/vehicles/UW_03_PEOPLE_CARRIER.png",
    passengerText: "Up to 6 passengers with hand luggage",
    luggageText:
      "5 passengers + 2 large suitcases, or 4 passengers + 4 large suitcases",
    note: "Large suitcase guideline: approximately 23 kg each.",
  },
  {
    id: "large-vehicle",
    name: "Large Vehicle",
    subtitle: "For larger groups and additional luggage",
    image: "/images/vehicles/UW_04_LARGE_VEHICLE.png",
    passengerText: "Up to 7 or 8 passengers",
    luggageText: "Luggage capacity depends on passenger and seating configuration",
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
    <div className="mt-6">
      {/* SECTION HEADING */}
      <div className="mb-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
          Choose Your Vehicle
        </p>

        <h3 className="mt-2 text-xl font-semibold text-white">
          Choose the space that suits your journey
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          Select a vehicle category suitable for your passengers and luggage.
        </p>
      </div>

      {/* VEHICLE CARDS */}
      <div className="space-y-3">
        {vehicles.map((vehicle) => {
          const selected = selectedVehicle === vehicle.id;

          return (
            <button
              key={vehicle.id}
              type="button"
              onClick={() => onSelectVehicle(vehicle.id)}
              aria-pressed={selected}
              className={`group w-full cursor-pointer overflow-hidden rounded-xl border text-left transition duration-200 ${
                selected
                  ? "border-[#D4AF37] bg-[#D4AF37]/[0.07]"
                  : "border-white/10 bg-[#07111c]/70 hover:border-[#D4AF37]/60 hover:bg-[#0a1826]"
              }`}
            >
              <div className="grid items-center gap-4 p-3 sm:grid-cols-[150px_1fr_auto] sm:p-4">
                {/* VEHICLE IMAGE */}
                <div className="flex h-[95px] items-center justify-center overflow-hidden rounded-lg bg-white/[0.025]">
                  <img
                    src={vehicle.image}
                    alt=""
                    aria-hidden="true"
                    className="h-full w-full object-contain p-2 transition duration-300 group-hover:scale-[1.04]"
                  />
                </div>

                {/* VEHICLE INFORMATION */}
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

                  {/* CAPACITY */}
                  <div className="mt-3 flex flex-col gap-1.5 text-[12px] text-slate-200">
                    <span className="flex items-start gap-2">
                      <span
                        aria-hidden="true"
                        className="mt-[2px] text-[#D4AF37]"
                      >
                        ●
                      </span>

                      <span>{vehicle.passengerText}</span>
                    </span>

                    <span className="flex items-start gap-2">
                      <span
                        aria-hidden="true"
                        className="mt-[2px] text-[#D4AF37]"
                      >
                        ◆
                      </span>

                      <span>{vehicle.luggageText}</span>
                    </span>
                  </div>

                  {/* OPTIONAL VEHICLE NOTE */}
                  {vehicle.note && (
                    <p className="mt-2 text-[10px] leading-4 text-slate-500">
                      {vehicle.note}
                    </p>
                  )}
                </div>

                {/* SELECT INDICATOR */}
                <div
                  className={`flex min-h-[42px] min-w-[105px] items-center justify-center rounded-lg border px-5 text-[12px] font-semibold transition ${
                    selected
                      ? "border-[#D4AF37] bg-[#D4AF37] text-[#06111d]"
                      : "border-[#D4AF37]/60 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#06111d]"
                  }`}
                >
                  {selected ? "Selected ✓" : "Select"}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* VEHICLE DISCLAIMER */}
      <div className="mt-4 rounded-lg border border-white/[0.07] bg-white/[0.025] px-4 py-3">
        <p className="text-[10px] leading-[1.6] text-slate-500">
          Vehicle images are for illustration only. Make and model may vary
          depending on availability. Please choose a category suitable for
          both your passenger and luggage requirements.
        </p>
      </div>
    </div>
  );
}