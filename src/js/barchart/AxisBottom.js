import React from 'react';

export const AxisBottom = ({ xScale, innerHeight }) => {
  return xScale.ticks().map((tickValue, idx) => (
    <g key={idx}
      transform={`translate(${xScale(tickValue)}, 0)`}>
      <line
        x1="0" // 實際上預設就是 0，可以刪掉
        y1="0" // 實際上預設就是 0，可以刪掉
        x2="0" // 實際上預設就是 0，可以刪掉
        y2={innerHeight}
        stroke="black" />
      <text
        y={innerHeight}
        dy="16px"
        style={{ textAnchor: 'middle' }}>{tickValue}</text>
    </g>
  ))
};
