import React from 'react';
import styled from 'styled-components';
import { geoEqualEarth, geoPath, geoGraticule } from 'd3';

// ref. https://github.com/d3/d3-geo

const projection = geoEqualEarth();
const path = geoPath(projection);
const graticule = geoGraticule();

const MarksComponent = ({ className, data: { countries, interiors, land } }) => {
  return (<g className={className}>
    {/* 外邊的弧形 */}
    <path className="sphere" d={path({ type: 'Sphere' })}></path>
    {/* 網格 */}
    <path className="graticule" d={path(graticule())}></path>
    {/* 地圖 */}
    {
      land.features.map((feature, idx) => {
        return <path
          key={idx}
          d={path(feature)}></path>;
      })
    }
    {/* 國家的內邊線 */}
    <path className="interiors" d={path(interiors)}></path>
  </g>)
};

export const Marks = styled(MarksComponent)`
  fill: #137B80;
  /* stroke: #C0C0BB; */
  .sphere {
    fill: #eee;
    stroke: none;
  }
  .interiors {
    fill: none;
    stroke: #959595;
  }
  .graticule {
    fill: none;
    stroke: #ccc;
  }
`;
