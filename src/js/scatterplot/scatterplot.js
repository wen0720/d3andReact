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
  top: 20, left: 100, bottom: 80, right: 100,
};
const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;

const App = () => {
  const data = useData();
  if (!data) {
    return <></>;
  }

  console.log(data);
  const xValue = (d) => d.sepal_length;
  const yValue = (d) => d.sepal_width;

  const xScale = scaleLinear()
    .domain(extent(data, xValue))
    .range([0, innerWidth])
    .nice(); // nice 會讓圖表前後尾巴的數值變的更好看

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
        <text
          x={innerWidth / 2}
          y={innerHeight + margin.bottom - 20}
          textAnchor="middle"
          style={{ fontSize: '30px' }}>sepal length</text>
        <text
          x={0}
          y={innerHeight / 2}
          style={{ fontSize: '30px' }}
          textAnchor="middle"
          // svg rotate 的用法，
          // rorate(a, centerX, centerY)
          // a = 旋轉角度, centerX, centerY, 要以哪一哪一個點為中心旋轉，如果沒有給的話，會使用 svg 的原始座標（origin 座標的確切邏輯是啥，我還不太知道）
          transform={`translate(-${margin.left - 35}, 0), rotate(-90, 0, ${innerHeight / 2})`}>
          sepal width
        </text>
      </g>
    </svg>
  );
};

ReactDom.render(<App/>, document.getElementById('app'));
