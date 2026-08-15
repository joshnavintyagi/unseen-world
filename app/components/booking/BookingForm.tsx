"use client";

import { useState } from "react";
import PassengerFields from "./PassengerFields";
import AirportFields from "./AirportFields";
import VehicleSelector from "./VehicleSelector";
import WhatsAppQuote from "./WhatsAppQuote";

export default function BookingForm() {
  const [service, setService] = useState("Airport Transfer");

  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [passengers, setPassengers] = useState(1);
  const [luggage, setLuggage] = useState(0);
  const [pets, setPets] = useState(false);

  const [vehicle, setVehicle] = useState("standard");

  const [flightNumber, setFlightNumber] = useState("");
  const [airline, setAirline] = useState("");
  const [meetAndGreet, setMeetAndGreet] = useState(true);

  const [specialRequests, setSpecialRequests] = useState("");

  return (
    <div className="rounded-3xl border border-[#D4AF37]/25 bg-[#111e2a] p-8">

      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
          Booking Details
        </p>

        <h2 className="mt-3 font-serif text-4xl text-white">
          Plan Your Journey
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#D4AF37]">
            Service
          </label>

          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-[#091521] px-4 py-3 text-white"
          >
            <option>Airport Transfer</option>
            <option>Chauffeur Service</option>
            <option>Tours & Experiences</option>
            <option>Custom Tours</option>
            <option>Worldwide Travel</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#D4AF37]">
            Pick-up
          </label>

          <input
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            placeholder="Pick-up location"
            className="w-full rounded-xl border border-white/10 bg-[#091521] px-4 py-3 text-white"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#D4AF37]">
            Destination
          </label>

          <input
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Destination"
            className="w-full rounded-xl border border-white/10 bg-[#091521] px-4 py-3 text-white"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#D4AF37]">
            Date
          </label>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-[#091521] px-4 py-3 text-white"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#D4AF37]">
            Time
          </label>

          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-[#091521] px-4 py-3 text-white"
          />
        </div>

      </div>

      <div className="mt-8">
        <PassengerFields
          passengers={passengers}
          luggage={luggage}
          pets={pets}
          onPassengersChange={setPassengers}
          onLuggageChange={setLuggage}
          onPetsChange={setPets}
        />
      </div>

      <AirportFields
        service={service}
        flightNumber={flightNumber}
        airline={airline}
        meetAndGreet={meetAndGreet}
        onFlightNumberChange={setFlightNumber}
        onAirlineChange={setAirline}
        onMeetAndGreetChange={setMeetAndGreet}
      />

      <div className="mt-10">
        <VehicleSelector
          value={vehicle}
          onChange={setVehicle}
        />
      </div>

      <div className="mt-8">
        <label className="mb-2 block text-sm font-semibold text-[#D4AF37]">
          Special Requests
        </label>

        <textarea
          rows={4}
          value={specialRequests}
          onChange={(e) => setSpecialRequests(e.target.value)}
          placeholder="Anything we should know?"
          className="w-full rounded-xl border border-white/10 bg-[#091521] px-4 py-3 text-white"
        />
      </div>

      <WhatsAppQuote
        booking={{
          service,
          pickup,
          destination,
          date,
          time,
          passengers,
          luggage,
          vehicle,
          pets,
          flightNumber,
          airline,
          specialRequests,
        }}
      />
    </div>
  );
}