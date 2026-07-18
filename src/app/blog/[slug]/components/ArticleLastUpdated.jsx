"use client";

import { CalendarDays, RefreshCw } from "lucide-react";

export default function ArticleLastUpdated({ article }) {
  return (
    <section className="mx-auto max-w-4xl px-4 py-10">

      <div className="rounded-2xl border border-theme bg-card p-6">

        <h3 className="mb-4 text-xl font-bold text-foreground">
          Article Information
        </h3>

        <div className="grid gap-5 sm:grid-cols-2">

          <div className="flex items-center gap-3">

            <div className="rounded-full bg-primary/10 p-3">

              <CalendarDays
                size={20}
                className="text-primary"
              />

            </div>

            <div>

              <p className="text-sm text-muted">
                Published
              </p>

              <p className="font-semibold text-foreground">
                {new Date(article.createdAt).toLocaleDateString(
                  "en-IN",
                  {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }
                )}
              </p>

            </div>

          </div>

          <div className="flex items-center gap-3">

            <div className="rounded-full bg-primary/10 p-3">

              <RefreshCw
                size={20}
                className="text-primary"
              />

            </div>

            <div>

              <p className="text-sm text-muted">
                Last Updated
              </p>

              <p className="font-semibold text-foreground">
                {new Date(article.updatedAt).toLocaleDateString(
                  "en-IN",
                  {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }
                )}
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}