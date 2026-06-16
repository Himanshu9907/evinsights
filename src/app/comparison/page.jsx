import Link from "next/link";
import { comparisons } from "@/data/comparisons";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ComparisonPage() {
  return (
    <>
      <Navbar />
      <main className="bg-black text-white min-h-screen pt-20">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 py-24 relative text-center">
          <span className="inline-block px-5 py-2 rounded-full border border-green-500 text-green-400">
            EV Comparison
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-8">
            EV <span className="text-green-400">Comparisons</span>
          </h1>

          <p className="max-w-3xl mx-auto text-gray-400 text-xl mt-8">
            Compare range, battery, performance, pricing and features side by
            side.
          </p>
        </div>

        {/* Stats */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
              <h3 className="text-3xl font-bold text-green-400">
                {comparisons.length}
              </h3>
              <p className="text-gray-400 mt-2">Comparisons</p>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
              <h3 className="text-3xl font-bold text-green-400">20+</h3>
              <p className="text-gray-400 mt-2">EV Models</p>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
              <h3 className="text-3xl font-bold text-green-400">500+</h3>
              <p className="text-gray-400 mt-2">Specs Compared</p>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
              <h3 className="text-3xl font-bold text-green-400">100%</h3>
              <p className="text-gray-400 mt-2">Data Driven</p>
            </div>
          </div>
        </section>

        {/* Comparison Cards */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <h2 className="text-4xl font-bold mb-12">Popular EV Comparisons</h2>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {comparisons.map((comparison) => (
            <Link
              key={comparison.slug}
              href={`/comparison/${comparison.slug}`}
              className="block"
            >
              <div className="bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden hover:border-green-500 hover:-translate-y-2 transition-all duration-300 h-full">

                {/* Vehicle Images */}
                <div className="grid grid-cols-2">
                  <img
                    src={comparison.image1}
                    alt={comparison.car1}
                    className="w-full h-52 object-cover"
                  />

                  <img
                    src={comparison.image2}
                    alt={comparison.car2}
                    className="w-full h-52 object-cover"
                  />
                </div>

                <div className="p-6">

                  <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm">
                    Comparison
                  </span>

                  <h2 className="text-2xl font-bold mt-4">
                    {comparison.car1}
                    <span className="text-green-400"> VS </span>
                    {comparison.car2}
                  </h2>

                  <p className="text-gray-400 mt-4">
                    Detailed comparison of specifications,
                    battery, range, charging speed, performance
                    and pricing.
                  </p>

                  <div className="mt-6 pt-4 border-t border-zinc-800 flex justify-between items-center">
                    <span className="text-gray-500 text-sm">
                      EV Comparison
                    </span>

                    <span className="text-green-400 font-semibold">
                      Compare Now →
                    </span>
                  </div>

                </div>

              </div>
            </Link>
          ))}

        </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


// import Link from "next/link";
// import { comparisons } from "@/data/comparisons";

// export default function ComparisonPage() {
//   return (
//     <main className="bg-black text-white min-h-screen">
//       <div className="max-w-7xl mx-auto px-6 py-20">

//         {/* Hero */}
//         <div className="text-center mb-20">
//           <span className="px-4 py-2 rounded-full border border-green-500 text-green-400">
//             EV Comparison Hub
//           </span>

//           <h1 className="text-5xl md:text-6xl font-bold mt-8">
//             EV <span className="text-green-400">Comparisons</span>
//           </h1>

//           <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
//             Compare range, battery, charging speed, performance,
//             features and pricing of India's top electric vehicles.
//           </p>
//         </div>

//         {/* Comparison Cards */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

//           {comparisons.map((comparison) => (
//             <Link
//               key={comparison.slug}
//               href={`/comparison/${comparison.slug}`}
//               className="block"
//             >
//               <div className="bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden hover:border-green-500 hover:-translate-y-2 transition-all duration-300 h-full">

//                 {/* Vehicle Images */}
//                 <div className="grid grid-cols-2">
//                   <img
//                     src={comparison.image1}
//                     alt={comparison.car1}
//                     className="w-full h-52 object-cover"
//                   />

//                   <img
//                     src={comparison.image2}
//                     alt={comparison.car2}
//                     className="w-full h-52 object-cover"
//                   />
//                 </div>

//                 <div className="p-6">

//                   <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm">
//                     Comparison
//                   </span>

//                   <h2 className="text-2xl font-bold mt-4">
//                     {comparison.car1}
//                     <span className="text-green-400"> VS </span>
//                     {comparison.car2}
//                   </h2>

//                   <p className="text-gray-400 mt-4">
//                     Detailed comparison of specifications,
//                     battery, range, charging speed, performance
//                     and pricing.
//                   </p>

//                   <div className="mt-6 pt-4 border-t border-zinc-800 flex justify-between items-center">
//                     <span className="text-gray-500 text-sm">
//                       EV Comparison
//                     </span>

//                     <span className="text-green-400 font-semibold">
//                       Compare Now →
//                     </span>
//                   </div>

//                 </div>

//               </div>
//             </Link>
//           ))}

//         </div>

//       </div>
//     </main>
//   );
// }