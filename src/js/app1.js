import React from 'react';
import ReactDom from 'react-dom';

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 30;
const eyeOffsetX = 90;
const eyeOffsetY = 100;
const eyeRadius = 50;

const App = () => (
  <svg width={width} height={height}>
    <circle
      cx={centerX} cy={centerY} r={centerY - strokeWidth / 2}
      fill="yellow" stroke="black" strokeWidth={strokeWidth} />
    <circle cx={centerX - eyeOffsetX} cy={centerY - eyeOffsetY} r={eyeRadius} />
    <circle cx={centerX + eyeOffsetX} cy={centerY - eyeOffsetY} r={eyeRadius} />
  </svg>
);

const rootElement = document.getElementById('app');
ReactDom.render(<App />, rootElement);
