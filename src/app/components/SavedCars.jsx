// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// import { Trash2 } from "lucide-react";

// const [cars, setCars] = useState([]);

// useEffect(() => {
//   loadCars();
// }, []);

// async function loadCars() {
//   const slugs = JSON.parse(localStorage.getItem("savedEVs") || "[]");

//   if (slugs.length === 0) {
//     setCars([]);
//     return;
//   }

//   const res = await fetch("/api/saved", {
//     method: "POST",

//     headers: {
//       "Content-Type": "application/json",
//     },

//     body: JSON.stringify({
//       slugs,
//     }),
//   });

//   const data = await res.json();

//   setCars(data);
// }

// function removeCar(slug) {
//   const saved = JSON.parse(localStorage.getItem("savedEVs") || "[]");

//   const updated = saved.filter((item) => item !== slug);

//   localStorage.setItem("savedEVs", JSON.stringify(updated));

//   loadCars();
// }

// return (
//   <div className="mx-auto max-w-7xl px-5 py-14">
//     <h1 className="mb-10 text-4xl font-bold">Saved Vehicles</h1>

//     {cars.length === 0 ? (
//       <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-16 text-center">
//         <h2 className="text-2xl font-bold">No Saved Vehicles</h2>

//         <p className="mt-3 text-zinc-500">
//           Save your favourite EVs to see them here.
//         </p>

//         <Link
//           href="/ev"
//           className="mt-6 inline-flex rounded-xl bg-green-500 px-6 py-3 font-semibold text-black"
//         >
//           Browse EVs
//         </Link>
//       </div>
//     ) : (
//       <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//         {cars.map((car) => (
//           <div
//             key={car.id}
//             className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900"
//           >
//             <div className="relative aspect-[16/10]">
//               <Image
//                 src={car.image}
//                 alt={car.name}
//                 fill
//                 className="object-cover"
//               />
//             </div>

//             <div className="p-5">
//               <p className="text-green-400">{car.brand.name}</p>

//               <h2 className="mt-2 text-2xl font-bold">{car.name}</h2>

//               <p className="mt-3 text-lg font-semibold">
//                 ₹ {(car.exShowroomPrice / 100000).toFixed(2)} Lakh
//               </p>

//               <div className="mt-5 flex gap-3">
//                 <Link
//                   href={`/ev/${car.slug}`}
//                   className="flex-1 rounded-xl bg-green-500 py-3 text-center font-semibold text-black"
//                 >
//                   View Details
//                 </Link>

//                 <button
//                   onClick={() => removeCar(car.slug)}
//                   className="rounded-xl border border-red-500 px-4 text-red-400"
//                 >
//                   <Trash2 size={18} />
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     )}
//   </div>
// );


"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";

export default function SavedCars() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCars();
  }, []);

  async function loadCars() {
    setLoading(true);

    const slugs = JSON.parse(localStorage.getItem("savedEVs") || "[]");

    if (slugs.length === 0) {
      setCars([]);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/saved", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ slugs }),
      });

      const data = await res.json();
      setCars(data);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  }

  function removeCar(slug) {
    const saved = JSON.parse(localStorage.getItem("savedEVs") || "[]");

    const updated = saved.filter((item) => item !== slug);

    localStorage.setItem("savedEVs", JSON.stringify(updated));

    loadCars();
  }

  if (loading) {
    return (
      <div className="mx-auto max-w-7xl px-5 py-20">
        <h1 className="text-4xl font-bold mb-10">Saved Vehicles</h1>

        <div className="text-zinc-400">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-5 py-20">

      <h1 className="mb-10 text-4xl font-bold">
        Saved Vehicles
      </h1>

      {cars.length === 0 ? (

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-16 text-center">

          <h2 className="text-2xl font-bold">
            No Saved Vehicles
          </h2>

          <p className="mt-3 text-zinc-500">
            Save your favourite EVs to see them here.
          </p>

          <Link
            href="/ev"
            className="mt-6 inline-flex rounded-xl bg-green-500 px-6 py-3 font-semibold text-black hover:bg-green-400 transition"
          >
            Browse EVs
          </Link>

        </div>

      ) : (

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

          {cars.map((car) => (

            <div
              key={car.id}
              className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition hover:border-green-500"
            >

              <div className="relative aspect-[16/10]">

                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
                />

              </div>

              <div className="p-6">

                <p className="text-sm uppercase tracking-wider text-green-400">
                  {car.brand.name}
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  {car.name}
                </h2>

                <p className="mt-3 text-lg font-semibold">
                  ₹ {(car.exShowroomPrice / 100000).toFixed(2)} Lakh
                </p>

                <div className="mt-6 flex gap-3">

                  <Link
                    href={`/ev/${car.slug}`}
                    className="flex-1 rounded-xl bg-green-500 py-3 text-center font-semibold text-black transition hover:bg-green-400"
                  >
                    View Details
                  </Link>

                  <button
                    onClick={() => removeCar(car.slug)}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-red-500 text-red-400 transition hover:bg-red-500 hover:text-white"
                  >
                    <Trash2 size={18} />
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}