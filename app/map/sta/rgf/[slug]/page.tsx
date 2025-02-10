// app/blog/[slug]/page.js
'use client';

import { layer_name_sta, sta_Layer, sta_Source } from '@/app/map/layers';
import { gdx2_cfg } from '@/config/cfg';
import { useParams } from 'next/navigation';
import React from 'react';
import {FullscreenControl, GeolocateControl, Layer, Map, MapRef, NavigationControl, ScaleControl, Source} from '@vis.gl/react-maplibre'; //AttributionControl
import 'maplibre-gl/dist/maplibre-gl.css';
import { LIGHT_MAP_STYLE } from '@/app/map/basemaps';

const layer_sta = `${gdx2_cfg.gdx2_map_db}.${layer_name_sta}`

export default function StaByRGF() {
  const mapRef = React.useRef<MapRef| null>(null); 

  const params = useParams();
  const { slug } = params;


  const onMapLoad = React.useCallback(() => {
    // if (typeof window !== "undefined" && window.localStorage) {
      if (!mapRef.current) return;

    // if (typeof window !== "undefined" && window.localStorage) {

    if (mapRef) {
      const map = mapRef.current
      map?.setFilter(layer_sta, ['==', ['get', 'in_n_rosg'], slug]);
      
      // const marker_table_info = new maplibregl.Marker()
      // console.log('onMapLoad')
      // map?.addControl(new MaplibreStyleSwitcherControl(basemaps_styles, basemaps_options));
      // map?.addControl(legend, 'top-right');

      // map?.on('mouseenter', layer_stp, function (e:any) {
      //   map.getCanvas().style.cursor = 'pointer';      
      //   const features = e?.features
      //   if(features && features?.length){
      //     popup.setLngLat(e.lngLat.wrap()).setHTML(`<h1>Отчетов: ${features?.length}</h1>`).addTo(map.getMap());  
      //   }
      // });

      // map?.on('mouseleave', layer_stp, function (e:any) {
      //   map.getCanvas().style.cursor = '';       
      //   popup.remove();
      // })    
      

      // map?.on('mousemove', function (e: MapLayerMouseEvent) {
      //   const ll = e.lngLat.wrap()        
      //   // setLng(  (prev) => parseFloat(ll.lng.toFixed(4)));
      //   // setLat(  (prev) => parseFloat(ll.lat.toFixed(4)));
      //   // setZoom( (prev) => parseFloat(map.getZoom().toFixed(2)));
      // });
      
        
      // map?.on('click', layer_stp, function (e:any) {
      //   const features = e?.features
      //   if(features && features?.length){
      //   }
      // });
    
    }
    // } //if...  
  }, []); //const onMapLoad 


  return (
    <>
      <div>
        <h1>Blog Post: {slug}</h1>
      </div>
      <Map
        initialViewState={{
          longitude: 66,
          latitude: 66,
          zoom: 3.5,
          bearing: 0,
          pitch: 0
        }}

        style={{ width: "100vw", height: "100vh", left:0, position:"absolute" }}
        mapStyle={LIGHT_MAP_STYLE}
        ref={mapRef}
        onLoad={onMapLoad}
        
      >
      <Source {...sta_Source}   >
        <Layer {...sta_Layer} />
      </Source>   

      <FullscreenControl  position="top-right"    style={{ marginRight: 10 }} />
      <GeolocateControl   position="top-right"    style={{ marginRight: 10 }}/>
      <NavigationControl  position="top-right"    style={{ marginRight: 10 }}/>
      <ScaleControl       position="bottom-right" style={{ marginRight: 10 }}/>

      </Map>


    </>
    
  );
}
