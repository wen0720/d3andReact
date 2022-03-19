import React from 'react';
import ReactDom from 'react-dom';
import { scaleLinear, extent, svg } from 'd3';
import { useData } from './useData';
import { Marks } from './Mark';
import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './/AxisLeft';


// 分散圖的 x,y 都是 linear 的

const width = 960;
const height = 500;
const margin = {
  top: 20, left: 100, bottom: 20, right: 100,
};
const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;

const App = () => {
  const data = useData();
  if (!data) {
    return <></>;
  }
  const xValue = (d) => d.sepal_length;
  const yValue = (d) => d.sepal_width;

  const xScale = scaleLinear()
    .domain(extent(data, xValue))
    .range([0, innerWidth])
    // .nice();

  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([0, innerHeight])

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom
          xScale={xScale}
          innerHeight={innerHeight}
        />
        <AxisLeft
          yScale={yScale}
          innerWidth={innerWidth}
        />
        <Marks
          data={data}
          xScale={xScale}
          yScale={yScale}
          xValue={xValue}
          yValue={yValue}
        />
      </g>
    </svg>
  );
};

ReactDom.render(<App/>, document.getElementById('app'));
