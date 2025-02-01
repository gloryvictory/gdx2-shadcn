'use client'

// import { MapProvider } from "react-map-gl";
// import MapLibreGL_Map from "./MapLibreGL_Map";
import dynamic from 'next/dynamic'

// import MapLibreGL_Map from "./myMap";
const DynamicComponentWithNoSSR = dynamic(
  () => import('./MapLibreGL_Map'),
  { ssr: false }
)


export default function Map_GL() {
  return (
    // <MapProvider>
      <DynamicComponentWithNoSSR />
      // <MapLibreGL_Map />
    // </MapProvider>
      

  );
}
