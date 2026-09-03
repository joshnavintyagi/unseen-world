"use client";

type Vehicle = {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  passengerText: string;
  luggageText: string;
  idealFor: string;
  note?: string;
};

const vehicles: Vehicle[] = [
  {
    id: "standard-car",
    name: "Standard Car",
    subtitle: "Comfortable and reliable private travel",
    image: "/images/vehicles/UW_01_STANDARD_CAR.png",
    passengerText: "Up to 4 passengers",
    luggageText: "Up to 2 large suitcases",
    idealFor: "Airport transfers and everyday journeys",
  },
  {
    id: "executive-car",
    name: "Executive Car",
    subtitle: "Premium comfort for business and private travel",
    image: "/images/vehicles/UW_02_EXECUTIVE_CAR.png",
    passengerText: "Up to 4 passengers",
    luggageText: "Up to 2 large suitcases",
    idealFor: "Business travel, events and executive journeys",
  },
  {
    id: "people-carrier",
    name: "People Carrier / MPV",
    subtitle: "Flexible space for passengers and luggage",
    image: "/images/vehicles/UW_03_PEOPLE_CARRIER.png",
    passengerText: "Up to 6 passengers with hand luggage",
    luggageText:
      "5 passengers with 2 large suitcases, or 4 passengers with 4 large suitcases",
    idealFor: "Families, small groups and airport journeys",
    note: "Large suitcase guideline: approximately 23 kg each.",
  },
  {
    id: "large-vehicle",
    name: "Large Vehicle",
    subtitle: "Maximum space for groups and additional luggage",
    image: "/images/vehicles/UW_04_LARGE_VEHICLE.png",
    passengerText: "Up to 7 or 8 passengers",
    luggageText:
      "Capacity depends on the passenger count and seating configuration",
    idealFor: "Large groups, tours and multi-passenger transfers",
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
    <section className="mt-8">
      <div className="mb-7">
        <div className="flex items-center gap-3">
          <span className="h-px w-9 bg-[#D4AF37]/70" />

          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
            Choose Your Vehicle
          </p>
        </div>

        <h3 className="mt-4 font-serif text-[28px] leading-tight text-white sm:text-[34px]">
          Select the space that suits your journey
        </h3>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
          Choose a vehicle category suitable for your passengers, luggage and
          journey requirements.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {vehicles.map((vehicle) => {
          const selected = selectedVehicle === vehicle.id;

          return (
            <button
              key={vehicle.id}
              type="button"
              onClick={() => onSelectVehicle(vehicle.id)}
              aria-pressed={selected}
              className={`group flex w-full min-w-0 flex-col overflow-hidden rounded-[22px] border text-left shadow-[0_18px_50px_rgba(0,0,0,0.24)] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/70 ${
                selected
                  ? "border-[#D4AF37] bg-[#D4AF37]/[0.07]"
                  : "border-white/10 bg-[#07111c]/80 hover:-translate-y-1 hover:border-[#D4AF37]/60"
              }`}
            >
              <div className="relative flex h-[185px] items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_68%)] sm:h-[210px]">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="h-full w-full object-contain p-5 transition duration-500 group-hover:scale-[1.05]"
                />

                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#07111c] to-transparent" />

                {selected && (
                  <span className="absolute right-4 top-4 rounded-full bg-[#D4AF37] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-[#06111d]">
                    Selected
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div>
                  <h4 className="font-serif text-[25px] leading-tight text-white">
                    {vehicle.name}
                  </h4>

                  <p className="mt-2 text-sm text-slate-400">
                    {vehicle.subtitle}
                  </p>
                </div>

                <div className="mt-5 space-y-3 text-sm leading-5 text-slate-200">
                  <div className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 text-[#D4AF37]"
                    >
                      ◇
                    </span>

                    <span>{vehicle.passengerText}</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 text-[#D4AF37]"
                    >
                      ◆
                    </span>

                    <span>{vehicle.luggageText}</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 text-[#D4AF37]"
                    >
                      ◎
                    </span>

                    <span>{vehicle.idealFor}</span>
                  </div>
                </div>

                {vehicle.note && (
                  <p className="mt-4 rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-2 text-[10px] leading-4 text-slate-500">
                    {vehicle.note}
                  </p>
                )}

                <div className="mt-6 border-t border-white/[0.08] pt-5">
                  <span
                    className={`flex min-h-[48px] w-full items-center justify-center rounded-xl border px-5 text-sm font-semibold transition ${
                      selected
                        ? "border-[#D4AF37] bg-[#D4AF37] text-[#06111d]"
                        : "border-[#D4AF37]/60 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#06111d]"
                    }`}
                  >
                    {selected ? "Vehicle Selected ✓" : "Select Vehicle"}
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-5 rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-4">
        <p className="text-[11px] leading-[1.7] text-slate-500">
          Vehicle images are for illustration purposes. The exact make, model
          and colour may vary depending on availability. Please select a
          category suitable for both passenger and luggage requirements.
        </p>
      </div>
    </section>
  );
}