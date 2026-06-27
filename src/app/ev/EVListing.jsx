import EVCard from "./EVCard";

export default function EVListing({ vehicles }) {
  if (!vehicles.length) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-gray-300">
          No EV Found
        </h2>

        <p className="text-gray-500 mt-3">
          Try searching with another keyword.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {vehicles.map((vehicle) => (
        <EVCard
          key={vehicle.id}
          vehicle={vehicle}
        />
      ))}
    </div>
  );
}