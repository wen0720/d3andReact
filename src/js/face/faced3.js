import React from 'react';
import ReactDom from 'react-dom';
import { range } from 'd3';
import { Face } from './face.js';

const width = 200;
const height = 120;
const strokeWidth = 10;
const eyeOffsetX = 20;
const eyeOffsetY = 28;
const eyeRadius = 10;
const mouthWidth = 6;
const mouthRadius = 20;

const faces = range(60);

const App = () => {
  return faces.map((number, idx) => (
      <Face
        key={idx}
        width={width}
        height={height}
        strokeWidth={strokeWidth + (number % 5)}
        eyeOffsetX={eyeOffsetX - (number % 5)}
        eyeOffsetY={eyeOffsetY}
        eyeRadius={eyeRadius}
        mouthWidth={mouthWidth}
        mouthRadius={mouthRadius}
      />
    ))
};

const rootElement = document.getElementById('app');
ReactDom.render(<App />, rootElement);
