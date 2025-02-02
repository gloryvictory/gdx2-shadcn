'use client'

// import { MapProvider } from "react-map-gl";
// import MapLibreGL_Map from "./MapLibreGL_Map";
import dynamic from 'next/dynamic'

// // import MapLibreGL_Map from "./myMap";
const MapLibreGLMapDynamicComponentWithNoSSR = dynamic(
  () => import('./MapLibreGL_Map'),
  { ssr: false }
)


export default function Map_GL() {
  return (
    // <h1>test</h1>
    // <MapProvider>
      <MapLibreGLMapDynamicComponentWithNoSSR />
    // </MapProvider>
  );
}
