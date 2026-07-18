export default function KeyTakeaways() {
  const takeaways = [
    "Long driving range suitable for daily and highway use.",
    "Fast charging support reduces charging time.",
    "Advanced safety and connected car features.",
    "Low running and maintenance cost.",
  ];

  return (
    <section className="mx-auto mt-10 max-w-4xl px-4">
      <div
        className="
          rounded-3xl
          border
          border-green-500/20
          bg-green-500/5
          p-8
        "
      >
        <h2 className="mb-6 text-2xl font-bold">
          Key Takeaways
        </h2>

        <ul className="space-y-4">
          {takeaways.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3"
            >
              <span className="mt-2 h-2 w-2 rounded-full bg-green-500" />

              <span className="leading-7 text-muted">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}