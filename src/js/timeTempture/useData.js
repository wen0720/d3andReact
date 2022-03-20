import { useState, useEffect } from 'react';
import { csv } from 'd3';

const url = 'https://gist.githubusercontent.com/wen0720/5dcb55651feb24b409bd266baa381e01/raw/b2d63d2b1b2f1c526e5826e0a1811647394d706b/tempture';

export const useData = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const row = (d) => {
      d.temperature = +d.temperature; // 轉換成 number
      d.timestamp = new Date(d.timestamp); // 轉成時間
      return d;
    };
    csv(url, row).then(setData);
  }, []);
  return data;
};
