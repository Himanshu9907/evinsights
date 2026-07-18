// "use client";

// import { useMemo, useState } from "react";
// import { Calculator } from "lucide-react";

// export default function EMICalculator({ vehicle }) {
//   const price = vehicle.exShowroomPrice || 0;

//   const [downPayment, setDownPayment] = useState(
//     Math.round(price * 0.20)
//   );

//   const [interest, setInterest] = useState(9);

//   const [years, setYears] = useState(5);

//   const loanAmount = price - downPayment;

//   const emi = useMemo(() => {
//     const monthlyRate = interest / 12 / 100;
//     const months = years * 12;

//     if (monthlyRate === 0) {
//       return loanAmount / months;
//     }

//     return (
//       (loanAmount *
//         monthlyRate *
//         Math.pow(1 + monthlyRate, months)) /
//       (Math.pow(1 + monthlyRate, months) - 1)
//     );
//   }, [loanAmount, interest, years]);

//   return (
//     <section id="emi">
//     <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

//       <div className="flex items-center gap-3">

//         <div className="rounded-xl bg-green-500/10 p-3">
//           <Calculator className="text-green-400" size={22} />
//         </div>

//         <div>

//           <h3 className="text-lg font-bold text-white">
//             EMI Calculator
//           </h3>

//           <p className="text-sm text-zinc-400">
//             Estimate your monthly EMI
//           </p>

//         </div>

//       </div>

//       <div className="mt-6">

//         <p className="text-sm text-zinc-400">
//           Vehicle Price
//         </p>

//         <h2 className="mt-1 text-2xl font-bold text-white">
//           ₹ {(price / 100000).toFixed(2)} Lakh
//         </h2>

//       </div>

//       {/* Down Payment */}

//       <div className="mt-6">

//         <div className="flex justify-between text-sm">

//           <span className="text-zinc-400">
//             Down Payment
//           </span>

//           <span className="font-semibold text-white">
//             ₹ {downPayment.toLocaleString("en-IN")}
//           </span>

//         </div>

//         <input
//           type="range"
//           min={0}
//           max={price}
//           step={10000}
//           value={downPayment}
//           onChange={(e) =>
//             setDownPayment(Number(e.target.value))
//           }
//           className="mt-3 w-full accent-green-500"
//         />

//       </div>

//       {/* Interest */}

//       <div className="mt-6">

//         <label className="text-sm text-zinc-400">
//           Interest Rate
//         </label>

//         <select
//           value={interest}
//           onChange={(e) =>
//             setInterest(Number(e.target.value))
//           }
//           className="mt-2 w-full rounded-xl border border-zinc-700 bg-zinc-800 p-3 text-white outline-none"
//         >
//           <option value={7}>7%</option>
//           <option value={8}>8%</option>
//           <option value={9}>9%</option>
//           <option value={10}>10%</option>
//           <option value={11}>11%</option>
//         </select>

//       </div>

//       {/* Tenure */}

//       <div className="mt-5">

//         <label className="text-sm text-zinc-400">
//           Loan Tenure
//         </label>

//         <select
//           value={years}
//           onChange={(e) =>
//             setYears(Number(e.target.value))
//           }
//           className="mt-2 w-full rounded-xl border border-zinc-700 bg-zinc-800 p-3 text-white outline-none"
//         >
//           <option value={3}>3 Years</option>
//           <option value={5}>5 Years</option>
//           <option value={7}>7 Years</option>
//         </select>

//       </div>

//       {/* Loan */}

//       <div className="mt-6 rounded-xl bg-zinc-800 p-4">

//         <div className="flex justify-between">

//           <span className="text-zinc-400">
//             Loan Amount
//           </span>

//           <span className="font-semibold text-white">
//             ₹ {loanAmount.toLocaleString("en-IN")}
//           </span>

//         </div>

//       </div>

//       {/* EMI */}

//       <div className="mt-5 rounded-xl bg-green-500 p-5 text-center">

//         <p className="text-sm font-medium text-black">
//           Estimated Monthly EMI
//         </p>

//         <h2 className="mt-2 text-3xl font-bold text-black">
//           ₹ {Math.round(emi).toLocaleString("en-IN")}
//         </h2>

//       </div>

//     </div>
//     </section>
//   );
// }


"use client";

import { useMemo, useState } from "react";
import { Calculator } from "lucide-react";

