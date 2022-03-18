import { useState, useEffect } from 'react';
import { csv } from 'd3';

const url = 'https://gist.githubusercontent.com/wen0720/da1a423e99011bb25eabda100684b1c0/raw/810de8483a1709a6582272121ce253672ff9193e/UN_Population_2019.csv';

export const useData = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const row = (d) => {
      d.Population = +d['2020'] * 1000; // 原本的數字是以千為單位
      return d;
    }
    csv(url, row).then((data) => {
      console.log(data);
      setData(data.slice(0, 10));
    });
  }, []);
  return data;
};
