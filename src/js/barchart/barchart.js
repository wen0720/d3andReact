import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import { arc, pie, scaleBand, scaleLinear, max, format } from 'd3';
import { useData } from './useData';
import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './AxisLeft';
import { Marks } from './Marks';

const width = 960;
const height = 500;
const margin = {
  top: 20, left: 120, bottom: 80, right: 20,
};
const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;


const AppComponent = ({ className }) => {
  const data = useData();

  if (!data) {
    return <p>Loading</p>;
  }

  const yValue = (d) => d.country;
  const xValue = (d) => d.Population;

  const yScale = scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight])
    .paddingInner(0.4)
    .paddingOuter(0.2)

  // paddingInner 指的是長條圖之間的 padding
  // paddingOuter 指的是最旁邊兩個長條圖與圖表之間的 padding

  // scaleBand 似乎沒有 ticks
  console.log(yScale.domain());

  const xScale = scaleLinear()
    .domain([0, max(data, xValue)])
    .range([0, innerWidth]);

  // 會自動產出一定的比例尺，好像是以 10 為值，詳細邏輯不確定
  console.log(xScale.ticks())

  return (<svg
    viewBox="0 0 960 500"
    style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
    width={width} height={height}
    className={className}>
    <g transform={`translate(${margin.left}, ${margin.top})`}>
      {/* x 軸 */}
      <AxisBottom xScale={xScale} innerHeight={innerHeight}
        tickformat={(v) => format('.2s')(v).replace('G', 'B')} />
      {/* y 軸 */}
      <AxisLeft yScale={yScale} />
      <text className="label" x={innerWidth / 2} y={innerHeight + 60} textAnchor="middle" >Population</text>
      <Marks
        data={data} yScale={yScale} xScale={xScale} yValue={yValue} xValue={xValue}
        tickformat={(v) => format('.2s')(v).replace('G', 'B')} />
    </g>
  </svg>)
}

const App = styled(AppComponent)`
  .label {
    font-size: 24px;
    font-weight: bold;
    fill: #8e8883;
  }
`

const rootElement = document.getElementById('app');
ReactDom.render(<App />, rootElement);
