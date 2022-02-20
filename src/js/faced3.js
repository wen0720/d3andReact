import React from 'react';
import ReactDom from 'react-dom';
import { arc } from 'd3';

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 30;
const eyeOffsetX = 90;
const eyeOffsetY = 100;
const eyeRadius = 50;
const mouthWidth = 20;
const mouthRadius = 140;
const mouthArc = arc()
  .innerRadius(mouthRadius)
  .outerRadius(mouthRadius + mouthWidth)
  .startAngle(Math.PI / 2)
  .endAngle(Math.PI * 3 / 2)

const App = () => (
  <svg width={width} height={height}>
    <g transform={`translate(${centerX}, ${centerY})`}>
      <circle
        cx="0" cy="0" r={centerY - strokeWidth / 2}
        fill="yellow" stroke="black" strokeWidth={strokeWidth} />
      <circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
      <circle cx={eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
      <path d={mouthArc()}/>
    </g>
  </svg>
);

const rootElement = document.getElementById('app');
ReactDom.render(<App />, rootElement);
