import React from 'react';

export const FaceContainer = (props) => (
  <svg
    width={props.width}
    height={props.height}>
    <g transform={`translate(${props.centerX}, ${props.centerY})`}>
      {props.children}
    </g>
  </svg>
)
