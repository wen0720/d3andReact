import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import { useData } from './useData';
import { Marks } from './Mark';

const width = 1200;
const height = 700;

const App = () => {
  const data = useData();
  console.log(data);
  return <svg
    width={width} height={height}>
      <Marks data={data}/>
  </svg>
};

ReactDom.render(<App/>, document.getElementById('app'));
