import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import { line, svg, scaleLinear } from 'd3';
import styled from 'styled-components';

const width = 960;
const height = 600;

const storeData = [];
for (let i=0, v=2; i < 50; i++) {
  v += Math.random() - 0.5;
  v = Math.max(Math.min(v, 4), 0);
  storeData.push({
    step: i,
    value: v,
  });
}

// x 的比例尺，因為有 0-49 個 step
const scaleX = scaleLinear()
  .domain([0, 49])
  .range([10, 950])

// y 的比例尺
const scaleY = scaleLinear()
  .domain([0, 4])
  .range([height - 10, 10])

// d 是代表在下面 <path> 才傳入的 data
const lineFuc = line()
  .x((d) => scaleX(d.step))
  .y((d) => scaleY(d.value));

let i = 0;

const AppComponent = ({ className }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (data.length < storeData.length) {
      setTimeout(() => {
        setData((prevData) => {
          const newData = [...prevData, {
            step: storeData[i].step,
            value: storeData[i].value,
          }];
          i += 1;
          return newData;
        });
      }, 20);
    }
  }, [data]);

  return (
    <svg className={className}
      width={width}
      height={height}>
      <path d={lineFuc(data)}></path>
    </svg>
  )
}

const App = styled(AppComponent)`
  path {
    fill: none;
    stroke: #2c2c2c;
    stroke-width: 2px;
  }
`

ReactDom.render(<App />, document.getElementById('app'));
