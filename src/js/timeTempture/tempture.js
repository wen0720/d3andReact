import React from 'react';
import ReactDOM from 'react-dom';
import { scaleBand, scaleLinear, extent } from 'd3';
import { useData } from './useData';
import { Marks } from './Marks';

const width = 960;
const height = 500;
const margin = {
  top: 20, left: 20, right: 20, bottom: 20,
};
const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;

const xValue = (d) => d.timestamp;
const yValue = (d) => d.temperature;

const App = () => {
  const data = useData();
  if (!data) {
    return <h1>Loading</h1>
  }
  console.log(data);

  const xScale = scaleBand()
    .domain(data.map(xValue))
    .range([0, innerWidth])
    .paddingInner(0.1);

  const yScale = scaleLinear()
    .domain(extent(data.map(yValue)))
    .range([0, innerHeight])

  return (
    <svg width={width} height={height}>
      <Marks
        xScale={xScale}
        yScale={yScale}
        data={data}/>
    </svg>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));
