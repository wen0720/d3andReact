import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import * as d3 from 'd3';



const fetchText = async (url) => {
  const res = await fetch(url);
  return await res.text();
}

const url = 'https://gist.githubusercontent.com/ml-paperWen/ace0b4abb5bc6f87845edaefc5941014/raw/csscolor.csv'

const width = 960;
const height = 600;
const pieArc = d3.arc()
  .innerRadius(0)
  .outerRadius(width)
  .startAngle(Math.PI / 2)
  .endAngle(Math.PI * 3 / 2)


const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const cssText = fetchText(url).then((res) => {
      const data = d3.csvParse(res);
      console.log(`${Math.round(res.length / 1024)}kB`);
      console.log(`${data.length} rows`);
      console.log(`${data.columns.length} columns`);
      console.log(data);

      setData(data);
    });
  }, []);

  if (!data) {
    return <p>Loading</p>;
  }
  return (<svg width={width} height={height}>
    <g transform={`translate(${width / 2}, ${height / 2})`}>
      {/* {
        data.map((d, idx) => (
          <path
            fill={d['RGB hex value']}
            key={`${d.Keyword}-${idx}`}
            d={d3.arc()({
              innerRadius: 0,
              outerRadius: width,
              startAngle: idx * (Math.PI * 2) / data.length,
              endAngle: (idx + 1) * (Math.PI * 2) / data.length,
            })}>
          </path>))
      } */}
      {
        d3.pie().value(1)(data).map((dConfig, idx) => {
          // d3.pie 只是自動幫我們算出角度
          return <path
            fill={dConfig.data['RGB hex value']}
            key={`${dConfig.data.Keyword}-${idx}`}
            d={d3.arc()({
              innerRadius: 0,
              outerRadius: width,
              ...dConfig,
            })}>
          </path>
        })
      }
    </g>
  </svg>)
  // return data.map((d) => <p style={{ color: d['RGB hex value'] }}>{ d.Keyword }</p>)
}

const rootElement = document.getElementById('app');
ReactDom.render(<App />, rootElement);