export default function EMICalculator({ vehicle }) {
  const price = vehicle.exShowroomPrice || 0;

  const [downPayment, setDownPayment] = useState(
    Math.round(price * 0.2)
  );

  const [interest, setInterest] = useState(9);
  const [years, setYears] = useState(5);

  const loanAmount = price - downPayment;

  const emi = useMemo(() => {
    const monthlyRate = interest / 12 / 100;
    const months = years * 12;

    if (monthlyRate === 0) {
      return loanAmount / months;
    }

    return (
      (loanAmount *
        monthlyRate *
        Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1)
    );
  }, [loanAmount, interest, years]);

  return (
    <section id="emi" className="mt-14">

      {/* Header */}

      <div className="rounded-2xl border border-theme bg-card p-6 shadow-theme">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-green-500/10 p-3">
            <Calculator
              size={22}
              className="text-green-500"
            />
          </div>

          <div>

            <h3 className="text-lg font-bold text-foreground">
              EMI Calculator
            </h3>

            <p className="text-sm text-muted">
              Estimate your monthly EMI
            </p>

          </div>

        </div>

        {/* Vehicle Price */}

        <div className="mt-6">

          <p className="text-sm text-muted">
            Vehicle Price
          </p>

          <h2 className="mt-1 text-2xl font-bold text-foreground">
            ₹ {(price / 100000).toFixed(2)} Lakh
          </h2>

        </div>

        {/* Down Payment */}

        <div className="mt-6">

          <div className="mb-2 flex items-center justify-between">

            <span className="text-sm text-muted">
              Down Payment
            </span>

            <span className="font-semibold text-foreground">
              ₹ {downPayment.toLocaleString("en-IN")}
            </span>

          </div>

          <input
            type="range"
            min={0}
            max={price}
            step={10000}
            value={downPayment}
            onChange={(e) =>
              setDownPayment(Number(e.target.value))
            }
            className="w-full accent-green-500"
          />

        </div>

        {/* Interest Rate */}

        <div className="mt-6">

          <label className="text-sm text-muted">
            Interest Rate
          </label>

          <select
            value={interest}
            onChange={(e) =>
              setInterest(Number(e.target.value))
            }
            className="
              mt-2
              w-full
              rounded-xl
              border
              border-theme
              bg-background
              p-3
              text-foreground
              outline-none
              transition-all
              focus:border-green-500
              focus:ring-2
              focus:ring-green-500/20
            "
          >
            <option value={7}>7%</option>
            <option value={8}>8%</option>
            <option value={9}>9%</option>
            <option value={10}>10%</option>
            <option value={11}>11%</option>
          </select>

        </div>
                {/* Loan Tenure */}

        <div className="mt-5">

          <label className="text-sm text-muted">
            Loan Tenure
          </label>

          <select
            value={years}
            onChange={(e) =>
              setYears(Number(e.target.value))
            }
            className="
              mt-2
              w-full
              rounded-xl
              border
              border-theme
              bg-background
              p-3
              text-foreground
              outline-none
              transition-all
              focus:border-green-500
              focus:ring-2
              focus:ring-green-500/20
            "
          >
            <option value={3}>3 Years</option>
            <option value={5}>5 Years</option>
            <option value={7}>7 Years</option>
          </select>

        </div>

        {/* Loan Amount */}

        <div className="mt-6 rounded-xl border border-theme bg-background p-4">

          <div className="flex items-center justify-between">

            <span className="text-muted">
              Loan Amount
            </span>

            <span className="font-semibold text-foreground">
              ₹ {loanAmount.toLocaleString("en-IN")}
            </span>

          </div>

        </div>

        {/* EMI Result */}

        <div className="mt-5 rounded-xl bg-green-500 p-5 text-center">

          <p className="text-sm font-medium text-black">
            Estimated Monthly EMI
          </p>

          <h2 className="mt-2 text-3xl font-bold text-black">
            ₹ {Math.round(emi).toLocaleString("en-IN")}
          </h2>

        </div>

        {/* Note */}

        <div className="mt-5 rounded-xl border border-green-500/20 bg-green-500/10 p-4">

          <p className="text-sm leading-6 text-muted">

            <span className="font-semibold text-green-500">
              Note:
            </span>{" "}

            EMI is calculated using the standard reducing balance
            formula. Actual EMI may vary depending on the bank,
            processing fees, insurance and applicable offers.

          </p>

        </div>

      </div>

    </section>
  );
}