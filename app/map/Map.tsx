'use client'

import { useCallback, useRef, useState } from "react";
import type {MapInstance, MapRef} from 'react-map-gl/maplibre';
import Map, { AttributionControl, NavigationControl, ScaleControl } from "react-map-gl/maplibre";
import {Source, Layer, MapMouseEvent, MapLib} from 'react-map-gl';
// import {Source, Layer, FullscreenControl, GeolocateControl, NavigationControl, ScaleControl, AttributionControl,  MapMouseEvent,  IControl} from 'react-map-gl';
import { fieldLayer, fieldSource, luLayer, luSource, sta_Layer, sta_Source } from "./layers";
import maplibregl from 'maplibre-gl';

// import '@watergis/maplibre-gl-legend/dist/maplibre-gl-legend.css';
import 'maplibre-gl/dist/maplibre-gl.css';
// import './gMap.css';
import { LIGHT_MAP_STYLE } from "./basemaps";

const initialValueLocation = {
  latitude: 61.86,
  longitude: 74.08,
  zoom: 2,
  bearing: 0,
  pitch: 0
};

var nav = new maplibregl.NavigationControl({
  showCompass: true,
  showZoom: true,
  visualizePitch: true,
});


// var nav = new maplibregl.NavigationControl({ })

export default function MapLibreGL_Map() {
  
  const [lng, setLng] = useState<number>(61.86);
  const [lat, setLat] = useState<number>(74.08);
  const mapRef = useRef<MapRef| null>(null); 

  // const maplib1:MapLib<MapInstance> = {}
  // maplib1.AttributionControl = AttributionControl;
  // maplib1.FullscreenControl = FullscreenControl;
  // maplib1.GeolocateControl = GeolocateControl;
  // maplib1.NavigationControl = NavigationControl;
  // maplib1.ScaleControl = ScaleControl;
  // const ac = new maplibregl.AttributionControl();
  
  // const onMapLoad = useCallback(() => {  }, []);
  const onMapLoad = useCallback(() => {
    
    console.log(fieldSource )
    console.log(luSource )

    if (mapRef) {
      const map = mapRef.current

      map?.addControl(nav);
      // // map.addControl(new maplibregl.NavigationControl());
      // // map?.addControl(legend, 'top-right');

      // map?.on('mouseenter', 'points-file', function (e) {
      //   map.getCanvas().style.cursor = 'pointer';
      //   const features = e?.features
      //   // console.log(`features.length : ${features?.length}`)
      //   if(features && features?.length){
      //     // popup.setLngLat(e.lngLat.wrap()).setHTML(`<h1>Файлов: ${features?.length}</h1>`).addTo(map.getMap());  
      //   }
      //   console.log(e)
      // });

      // // reset cursor to default when user is no longer hovering over a clickable feature
      // map?.on('mouseleave', 'points-file', function (e) {
      //   map.getCanvas().style.cursor = '';       
      //   // popup.remove();
      // })    
      

      map?.on('mousemove', function (e: MapMouseEvent) {
        const ll = e.lngLat.wrap()        
        setLng(  (prev) => parseFloat(ll.lng.toFixed(4)));
        setLat(  (prev) => parseFloat(ll.lat.toFixed(4)));
        // setZoom( (prev) => parseFloat(map.getZoom().toFixed(2)));
      });
      
        
    }

    
  }, []);
  return (
  
    // <div id="map" className="map mt-20 lg:w-auto lg:h-auto h-full w-screen">
    <div id="map" className="h-full w-screen border-solid border-gray-600">
      <Map
        id="mymap"
        initialViewState={initialValueLocation}
        maplibreLogo
        // mapLib={maplibregl}
        mapStyle={LIGHT_MAP_STYLE}
        attributionControl={false}
        onLoad={onMapLoad}
        ref={mapRef}
        style={{width: 1024, height: 800}}
        // style={{ width: "100vw", height: "100vh" }}
        // onMouseEnter={onMouseEnter}
        // ref={mapRef}       
        // mapStyle={DARK_MAP_STYLE}
      >

        <Source {...fieldSource}   >
            <Layer {...fieldLayer} />
        </Source>  
{/* 
        <Source {...luSource}   >
            <Layer {...luLayer} />
        </Source>  

        <Source {...sta_Source}   >
            <Layer {...sta_Layer} />
        </Source>   */}

        
      </Map>    
      <AttributionControl customAttribution="Map design by me" />
      <NavigationControl />
      <ScaleControl />
  </div>
  );
}




      // map?.on('click', 'points-file', function (e) {
      //   const features = e?.features
      //   if(features && features?.length){
      //     popup_table_info.setLngLat(e.lngLat.wrap()).setHTML(`<h1>"Файлов": ${features?.length}</h1>`).addTo(map.getMap());
      //     marker_table_info.setLngLat(e.lngLat.wrap()).addTo(map.getMap()); // add the marker to the map;
      //     dataSource = []
      //     features.map(
      //       (feature)=>{
      //         const newfile:IFile =  {
      //           key: nanoid(5),
      //           f_name: feature.properties.f_name,
      //           f_size: size( feature.properties.f_size ),
      //           f_ext: feature.properties.f_ext,
      //           areaoil: feature.properties.areaoil,
      //           well: feature.properties.well,
      //           field:  feature.properties.field,
      //           f_path:  feature.properties.f_path,
      //         }
      //         dataSource.push(newfile) 

      //       }
      //     );
      //     setShowTable(true)

      //   }
      // });

    //   class HelloWorldControl: IControl {
    //     onAdd(map) {
    //         this._map = map;
    //         this._container = document.createElement('div');
    //         this._container.className = 'maplibregl-ctrl';
    //         this._container.textContent = 'Hello, world';
    //         return this._container;
    //     }
    
    //     onRemove() {
    //         this._container.parentNode.removeChild(this._container);
    //         this._map = undefined;
    //     }
    // }
      // console.log(map)
      // const sw_control:MaplibreStyleSwitcherControl =  new MaplibreStyleSwitcherControl(basemaps_styles, basemaps_options)
      // map?.addControl(sw_control, 'top-right');
