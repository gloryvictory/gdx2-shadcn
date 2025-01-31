"use client"

import CardStat from "@/components/ui/cardstat/page_cardstat";
import { MapProvider } from "@vis.gl/react-maplibre";

export default function Home() {
  return (
      <section className=""> 
        <MapProvider>
          <CardStat/>
        </MapProvider>
        
      </section>
  );
}
