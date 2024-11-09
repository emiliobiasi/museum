// src/pages/Home.tsx

import { MuseumBanner } from "@/components/MuseumBanner/museum-banner";
import { MuseumMission } from "@/components/MuseumMission/museum-mission";
import { VisitaGuiadaSection } from "@/components/VisitaGuiadaSection/visita-guiada-section";

export default function Home() {
  return (
    <>
      <MuseumBanner />
      <VisitaGuiadaSection />
      <MuseumMission />
    </>
  );
}
