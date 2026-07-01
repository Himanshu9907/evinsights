"use client";

import { useMemo, useState } from "react";
import {
  BatteryCharging,
  IndianRupee,
  Zap,
} from "lucide-react";

export default function ChargingCostCalculator({ vehicle }) {
  const [unitPrice, setUnitPrice] = useState(8);

  const battery = vehicle.batteryKwh || 0;
  const range = vehicle.realRange || vehicle.claimedRange || 1;

  const fullChargeCost = useMemo(() => {
    return battery * unitPrice;
  }, [battery, unitPrice]);

  const costPerKm = useMemo(() => {
    return fullChargeCost / range;
  }, [fullChargeCost, range]);

  return (
    <section className="mt-16">

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white">
          Charging Cost Calculator
        </h2>

        <p className="mt-1 text-sm text-zinc-400">
          Estimate charging cost based on your electricity tariff.
        </p>
      </div>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">

        {/* Input */}

        <div className="mb-6">

          <label className="mb-2 block text-sm text-zinc-400">
            Electricity Price (₹ / Unit)
          </label>

          <input
            type="number"
            value={unitPrice}
            min={1}
            max={20}
            step={0.5}
            onChange={(e) =>
              setUnitPrice(Number(e.target.value))
            }
            className="
              w-32
              rounded-xl
              border
              border-zinc-700
              bg-zinc-800
              px-4
              py-2
              text-white
              outline-none
              focus:border-green-500
            "
          />

        </div>

        {/* Results */}

        <div className="grid gap-3 sm:grid-cols-3">

          <div className="rounded-xl border border-zinc-800 bg-zinc-800 p-4">

            <div className="flex items-center gap-2 text-green-400">

              <BatteryCharging size={18} />

              <span className="text-xs uppercase tracking-wide">
                Battery
              </span>

            </div>

            <h3 className="mt-2 text-xl font-bold text-white">
              {battery} kWh
            </h3>

          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-800 p-4">

            <div className="flex items-center gap-2 text-green-400">

              <IndianRupee size={18} />

              <span className="text-xs uppercase tracking-wide">
                Full Charge
              </span>

            </div>

            <h3 className="mt-2 text-xl font-bold text-white">
              ₹ {fullChargeCost.toFixed(0)}
            </h3>

          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-800 p-4">

            <div className="flex items-center gap-2 text-green-400">

              <Zap size={18} />

              <span className="text-xs uppercase tracking-wide">
                Cost / KM
              </span>

            </div>

            <h3 className="mt-2 text-xl font-bold text-white">
              ₹ {costPerKm.toFixed(2)}
            </h3>

          </div>

        </div>

        {/* Footer */}

        <div className="mt-5 rounded-xl bg-green-500/10 border border-green-500/20 p-3">

          <p className="text-xs text-green-300">
            Based on <strong>{battery} kWh</strong> battery and{" "}
            <strong>{range} km</strong> real-world driving range.
          </p>

        </div>

      </div>

    </section>
  );
}