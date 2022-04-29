import React, { useState } from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import { scaleLinear, extent, scaleOrdinal } from 'd3';
import { useData } from './useData';
import { Marks } from './Mark';
import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './/AxisLeft';
import { DropDown } from './DropDown';
import { ColorLegend } from './ColorLegend';


// 分散圖的 x,y 都是 linear 的

const width = 960;
const height = 500;
const margin = {
  top: 20, left: 100, bottom: 80, right: 200,
};
const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;

const initXAttribute = 'sepal_length';
const initYAttribute = 'sepal_width'

const AppComponent = ({ className }) => {
  const data = useData();
  const [xAttribute, setXAttribute] = useState(initXAttribute);
  const [yAttribute, setYAttribute] = useState(initYAttribute);
  if (!data) {
    return <></>;
  }

  const optionColumns = data.columns.map((column) => ({
    text: column,
    value: column,
  }));
  const xValue = (d) => d[xAttribute];
  const yValue = (d) => d[yAttribute];
  const colorValue =(d) => d.species;

  const xScale = scaleLinear()
    .domain(extent(data, xValue))
    .range([0, innerWidth])
    .nice(); // nice 會讓圖表前後尾巴的數值變的更好看

  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([0, innerHeight]);

  const colorScale = scaleOrdinal()
    .domain(data.map(colorValue))
    .range(['#e6842a', '#137B80', '#8e6c8a'])
  /*
    data 實際上有 150 個，可是 colorScale.domain() 出來只有不重複的 3 個
    這應該是 .domain(data.map(colorValue)) 有做了什麼事，會把重複的過濾掉
    console.log(data);
    console.log(colorScale.domain());
  */

  return (
    <div className={className}>
      <div>
        <div class="select">
          <h3>x 軸</h3>
          <DropDown
            options={optionColumns}
            selectValue={xAttribute}
            onSelectValueChange={setXAttribute}>
          </DropDown>
        </div>
        <div class="select">
          <h3>y 軸</h3>
          <DropDown
            options={optionColumns}
            selectValue={yAttribute}
            onSelectValueChange={setYAttribute}>
          </DropDown>
        </div>
      </div>
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
            colorScale={colorScale}
            xValue={xValue}
            yValue={yValue}
            colorValue={colorValue}
          />
          <g transform={`translate(${innerWidth + 30}, 0)`}>
            <ColorLegend colorScale={colorScale} />
          </g>
          <text
            x={innerWidth / 2}
            y={innerHeight + margin.bottom - 20}
            textAnchor="middle"
            style={{ fontSize: '30px' }}>{xAttribute}</text>
          <text
            x={0}
            y={innerHeight / 2}
            style={{ fontSize: '30px' }}
            textAnchor="middle"
            // svg rotate 的用法，
            // rorate(a, centerX, centerY)
            // a = 旋轉角度, centerX, centerY, 要以哪一哪一個點為中心旋轉，如果沒有給的話，會使用 svg 的原始座標（origin 座標的確切邏輯是啥，我還不太知道）
            transform={`translate(-${margin.left - 35}, 0), rotate(-90, 0, ${innerHeight / 2})`}>
            {yAttribute}
          </text>
        </g>
      </svg>
    </div>
  );
};

const App = styled(AppComponent)`
  h3 {
    font-size: 14px;
    margin-bottom: 0px;
  }
  .select {
    display: inline-block;
    padding: 0 10px;
  }
`

ReactDom.render(<App/>, document.getElementById('app'));
