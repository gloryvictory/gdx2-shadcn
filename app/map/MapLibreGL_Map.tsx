'use client'


import * as React from 'react';
import {FullscreenControl, GeolocateControl, Layer, Map, MapRef, NavigationControl, ScaleControl, Source} from '@vis.gl/react-maplibre'; //AttributionControl



import 'maplibre-gl/dist/maplibre-gl.css';
import { fieldLayer, fieldSource, layer_name_stp, luLayer, luSource, lu_labels_Layer, sta_Layer, sta_Source, stl_Layer, stl_Source, stp_Layer, stp_Source } from './layers';


import { LIGHT_MAP_STYLE } from "./basemaps";
import { Button } from '@/components/ui/button';
import { legend } from './legend';

// import 'maplibre-gl/dist/maplibre-gl.css';

import '@watergis/maplibre-gl-legend/dist/maplibre-gl-legend.css';
import { Table as TableIcon} from 'lucide-react';
import maplibregl, { MapLayerMouseEvent } from 'maplibre-gl';
import { IReport } from '@/types/models';
import { gdx2_cfg } from '@/config/cfg';
import TableDrawer from './TableDrawer';

let dataSource:IReport[] = []

export default function MapLibreGL_Map() {

  const mapRef = React.useRef<MapRef| null>(null); 
  const [showTable, setShowTable] = React.useState<boolean>(false);
  const [lng, setLng]   =   React.useState<number>(66);
  const [lat, setLat]   =   React.useState<number>(66);
  const [zoom, setZoom] =   React.useState<number>(2.0);
  
  const marker_table_info = new maplibregl.Marker()
  const layer_stp = `${gdx2_cfg.gdx2_map_db}.${layer_name_stp}`


  const onTableClose = () => {
    setShowTable(false);
  };

  const popup = new maplibregl.Popup({
    closeButton: true,
    closeOnClick: false,
    offset: 15
  });

  const popup_table_info = new maplibregl.Popup({
    closeButton: true,
    closeOnClick: false,
    offset: 45
  });

  const onMapLoad = React.useCallback(() => {
    if (mapRef) {


      const map = mapRef.current
      // console.log('onMapLoad')
      // map?.addControl(new MaplibreStyleSwitcherControl(basemaps_styles, basemaps_options));
      map?.addControl(legend, 'top-right');

      map?.on('mouseenter', layer_stp, function (e:any) {
        map.getCanvas().style.cursor = 'pointer';
      
      const features = e?.features
      // console.log(`features.length : ${features?.length}`)
      if(features && features?.length){
        popup.setLngLat(e.lngLat.wrap()).setHTML(`<h1>Файлов: ${features?.length}</h1>`).addTo(map.getMap());  
      }
      console.log(e)
        // do something
      });

      // reset cursor to default when user is no longer hovering over a clickable feature
      map?.on('mouseleave', layer_stp, function (e:any) {
        map.getCanvas().style.cursor = '';       
        popup.remove();
      })    
      

      map?.on('mousemove', function (e: MapLayerMouseEvent) {
        const ll = e.lngLat.wrap()        
        setLng(  (prev) => parseFloat(ll.lng.toFixed(4)));
        setLat(  (prev) => parseFloat(ll.lat.toFixed(4)));
        setZoom( (prev) => parseFloat(map.getZoom().toFixed(2)));
      });
      
        
      map?.on('click', layer_stp, function (e:any) {
        const features = e?.features
        if(features && features?.length){
          popup_table_info.setLngLat(e.lngLat.wrap()).setHTML(`<h1>"Отчетов": ${features?.length}</h1>`).addTo(map.getMap());
          marker_table_info.setLngLat(e.lngLat.wrap()).addTo(map.getMap()); // add the marker to the map;
          dataSource = []
          features.map(
            (feature:any)=>{
              const newReport:IReport =  {
                id: feature?.properties?.id ,
                report_name:  feature.properties.report_name,
              //   f_name: feature.properties.f_name,
              //   f_size: size( feature.properties.f_size ),
              //   f_ext: feature.properties.f_ext,
              //   areaoil: feature.properties.areaoil,
              //   well: feature.properties.well,
              //   field:  feature.properties.field,
              //   f_path:  feature.properties.f_path,
              }
              dataSource.push(newReport) 

            }
          );
          setShowTable(true)

        }
      });
    
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

      <Button className='absolute bottom -z-100' variant="outline" size="icon" onClick={()=>setShowTable(true)} >
        <TableIcon/>
      </Button>
     
      {showTable && <TableDrawer  open={showTable} dataSource={dataSource} onClose={onTableClose} showDrawer={()=>setShowTable(true)} />}

    </>
  )
  
  
}


function nanoid(arg0: number) {
  throw new Error('Function not implemented.');
}
// export default function MapLibreGL_Map() {
//   return(

    

//   )
// }
