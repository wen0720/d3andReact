import React, { useState, useCallback } from 'react';
import ReactDom from 'react-dom';


const width = 960;
const height = 300;
const centerX = width / 2;
const centerY = height / 2;
const initialMousePos = { x: width / 2, y: height / 2 };
const circleRadius = 30;


const App = () => {
  const [mousePosition, setMousePosition] = useState(initialMousePos);
  const handleMosueMove = useCallback((event) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  }, [setMousePosition]);
  return (
    <svg width={width} height={height}
      onMouseMove={handleMosueMove}>
      <circle
        cx={mousePosition.x}
        cy={mousePosition.y}
        r={circleRadius}
      ></circle>
    </svg>
  )
}
const rootElement = document.getElementById('app');
ReactDom.render(<App />, rootElement);
