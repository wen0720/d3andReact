import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import geoData from 'world-atlas/countries-50m.json';
import { feature } from 'topojson';
import { geoPath, geoMercator } from 'd3';

// feature - topojson 提供把 topojson -> geojson 的方法

const width = 960;
const height = 500;

console.log(geoData);

const geoJson = feature(geoData, geoData.objects.countries);
const projection = geoMercator();
const path = geoPath(projection);

const AppComponent = ({ className }) => {
  return (
    <div className={className}>
      <svg
        width={width} height={height}>
          {
            geoJson.features.map((geoItem, idx) => {
              return <path
                className="country"
                key={idx}
                d={path(geoItem)}></path>
            })
          }
      </svg>
    </div>
  )
};

const App = styled(AppComponent)`
  .country {
    fill: #ccc;
    stroke: #fff;
  }
`


ReactDom.render(<App />, document.getElementById('app'));
