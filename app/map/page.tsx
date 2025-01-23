'use client'

import { MapProvider } from "react-map-gl";
import MapLibreGL_Map from "./Map";

export default function Map_GL() {
  return (
    <MapProvider>

      <MapLibreGL_Map />
    </MapProvider>
      

  );
}
