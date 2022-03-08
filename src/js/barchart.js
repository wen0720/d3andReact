import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import { csv, arc, pie, scaleBand, scaleLinear, max } from 'd3';

const url = 'https://gist.githubusercontent.com/wen0720/da1a423e99011bb25eabda100684b1c0/raw/810de8483a1709a6582272121ce253672ff9193e/UN_Population_2019.csv'

const width = 960;
const height = 500;


const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const row = (d) => {
      d.Population = +d['2020'];
      return d;
    }
    csv(url, row).then((data) => {
      setData(data.slice(0, 10));
    });
  }, []);

  if (!data) {
    return <p>Loading</p>;
  }
  const yScale = scaleBand()
    .domain(data.map((d) => d.country))
    .range([0, height])

  const xScale = scaleLinear()
    .domain([0, max(data, (d) => d.Population)])
    .range([0, width]);

  return (<svg width={width} height={height}>
    {data.map((d, idx) => <rect
      key={idx}
      x={0}
      y={yScale(d.country)}
      width={xScale(d.Population)}
      height={yScale.bandwidth()} />)}
  </svg>)
}

const rootElement = document.getElementById('app');
ReactDom.render(<App />, rootElement);
