import React, { useState, useEffect, createRef, useRef } from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import { useData, useCountyToVillageMap } from './useData';
import { geoPath, geoMercator, zoom, select, zoomTransform, selectAll } from 'd3';

const width = window.innerWidth;
const height = window.innerHeight;

const AppComponent = ({ className }) => {
  const { data, countyToVillageMap } = useData();
  const svgRef = useRef(null);
  const svgGroupRef = useRef(null);
  const [groupT, setGroupT] = useState(`translate(0, 0) scale(1)`);
  const [currentCenter, setCurrentCenter] = useState({ x: 0, y: 0, fullWidth: 0 });
  const { counties, towns, villages } = data;
  const projection = geoMercator().fitExtent([[0, 0], [width, height]], counties);
  const path = geoPath(projection);

  const getTransform = (centerX, centerY, fillWidth) => {
    const scale = Math.min(width, height) / fillWidth;
    const translateX = (width / 2 - centerX) * scale;
    const translateY = (height / 2 - centerY) * scale;
    return `translate(${translateX}, ${translateY}) scale(${scale})`;
  }

  useEffect(() => {
    const svg = select(svgRef.current);
    let lastClickCounty = '';
    let townG;
    let villageG;
    const scaleG = svg.append('g')
      .attr('class', 'scale-group')
      .style('transform-origin', 'center center');
    // 縣/市
    const g = scaleG.append('g')
      .attr('class', 'county-group')

    g.selectAll('.county')
      .data(counties.features)
      .join('path')
      .attr('d', (feature) => path(feature))
      .attr('class', 'county')
      .on('click', function (event, feature) {
        const { x, y, width, height } = event.target.getBBox();
        const centerX = x + width / 2;
        const centerY = y + height / 2;
        const fullWidth = width - height > 0 ? width : height;
        const t = getTransform(centerX, centerY, fullWidth);
        select('.scale-group').transition().duration(650).attr('transform', t);
        // 把該縣市底下的鄉鎮顯示出來
        if (lastClickCounty) {
          selectAll(`.${lastClickCounty}`).attr('visibility', 'hidden');
        }
        selectAll(`.${feature.properties.COUNTYID}`).attr('visibility', 'visible');
        lastClickCounty = feature.properties.COUNTYID;
      })
      .on('mouseover', function () {
        select(this).style('fill', '#ccc');
      })
      .on('mouseleave', function () {
        select(this).style('fill', '#eee');
      });


    // 鄉/鎮
    townG = scaleG.append('g')
      .attr('class', 'town-group')

    // 畫出該(縣/市)底下的(鎮/鄉)
    towns.features.forEach((townFeature) => {
      townG.selectAll(`.${townFeature.properties.COUNTYID}`)
        .data(countyToVillageMap[townFeature.properties.COUNTYID].town)
        .join('path')
        .attr('d', (feature) => path(feature))
        .attr('class', `${townFeature.properties.COUNTYID}`)
        .style('fill', '#FFF59D')
        .attr('visibility', 'hidden')
        .on('click', function (event, feature) {
          const { x, y, width, height } = event.target.getBBox();
          const centerX = x + width / 2;
          const centerY = y + height / 2;
          const fullWidth = width - height > 0 ? width : height;
          const t = getTransform(centerX, centerY, fullWidth);
          select('.scale-group').transition().duration(650).attr('transform', t);
          console.log(feature.properties.TOWNID);
        })
        .on('mouseover', function () {
          select(this).style('fill', '#FFF176');
        })
        .on('mouseleave', function () {
          select(this).style('fill', '#FFF59D');
        });
    });

    // 村/里
    villageG = scaleG.append('g')
      .attr('class', 'village-group')

  }, [])


  // const getTransform = (centerX, centerY, fillWidth) => {
  //   const scale = Math.min(width, height) / fillWidth;
  //   const translateX = (width / 2 - centerX) * scale;
  //   const translateY = (height / 2 - centerY) * scale;
  //   return `translate(${translateX}, ${translateY}) scale(${scale})`;
  // }

  // const clickFuc = (e) => {
  //   const { x, y, width, height } = e.target.getBBox();
  //   const centerX = x + width / 2;
  //   const centerY = y + height / 2;
  //   const fullWidth = width - height > 0 ? height : width;
  //   setCurrentCenter({ x: centerX, y: centerY, fullWidth });
  // }

  // useEffect(() => {
  //   if (currentCenter.fullWidth > 0) {
  //     const transform = getTransform(currentCenter.x, currentCenter.y, currentCenter.fullWidth);
  //     setGroupT(transform);
  //   }
  // }, [currentCenter])

  // useEffect(() => {
  //   const zoomFuc = zoom().on('zoom', (event) => {
  //     const t = event.transfrom;
  //     projection.scale(t.k).translate([t.x, t.y]);

  //   })
  // }, [svgRef]);

  return (
    <svg
      ref={svgRef}
      className={className}
      viewBox={`0, 0, ${width} ${height}`}
      width={width} height={height}>
        {/* <g onClick={clickFuc}
          transform={groupT}
          // style={{ 'transformOrigin': `${currentCenter.x}px ${currentCenter.y}px` }}
          style={{ 'transformOrigin': `center center` }}
          className="countyGroup">
          {
            counties.features.map((countyFeature, idx) => (
              <path
                key={idx}
                ref={elRefs[idx]}
                d={path(countyFeature)}></path>
            ))
          }
        </g> */}
    </svg>
  );
};

const App = styled(AppComponent)`
  width: 100%;
  height: 100vh;
  .county-group {
    path {
      fill: #eee;
      stroke: #ccc;
      stroke-width: 0.5px;
    }
  }
  .town-group {
    stroke-width: 0.5px;
    stroke: #FDD835;
  }
`


ReactDom.render(<App />, document.getElementById('app'));
