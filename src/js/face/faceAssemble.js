import React from 'react';
import { arc } from 'd3';

export const BackRoundCircle = ({ radius, strokeWidth }) => (
  <circle
    cx="0" cy="0" r={radius}
    fill="yellow" stroke="black"
    strokeWidth={strokeWidth}
  />
)

export const Eye = ({ eyeOffsetX, eyeOffsetY, eyeRadius }) => (
  <circle
    cx={eyeOffsetX}
    cy={eyeOffsetY}
    r={eyeRadius}
  />
)

export const Mouth = ({ mouthRadius, mouthWidth }) => {
  const mouthArc = arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius + mouthWidth)
    .startAngle(Math.PI / 2)
    .endAngle(Math.PI * 3 / 2)
  return <path d={mouthArc()}/>
};
