import topojsonData from 'world-atlas/countries-50m.json';
import { useState, useEffect } from 'react';
import { feature, mesh } from 'topojson';

export const useData = () => {
  const { countries, land } = topojsonData.objects;
  const [data, setData] = useState({
    countries: feature(topojsonData, countries),
    interiors: mesh(topojsonData, countries, (a, b) => a !== b),
    land: feature(topojsonData, land),
  });
  return data;
};

/*
  mesh 其實就是產出這個幾何群集的邊界
  多帶這個 (a, b) => a !== b，是表示只要幾何之間的邊界，不要外面的輪廓
*/
