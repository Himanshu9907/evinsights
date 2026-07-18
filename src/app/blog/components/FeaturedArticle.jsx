// import Image from "next/image";
// import Link from "next/link";

// import {
//   CalendarDays,
//   Clock3,
//   ArrowRight,
//   User,
// } from "lucide-react";

// export default function FeaturedArticle({
//   article,
// }) {
//   if (!article) return null;

//   const formattedDate = new Date(
//     article.createdAt
//   ).toLocaleDateString("en-IN", {
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//   });

//   return (
//     <section>

//       {/* Heading */}

//       <div className="mb-8 flex items-center justify-between">

//         <div>

//           <p className="text-sm font-semibold uppercase tracking-widest text-green-500">
//             Featured Story
//           </p>

//           <h2 className="mt-2 text-3xl font-black text-foreground">
//             Editor's Pick
//           </h2>

//         </div>

//       </div>

//       {/* Card */}

//       <div
//         className="
//           overflow-hidden
//           rounded-3xl
//           border
//           border-theme
//           bg-card
//           shadow-theme
//           transition-all
//           duration-300
//           hover:-translate-y-1
//         "
//       >
//         <div className="grid lg:grid-cols-2">

//           {/* Image */}

//           <div className="relative min-h-[300px] lg:min-h-[520px]">

//             <Image
//               src={article.image || "/ev-car.jpg"}
//               alt={article.title}
//               fill
//               className="object-cover"
//               priority
//             />

//             <div
//               className="
//                 absolute
//                 inset-0
//                 bg-gradient-to-t
//                 from-black/60
//                 via-black/10
//                 to-transparent
//               "
//             />

//             <div className="absolute left-6 top-6">

//               <span
//                 className="
//                   rounded-full
//                   bg-green-500
//                   px-4
//                   py-2
//                   text-xs
//                   font-bold
//                   text-black
//                 "
//               >
//                 {article.category.name}
//               </span>

//             </div>

//           </div>

//           {/* Content */}

//           <div
//             className="
//               flex
//               flex-col
//               justify-center
//               p-8
//               lg:p-12
//             "
//           >

//             {/* Meta */}

//             <div
//               className="
//                 flex
//                 flex-wrap
//                 gap-5
//                 text-sm
//                 text-muted
//               "
//             >

//               <span className="flex items-center gap-2">

//                 <CalendarDays size={16} />

//                 {formattedDate}

//               </span>

//               <span className="flex items-center gap-2">

//                 <Clock3 size={16} />

//                 {article.readTime || 5} min read

//               </span>

//               <span className="flex items-center gap-2">

//                 <User size={16} />

//                 {article.author.name}

//               </span>

//             </div>

//             {/* Title */}

//             <h2
//               className="
//                 mt-6
//                 text-3xl
//                 font-black
//                 leading-tight
//                 text-foreground
//                 lg:text-5xl
//               "
//             >
//               {article.title}
//             </h2>

//             {/* Excerpt */}

//             <p
//               className="
//                 mt-6
//                 text-lg
//                 leading-8
//                 text-muted
//               "
//             >
//               {article.excerpt}
//             </p>

//             {/* Button */}

//             <div className="mt-10">

//               <Link
//                 href={`/blog/${article.slug}`}
//                 className="
//                   inline-flex
//                   items-center
//                   gap-3
//                   rounded-xl
//                   bg-green-500
//                   px-6
//                   py-4
//                   font-semibold
//                   text-black
//                   transition-all
//                   duration-300
//                   hover:gap-5
//                 "
//               >
//                 Read Full Article

//                 <ArrowRight size={18} />

//               </Link>

//             </div>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }


import Link from "next/link";
import Image from "next/image";

import {
  ArrowRight,
  CalendarDays,
  Clock3,
  User,
} from "lucide-react";

export default function FeaturedArticle({
  article,
}) {
  if (!article) return null;

  const date = new Date(
    article.createdAt
  ).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section>

      {/* Heading */}

      <div className="mb-8">

        <span
          className="
            text-sm
            font-bold
            uppercase
            tracking-[0.25em]
            text-green-500
          "
        >
          Featured Story
        </span>

        <h2
          className="
            mt-2
            text-3xl
            font-black
            lg:text-5xl
          "
        >
          Editor's Pick
        </h2>

      </div>

      {/* Card */}

      <article
        className="
          overflow-hidden
          rounded-3xl
          border
          border-theme
          bg-card
          shadow-theme
          transition
          duration-300
          hover:-translate-y-1
        "
      >

        <div
          className="
            grid
            lg:grid-cols-2
          "
        >

          {/* IMAGE */}
                    <Link
            href={`/blog/${article.slug}`}
            className="
              relative
              block
              min-h-[260px]
              lg:min-h-[420px]
              overflow-hidden
              bg-muted
            "
          >
            <Image
              src={article.image || "/ev-car.jpg"}
              alt={article.title}
              fill
              priority
              className="
                object-cover
                transition-transform
                duration-500
                hover:scale-105
              "
            />

            {/* Overlay */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/60
                via-black/10
                to-transparent
              "
            />

            {/* Category */}

            <span
              className="
                absolute
                left-6
                top-6
                rounded-full
                bg-green-500
                px-4
                py-2
                text-sm
                font-semibold
                text-black
              "
            >
              {article.category?.name || "EV News"}
            </span>
          </Link>

          {/* CONTENT */}

          <div
            className="
              flex
              flex-col
              justify-center
              p-8
              lg:p-10
            "
          >
            {/* Meta */}

            <div
              className="
                flex
                flex-wrap
                items-center
                gap-5
                text-sm
                text-muted
              "
            >
              <div className="flex items-center gap-2">
                <CalendarDays size={16} />
                {date}
              </div>

              <div className="flex items-center gap-2">
                <Clock3 size={16} />
                5 min read
              </div>

              <div className="flex items-center gap-2">
                <User size={16} />
                {article.author?.name || "EV Insights"}
              </div>
            </div>

            {/* Title */}

            <Link href={`/blog/${article.slug}`}>
              <h3
                className="
                  mt-6
                  text-3xl
                  font-black
                  leading-tight
                  transition
                  hover:text-green-500
                  lg:text-5xl
                "
              >
                {article.title}
              </h3>
            </Link>

            {/* Excerpt */}

            <p
              className="
                mt-6
                line-clamp-3
                text-lg
                leading-8
                text-muted
              "
            >
              {article.excerpt}
            </p>

            {/* Button */}

            <div className="mt-8">

              <Link
                href={`/blog/${article.slug}`}
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-xl
                  bg-green-500
                  px-6
                  py-3
                  font-semibold
                  text-black
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                Read Full Article

                <ArrowRight size={20} />
              </Link>

            </div>

          </div>

        </div>

      </article>

    </section>
  );
}