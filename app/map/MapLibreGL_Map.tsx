'use client'


import * as React from 'react';
import {AttributionControl, FullscreenControl, GeolocateControl, Layer, Map, NavigationControl, ScaleControl, Source} from '@vis.gl/react-maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { fieldLayer, fieldSource, luLayer, luSource, lu_labels_Layer, sta_Layer, sta_Source, stl_Layer, stl_Source, stp_Layer, stp_Source } from './layers';


import { LIGHT_MAP_STYLE } from "./basemaps";



export default function MapLibreGL_Map() {
  return(
    <Map
      initialViewState={{
        longitude: 66,
        latitude: 66,
        zoom: 3.5,
        bearing: 0,
        pitch: 0
      }}
      // style={{width: 600, height: 400}}
      style={{ width: "100vw", height: "100vh", left:0, position:"absolute" }}
      // style={{ width: '51vw', height: '80vh' }}
      // mapStyle="https://demotiles.maplibre.org/style.json"
      mapStyle={LIGHT_MAP_STYLE}
    >
    <Source {...fieldSource}   >
      <Layer {...fieldLayer} />
    </Source>  
    
    <Source {...luSource}   >
      <Layer {...luLayer} />
    </Source>   

    {/* <Source {...luSource}   >
      <Layer {...lu_labels_Layer} />
    </Source>   */}

    <Source {...sta_Source}   >
      <Layer {...sta_Layer} />
    </Source>   

    <Source {...stl_Source}   >
      <Layer {...stl_Layer} />
    </Source>   

    <Source {...stp_Source}   >
      <Layer {...stp_Layer} />
    </Source>   


    <FullscreenControl  position="top-right" style={{ marginRight: 10 }} />
    <GeolocateControl   position="top-right" style={{ marginRight: 10 }}/>
    <NavigationControl  position="top-right" style={{ marginRight: 10 }}/>
    <ScaleControl       position="bottom-right" style={{ marginRight: 10 }}/>
    {/* <AttributionControl customAttribution="vzam" /> */}

    </Map>

  )
  
  
}

// export default function MapLibreGL_Map() {
//   return(

    

//   )
// }
