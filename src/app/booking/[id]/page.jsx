"use client";

import { postBooking } from "@/action/server/booking";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import {
  FaClock,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaCheckCircle,
} from "react-icons/fa";

const divisions = [
  "Dhaka",
  "Chittagong",
  "Sylhet",
  "Rajshahi",
  "Khulna",
  "Barisal",
  "Rangpur",
  "Mymensingh",
];

const districts = {
  Dhaka: ["Dhaka", "Gazipur", "Narayanganj", "Manikganj", "Munshiganj"],
  Chittagong: ["Chittagong", "Cox's Bazar", "Comilla", "Feni", "Noakhali"],
  Sylhet: ["Sylhet", "Moulvibazar", "Habiganj", "Sunamganj"],
  Rajshahi: ["Rajshahi", "Bogura", "Pabna", "Natore"],
  Khulna: ["Khulna", "Jessore", "Satkhira", "Bagerhat"],
  Barisal: ["Barisal", "Patuakhali", "Bhola", "Pirojpur"],
  Rangpur: ["Rangpur", "Dinajpur", "Kurigram", "Gaibandha"],
  Mymensingh: ["Mymensingh", "Netrokona", "Sherpur", "Jamalpur"],
};

const PRICE_PER_HOUR = 150;
const PRICE_PER_DAY = 900;

export default function BookingPage() {
  const { id } = useParams();
  const router = useRouter();

//   console.log(id)

  const [durationType, setDurationType] = useState("hour");
  const [durationValue, setDurationValue] = useState(1);
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const pricePerUnit = durationType === "hour" ? PRICE_PER_HOUR : PRICE_PER_DAY;
  const totalCost = pricePerUnit * durationValue;

  const handleDivisionChange = (e) => {
    setDivision(e.target.value);
    setDistrict("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      serviceId: id,
      durationType,
      durationValue,
      location: { division, district, city, area, address },
      totalCost,
      status: "Pending",
    };
    console.log("Booking payload:", payload);

    const result = await postBooking(payload)

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-base-100 py-12 px-4 md:px-10">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Book a <span className="text-primary">Service</span>
          </h1>
          <p className="text-base-content/60">
            Select your duration and location — your total cost updates
            automatically.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          {/* Step 1 — Duration */}
          <div className="card bg-base-200 shadow-sm">
            <div className="card-body">
              <div className="flex items-center gap-2 mb-4">
                <FaClock className="text-primary w-5 h-5" />
                <h2 className="text-lg font-semibold">Duration</h2>
              </div>

              <div className="flex gap-3 mb-4">
                <button
                  type="button"
                  onClick={() => {
                    setDurationType("hour");
                    setDurationValue(1);
                  }}
                  className={`btn btn-sm flex-1 ${durationType === "hour" ? "btn-primary" : "btn-outline"}`}
                >
                  Hourly
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setDurationType("day");
                    setDurationValue(1);
                  }}
                  className={`btn btn-sm flex-1 ${durationType === "day" ? "btn-primary" : "btn-outline"}`}
                >
                  Daily
                </button>
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setDurationValue((v) => Math.max(1, v - 1))}
                  className="btn btn-circle btn-outline btn-sm"
                >
                  −
                </button>
                <span className="text-2xl font-bold w-12 text-center">
                  {durationValue}
                </span>
                <button
                  type="button"
                  onClick={() => setDurationValue((v) => v + 1)}
                  className="btn btn-circle btn-outline btn-sm"
                >
                  +
                </button>
                <span className="text-base-content/60 text-sm">
                  {durationType === "hour" ? "hour(s)" : "day(s)"}
                </span>
              </div>
            </div>
          </div>

          {/* Step 2 — Location */}
          <div className="card bg-base-200 shadow-sm">
            <div className="card-body">
              <div className="flex items-center gap-2 mb-4">
                <FaMapMarkerAlt className="text-primary w-5 h-5" />
                <h2 className="text-lg font-semibold">Location</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Division</span>
                  </label>
                  <select
                    className="select select-bordered"
                    value={division}
                    onChange={handleDivisionChange}
                    required
                  >
                    <option value="">Select Division</option>
                    {divisions.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">District</span>
                  </label>
                  <select
                    className="select select-bordered"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    required
                    disabled={!division}
                  >
                    <option value="">Select District</option>
                    {(districts[division] || []).map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">City</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    placeholder="e.g. Uttara"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Area</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    placeholder="e.g. Sector 10"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Full Address</span>
                </label>
                <textarea
                  className="textarea textarea-bordered"
                  placeholder="House no, road, landmark..."
                  rows={2}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Step 3 — Cost Summary */}
          <div className="card bg-primary text-primary-content shadow-sm">
            <div className="card-body">
              <div className="flex items-center gap-2 mb-4">
                <FaMoneyBillWave className="w-5 h-5" />
                <h2 className="text-lg font-semibold">Cost Summary</h2>
              </div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-primary-content/70">Rate</span>
                <span>
                  ৳{pricePerUnit} / {durationType}
                </span>
              </div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-primary-content/70">Duration</span>
                <span>
                  {durationValue} {durationType}(s)
                </span>
              </div>
              <div className="divider my-2 opacity-30" />
              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>৳{totalCost.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn btn-primary btn-lg w-full"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner" />
            ) : (
              <>
                <FaCheckCircle className="w-4 h-4" />
                Confirm Booking
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
