// import EVCard from "./EVCard";

// export default function EVListing({ vehicles }) {
//   if (!vehicles.length) {
//     return (
//       <div className="text-center py-20">
//         <h2 className="text-2xl font-semibold text-gray-300">
//           No EV Found
//         </h2>

//         <p className="text-gray-500 mt-3">
//           Try searching with another keyword.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
//       {vehicles.map((vehicle) => (
//         <EVCard
//           key={vehicle.id}
//           vehicle={vehicle}
//         />
//       ))}
//     </div>
//   );
// }

import EVCard from "./EVCard";

export default function EVListing({ vehicles }) {
  if (!vehicles.length) {
    return (
      <div className="flex min-h-[350px] flex-col items-center justify-center rounded-3xl border border-theme bg-card shadow-theme">

        <div className="text-6xl">🚗</div>

        <h2 className="mt-6 text-3xl font-bold text-foreground">
          No EV Found
        </h2>

        <p className="mt-3 max-w-md text-center text-muted">
          We couldn't find any electric vehicle matching your search.
          Try changing filters or search keywords.
        </p>

      </div>
    );
  }

  return (
    <div
      className="
        grid
        grid-cols-1
        gap-6
        sm:grid-cols-2
        xl:grid-cols-3
      "
    >
      {vehicles.map((vehicle) => (
        <EVCard
          key={vehicle.id}
          vehicle={vehicle}
        />
      ))}
    </div>
  );
}