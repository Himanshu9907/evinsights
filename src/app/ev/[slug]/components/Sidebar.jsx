"use client";

import EMICalculator from "./EMICalculator";
import ActionButtons from "./ActionButtons";
import SimilarEVs from "./SimilarEVs";

export default function Sidebar({ vehicle }) {
  return (
    <aside className="space-y-6 lg:sticky lg:top-24">

      <EMICalculator vehicle={vehicle} />

      <ActionButtons vehicle={vehicle} />

      <SimilarEVs vehicle={vehicle} />

    </aside>
  );
}