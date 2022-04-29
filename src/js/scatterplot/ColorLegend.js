import React from 'react';

export const ColorLegend = ({ colorScale }) => {
  return colorScale.domain().map((colorV, index) => {
    return <g key={colorV} transform={`translate(0, ${index * 25})`}>
      <circle r="7" fill={colorScale(colorV)}></circle>
      <text dx={12} dy={5}>{colorV}</text>
    </g>
  })
}
