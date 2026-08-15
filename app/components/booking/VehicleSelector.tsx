"use client";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const vehicles = [
  {
    id: "standard",
    title: "Standard",
    subtitle: "1–4 Passengers",
    image: "/images/vehicles/UW_01_STANDARD_CAR.png",
  },
  {
    id: "executive",
    title: "Executive",
    subtitle: "Luxury Saloon",
    image: "/images/vehicles/UW_02_EXECUTIVE_CAR.png",
  },
  {
    id: "mpv",
    title: "People Carrier",
    subtitle: "Up to 8 Passengers",
    image: "/images/vehicles/UW_03_PEOPLE_CARRIER.png",
  },
];

export default function VehicleSelector({
  value,
  onChange,
}: Props) {
  return (
    <div>
      <label className="mb-4 block text-sm font-semibold tracking-wide text-[#D4AF37]">
        Choose Vehicle
      </label>

      <div className="grid gap-5 md:grid-cols-3">
        {vehicles.map((vehicle) => {
          const active = value === vehicle.id;

          return (
            <button
              key={vehicle.id}
              type="button"
              onClick={() => onChange(vehicle.id)}
              className={`overflow-hidden rounded-2xl border transition duration-300 ${
                active
                  ? "border-[#D4AF37] bg-[#0f1d2a]"
                  : "border-white/10 bg-[#091521] hover:border-[#D4AF37]/60"
              }`}
            >
              <div className="aspect-[16/10] overflow-hidden bg-[#06111d]">
                <img
                  src={vehicle.image}
                  alt={vehicle.title}
                  className="h-full w-full object-contain p-4 transition duration-500 hover:scale-105"
                />
              </div>

              <div className="border-t border-white/10 p-5">
                <h3 className="text-lg font-semibold text-white">
                  {vehicle.title}
                </h3>

                <p className="mt-1 text-sm text-slate-300">
                  {vehicle.subtitle}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}