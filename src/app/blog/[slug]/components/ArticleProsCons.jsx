// "use client";

// import { CheckCircle2, XCircle } from "lucide-react";

// export default function ArticleProsCons({ article }) {
//   const hasPros = article.pros?.length > 0;
//   const hasCons = article.cons?.length > 0;

//   if (!hasPros && !hasCons) return null;

//   return (
//     <section className="mx-auto max-w-4xl px-4 py-10">

//       <h2 className="mb-8 text-3xl font-bold">
//         Pros & Cons
//       </h2>

//       <div className="grid gap-6 md:grid-cols-2">

//         {/* Pros */}

//         <div className="rounded-2xl border border-green-200 bg-green-50 p-6 dark:border-green-900 dark:bg-green-950/30">

//           <h3 className="mb-5 flex items-center gap-2 text-xl font-bold text-green-700 dark:text-green-400">
//             <CheckCircle2 size={22} />
//             Pros
//           </h3>

//           <ul className="space-y-4">

//             {article.pros?.map((item, index) => (
//               <li
//                 key={index}
//                 className="flex items-start gap-3"
//               >
//                 <CheckCircle2
//                   size={18}
//                   className="mt-1 shrink-0 text-green-600"
//                 />

//                 <span className="leading-7">
//                   {item}
//                 </span>
//               </li>
//             ))}

//           </ul>

//         </div>

//         {/* Cons */}

//         <div className="rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950/30">

//           <h3 className="mb-5 flex items-center gap-2 text-xl font-bold text-red-700 dark:text-red-400">
//             <XCircle size={22} />
//             Cons
//           </h3>

//           <ul className="space-y-4">

//             {article.cons?.map((item, index) => (
//               <li
//                 key={index}
//                 className="flex items-start gap-3"
//               >
//                 <XCircle
//                   size={18}
//                   className="mt-1 shrink-0 text-red-600"
//                 />

//                 <span className="leading-7">
//                   {item}
//                 </span>
//               </li>
//             ))}

//           </ul>

//         </div>

//       </div>

//     </section>
//   );
// }


"use client";

import { CheckCircle2, XCircle } from "lucide-react";

export default function ArticleProsCons({ article }) {
  const hasPros = article.pros?.length > 0;
  const hasCons = article.cons?.length > 0;

  if (!hasPros && !hasCons) return null;

  return (
    <section className="mx-auto max-w-4xl px-4 py-14">

      <div className="mb-10">
        <h2 className="text-3xl font-bold text-foreground">
          Pros & Cons
        </h2>

        <p className="mt-2 text-muted">
          Here's a quick overview of the biggest strengths and weaknesses
          of the vehicle.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        {/* Pros */}

        <div className="rounded-3xl border border-theme bg-card p-8 shadow-sm">

          <div className="mb-6 flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-500/10">

              <CheckCircle2
                size={22}
                className="text-green-500"
              />

            </div>

            <div>

              <h3 className="text-2xl font-bold text-foreground">
                Pros
              </h3>

              <p className="text-sm text-muted">
                What we liked
              </p>

            </div>

          </div>

          <ul className="space-y-5">

            {article.pros?.map((item, index) => (

              <li
                key={index}
                className="flex items-start gap-4"
              >

                <CheckCircle2
                  size={20}
                  className="mt-1 shrink-0 text-green-500"
                />

                <span className="leading-7 text-foreground">
                  {item}
                </span>

              </li>

            ))}

          </ul>

        </div>

        {/* Cons */}

        <div className="rounded-3xl border border-theme bg-card p-8 shadow-sm">

          <div className="mb-6 flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-500/10">

              <XCircle
                size={22}
                className="text-red-500"
              />

            </div>

            <div>

              <h3 className="text-2xl font-bold text-foreground">
                Cons
              </h3>

              <p className="text-sm text-muted">
                Things that could be better
              </p>

            </div>

          </div>

          <ul className="space-y-5">

            {article.cons?.map((item, index) => (

              <li
                key={index}
                className="flex items-start gap-4"
              >

                <XCircle
                  size={20}
                  className="mt-1 shrink-0 text-red-500"
                />

                <span className="leading-7 text-foreground">
                  {item}
                </span>

              </li>

            ))}

          </ul>

        </div>

      </div>

    </section>
  );
}