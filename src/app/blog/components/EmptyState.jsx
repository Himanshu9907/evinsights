import Link from "next/link";
import { FileX } from "lucide-react";

export default function EmptyState() {
  return (
    <section className="py-24">
      <div
        className="
          mx-auto
          max-w-3xl
          rounded-3xl
          border
          border-theme
          bg-card
          p-12
          text-center
        "
      >
        <div
          className="
            mx-auto
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            bg-green-500/10
          "
        >
          <FileX
            size={40}
            className="text-green-500"
          />
        </div>

        <h2
          className="
            mt-8
            text-3xl
            font-black
            text-foreground
          "
        >
          No Articles Found
        </h2>

        <p
          className="
            mt-4
            text-lg
            leading-8
            text-muted
          "
        >
          There are no published articles right now.
          Please check back later for the latest EV news,
          reviews and buying guides.
        </p>

        <Link
          href="/"
          className="
            mt-8
            inline-flex
            items-center
            rounded-xl
            bg-green-500
            px-6
            py-3
            font-semibold
            text-black
            transition
            hover:scale-105
          "
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}