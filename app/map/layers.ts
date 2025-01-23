import { gdx2_cfg } from '@/config/cfg';
import type {LayerProps, SourceProps} from 'react-map-gl';


// const  {gdx2map_host_port_db_name, gdx2map_db_name } = cfg 

// // Файлы
// export const fileSource: SourceProps = {
//   id:"gdx2.file",
//   type:"vector",
//   // tiles:["http://r48-vws03.zsniigg.local:7800/gdx2.file/{z}/{x}/{y}.pbf"],
//   tiles:["http://localhost:7800/gdx2.file/{z}/{x}/{y}.pbf"],
//   // tiles:["http://localhost:3333/file/{z}/{x}/{y}"],
//   minzoom: 0,
//   maxzoom: 22,
// }

// export const fileLayer: LayerProps = {
//   id: 'points-file',
//   type: 'circle',
//   source: 'gdx2.file',
//   // filter: ['has', 'point_count'],
//   "source-layer": "gdx2.file",
//   paint: {
//     'circle-color': 'blue',
//     'circle-radius': 4
//   }
// };

// Месторождения
export const fieldSource: SourceProps = {
  id:"gdx2.field",
  type:"vector",
  // tiles:["http://r48-vws03.zsniigg.local:7800/gdx2.field/{z}/{x}/{y}.pbf"],
  tiles:[`${gdx2_cfg.gdx2_map_url}field/{z}/{x}/{y}.pbf`],
  minzoom: 0,
  maxzoom: 22,
}

export const fieldLayer: LayerProps = {
  id: 'field',
  type: 'fill',
  source: 'gdx2.field',
  // filter: ['has', 'point_count'],
  "source-layer": "gdx2.field",
  paint: {
    'fill-color': '#693502',
    'fill-opacity': 0.2   
  }
};

// Лицензионные участки
export const luSource: SourceProps = {
  id:"gdx2.lu",
  type:"vector",
  // tiles:["http://r48-vws03.zsniigg.local:7800/gdx2.lu/{z}/{x}/{y}.pbf"],
  tiles:[`${gdx2_cfg.gdx2_map_url}lu/{z}/{x}/{y}.pbf`],
  minzoom: 0,
  maxzoom: 22,
}

export const luLayer: LayerProps = {
  id: 'lu',
  type: 'fill',
  source: 'gdx2.lu',
  // filter: ['has', 'point_count'],
  "source-layer": "gdx2.lu",
  paint: {
    'fill-color': '#0a0171',
    'fill-opacity': 0.2   
  }
};

export const lu_labels_Layer: LayerProps = {
  'id': 'lu-labels',
  'type': 'symbol',
  'source': 'gdx2.lu',
  'layout': {
      'text-field': ['get', 'name_rus'],
      'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
      'text-radial-offset': 0.5,
      'text-justify': 'auto',
      // 'icon-image': ['concat', ['get', 'icon'], '_15']
  }
}

// sta
export const sta_Source: SourceProps = {
  id:`${gdx2_cfg.gdx2_map_url}.sta`,
  type:"vector",
  // tiles:["http://r48-vws03.zsniigg.local:7800/gdx2.lu/{z}/{x}/{y}.pbf"],
  tiles:[`${gdx2_cfg.gdx2_map_url}sta/{z}/{x}/{y}.pbf`],
  minzoom: 0,
  maxzoom: 22,
}

export const sta_Layer: LayerProps = {
  id: 'sta',
  type: 'fill',
  source: `${gdx2_cfg.gdx2_map_url}.sta`,
  "source-layer": `${gdx2_cfg.gdx2_map_url}.sta`,
  paint: {
    // 'fill-color': '#c2e75b',
    "fill-outline-color": '#0a0171',
    'fill-opacity': 0.2   
  }
};

console.log(`${gdx2_cfg.gdx2_map_url}sta/{z}/{x}/{y}.pbf`)
console.log(`${gdx2_cfg.gdx2_map_url}lu/{z}/{x}/{y}.pbf`)
