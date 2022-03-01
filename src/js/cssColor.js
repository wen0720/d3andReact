import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import * as d3 from 'd3';



const fetchText = async (url) => {
  const res = await fetch(url);
  return await res.text();
}

const url = 'https://gist.githubusercontent.com/ml-paperWen/ace0b4abb5bc6f87845edaefc5941014/raw/csscolor.csv'


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
  return <p>APP</p>
}

const rootElement = document.getElementById('app');
ReactDom.render(<App />, rootElement);
