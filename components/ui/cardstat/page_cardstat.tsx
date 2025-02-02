'use client'
// import StatCard from "./statcard";
import { list_stat } from "@/config/lists";

import dynamic from 'next/dynamic'

// // import MapLibreGL_Map from "./myMap";
const StatCard = dynamic(
  () => import('./statcard'),
  { ssr: false }
)

export default function CardStat() {
  

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">

      {list_stat.map((item, index) => (
        <StatCard key={index} item={item}/>  
        ))
      }

    </div>
  );
}
// CardHeader
