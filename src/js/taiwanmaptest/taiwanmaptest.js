import React, { useState, useEffect, createRef, useRef } from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import { useData } from './useData';
import { geoPath, geoMercator, select, drag, selectAll } from 'd3';

const width = window.innerWidth;
const height = window.innerHeight;

const renderTown = {}; // 紀錄該(縣市)底下的(鄉鎮)是否被畫出來了
const renderVillage = {} // 紀錄該(鄉鎮)底下的(村里)是否被畫出來了

const AppComponent = ({ className }) => {
  const { data: { villages, towns, counties }, countyToVillageMap } = useData();
  const svgRef = useRef(null);
  const [countyName, setCountyName] = useState('');
  const [townName, setTownName] = useState('');
  const [villName, setVillName] = useState('');

  const setInfo = (property) => {
    const { COUNTYNAME, TOWNNAME, VILLNAME } = property;
    setCountyName(COUNTYNAME);
    setTownName(TOWNNAME);
    setVillName(VILLNAME);
  };

  const getTransform = (centerX, centerY, fillWidth) => {
    const scale = Math.min(width, height) / (fillWidth + 5);
    const translateX = (width / 2 - centerX) * scale;
    const translateY = (height / 2 - centerY) * scale;
    return {
      style: `translate(${translateX}, ${translateY}) scale(${scale})`,
      translateX,
      translateY,
      scale,
    }
  }

  useEffect(() => {
    const projection = geoMercator().fitExtent([[0, 0], [width, height]], villages);
    const path = geoPath(projection);
    let nowTransform = { style: '', translateX: 0, translateY: 0, scale: 1 };
    let lastClickCountyClass = '';
    let lastClickTownClass = '';
    // svg
    const svg = select(svgRef.current);
    // 控制縮放的 <g>
    const scaleG = svg.append('g')
      .attr('class', 'scale-group')
      .style('transform-origin', 'center center')
    // 縣/市
    const countyG = scaleG.append('g')
      .attr('class', 'county-group')
    // 鄉/鎮
    const townG = scaleG.append('g')
      .attr('class', 'town-group')
    // 村/里
    const villageG = scaleG.append('g')
      .attr('class', 'village-group')

    // 計算 svg path 縮放大小
    const calculateTransform = (feature) => {
      const [[x0, y0], [x1, y1]] = path.bounds(feature);
      const boundWidth = Math.abs(x0 - x1);
      const boundHeight = Math.abs(y0 - y1);
      const centerX = (x0 + x1) / 2;
      const centerY = (y0 + y1) / 2;
      const fullWidth = boundWidth - boundHeight > 0 ? boundWidth : boundHeight;
      return getTransform(centerX, centerY, fullWidth);
    }

    // 隱藏上一個顯示的鄉鎮/村里
    const hidePrevTownAndVillage = (lastClickCountyClass, lastClickTownClass) => {
      if (lastClickCountyClass) {
        selectAll(`.${lastClickCountyClass}`).attr('visibility', 'hidden');
      }
      if (lastClickTownClass) {
        selectAll(`.${lastClickTownClass}`).attr('visibility', 'hidden');
      }
    }

    // show 或 init新的 鄉鎮
    const showOrInitNewTown = (countyId) => {
      if (renderTown[countyId]) {
        selectAll(`.${countyId}`).attr('visibility', 'visible');
        return;
      }
      townG.selectAll(`.${countyId}`)
        .data(countyToVillageMap[countyId].town)
        .join('path')
        .attr('d', (feature) => path(feature))
        .attr('class', `${countyId}`)
        .style('fill', '#FFF59D')
        .on('click', (event, feature) => {
          event.stopPropagation();
          nowTransform = calculateTransform(feature);
          select('.scale-group').transition().duration(1000).attr('transform', nowTransform.style);
          const nowTown = feature.properties.TOWNID;
          hidePrevTownAndVillage(lastClickTownClass);
          showOrInitNewVillage(countyId, nowTown);
          lastClickTownClass = nowTown;
        })
        .on('mouseover', function (event, feature) {
          select(this).style('fill', '#FFF176');
          setInfo(feature.properties);
        })
        .on('mouseleave', function () {
          select(this).style('fill', '#FFF59D');
        });
      renderTown[countyId] = true;
    }
    // show 或 init新的 村里
    const showOrInitNewVillage = (countyId, townId) => {
      if (renderVillage[townId]) {
        selectAll(`.${townId}`).attr('visibility', 'visible');
        return;
      }
      villageG.selectAll(`.${townId}`)
        .data(countyToVillageMap[countyId][townId].village)
        .join('path')
        .attr('d', (feature) => path(feature))
        .attr('class', `${townId}`)
        .style('fill', '#B3E5FC')
        .attr('data-name', (feature) => {
          const { VILLNAME, TOWNNAME } = feature.properties;
          return `${TOWNNAME}-${VILLNAME}`;
        })
        .on('click', (event) => {
          event.stopPropagation();
        })
        .on('mouseover', function(event, feature) {
          select(this).style('fill', '#81D4FA');
          setInfo(feature.properties);
        })
        .on('mouseleave', function() {
          select(this).style('fill', '#B3E5FC')
        })
      renderVillage[townId] = true
    }

    // 拖曳功能
    scaleG.call(
      drag()
        .on('drag', function (event, d) {
          this.x = this.x || 0;
          this.y = this.y || 0;
          this.x += event.dx;
          this.y += event.dy;
          scaleG.attr('transform', `
            translate(${this.x + nowTransform.translateX}, ${this.y + nowTransform.translateY}) scale(${nowTransform.scale})
          `);
        })
        .on('end', function() {
          nowTransform.translateX = this.x + nowTransform.translateX;
          nowTransform.translateY = this.y + nowTransform.translateY;
          this.x = 0;
          this.y = 0;
        })
    );

    countyG.selectAll('.county')
      .data(counties.features)
      .join('path')
      .attr('d', (feature) => path(feature))
      .attr('d-name', (feature) => {
        const { COUNTYNAME } = feature.properties;
        return COUNTYNAME;
      })
      .attr('class', 'county')
      .on('click', function(event, feature) {
        event.stopPropagation();
        nowTransform = calculateTransform(feature);
        select('.scale-group').transition().duration(1000).attr('transform', nowTransform.style);

        const nowCounty = feature.properties.COUNTYID;
        hidePrevTownAndVillage(lastClickCountyClass, lastClickTownClass);
        showOrInitNewTown(nowCounty);
        lastClickCountyClass = nowCounty;
      })
      .on('mouseover', function(event, feature) {
        select(this).style('fill', '#ccc');
        setInfo(feature.properties);
      })
      .on('mouseleave', function() {
        select(this).style('fill', '#eee');
      })

    svg.on('click', () => {
      hidePrevTownAndVillage(lastClickCountyClass, lastClickTownClass);
      scaleG.transition().duration(1000).attr('transform', `translate(0, 0) scale(1)`);
    })
  }, []);

  return (
    <div className={className}>
      <svg
        ref={svgRef}
        viewBox={`0, 0, ${width} ${height}`}
        width={width} height={height}>
      </svg>
      <div className="info">
        瀏覽區域
        <p>縣市：{countyName}</p>
        <p>鄉鎮：{townName}</p>
        <p>村里：{villName}</p>
      </div>
    </div>
  );
};

const App = styled(AppComponent)`
  width: 100%;
  svg path {
    fill: #eee;
    stroke: #ccc;
    stroke-width: 0.05;
  }
  .info {
    width: 300px;
    position: fixed;
    right: 20px;
    bottom: 20px;
    padding: 30px;
    background: #f0ffff;
  }
`


ReactDom.render(<App />, document.getElementById('app'));
