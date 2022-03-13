import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import { csv, arc, pie, scaleBand, scaleLinear, max } from 'd3';

const url = 'https://gist.githubusercontent.com/wen0720/da1a423e99011bb25eabda100684b1c0/raw/810de8483a1709a6582272121ce253672ff9193e/UN_Population_2019.csv'

const width = 960;
const height = 500;
const margin = {
  top: 20, left: 120, bottom: 20, right: 20,
};
const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;


const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const row = (d) => {
      d.Population = +d['2020'];
      return d;
    }
    csv(url, row).then((data) => {
      console.log(data);
      setData(data.slice(0, 10));
    });
  }, []);

  if (!data) {
    return <p>Loading</p>;
  }
  const yScale = scaleBand()
    .domain(data.map((d) => d.country))
    .range([0, innerHeight])

  // scaleBand 似乎沒有 ticks
  console.log(yScale.domain());

  const xScale = scaleLinear()
    .domain([0, max(data, (d) => d.Population)])
    .range([0, innerWidth]);

  // 會自動產出一定的比例尺，好像是以 10 為值，詳細邏輯不確定
  console.log(xScale.ticks())

  return (<svg
    viewBox="0 0 960 500"
    style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
    width={width} height={height}>
    <g transform={`translate(${margin.left}, ${margin.top})`}>
      {/* x 軸 */}
      {
        xScale.ticks().map((tickValue, idx) => (
          <g key={idx}
            transform={`translate(${xScale(tickValue)}, 0)`}>
            <line
              x1="0" // 實際上預設就是 0，可以刪掉
              y1="0" // 實際上預設就是 0，可以刪掉
              x2="0" // 實際上預設就是 0，可以刪掉
              y2={innerHeight}
              stroke="black" />
            <text
              y={innerHeight}
              dy="16px"
              style={{ textAnchor: 'middle' }}>{tickValue}</text>
          </g>
        ))
      }
      {/* y 軸 */}
      {
        // 因為 yScale 是 scaleBand 不存在 ticks
        yScale.domain().map((value) => (
          <text
            key={value}
            y={yScale(value) + yScale.bandwidth() / 2}
            x={-3}
            dy="0.32em"
            style={{ textAnchor: 'end' }}>{ value }
          </text>
        ))
      }
      {data.map((d, idx) => <rect
        key={idx}
        x={0}
        y={yScale(d.country)}
        width={xScale(d.Population)}
        height={yScale.bandwidth()} />)}
    </g>
  </svg>)
}

const rootElement = document.getElementById('app');
ReactDom.render(<App />, rootElement);
