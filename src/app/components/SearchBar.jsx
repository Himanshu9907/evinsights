"use client";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <>
    <div className="mb-10">
      <input
        type="text"
        placeholder="Search EV articles..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-green-500"
      />
    </div>

    </>
  );
}