'use client'


import * as React from 'react';
import {AttributionControl, FullscreenControl, GeolocateControl, Layer, Map, MapRef, NavigationControl, ScaleControl, Source} from '@vis.gl/react-maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { fieldLayer, fieldSource, luLayer, luSource, lu_labels_Layer, sta_Layer, sta_Source, stl_Layer, stl_Source, stp_Layer, stp_Source } from './layers';


import { LIGHT_MAP_STYLE } from "./basemaps";
import { Button } from '@/components/ui/button';
import { legend } from './legend';

// import 'maplibre-gl/dist/maplibre-gl.css';

import '@watergis/maplibre-gl-legend/dist/maplibre-gl-legend.css';
import { Table as TableIcon} from 'lucide-react';


export default function MapLibreGL_Map() {

  const mapRef = React.useRef<MapRef| null>(null); 



  const onMapLoad = React.useCallback(() => {
    if (mapRef) {

      const map = mapRef.current
      // console.log('onMapLoad')
      // map?.addControl(new MaplibreStyleSwitcherControl(basemaps_styles, basemaps_options));
      map?.addControl(legend, 'top-right');

        
      
    }

    
  }, []); //const onMapLoad 



  return(
    <>
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
        ref={mapRef}
        onLoad={onMapLoad}

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


      <FullscreenControl  position="top-right"    style={{ marginRight: 10 }} />
      <GeolocateControl   position="top-right"    style={{ marginRight: 10 }}/>
      <NavigationControl  position="top-right"    style={{ marginRight: 10 }}/>
      <ScaleControl       position="bottom-right" style={{ marginRight: 10 }}/>
      {/* <AttributionControl customAttribution="vzam" /> */}

      </Map>

      <Button className='absolute bottom -z-100' variant="outline" size="icon">
        <TableIcon/>
      </Button>
    
    </>
  )
  
  
}

// export default function MapLibreGL_Map() {
//   return(

    

//   )
// }
