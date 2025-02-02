"use client"

import CardStat from "@/components/ui/cardstat/page_cardstat";
import { MapProvider } from "@vis.gl/react-maplibre";

export default function Home() {
  
  // chrome.storage.session.setAccessLevel({ accessLevel: 'TRUSTED_AND_UNTRUSTED_CONTEXTS' });
  return (
      <section className=""> 
        <MapProvider>
          <CardStat/>
        </MapProvider>
        
      </section>
  );
}
