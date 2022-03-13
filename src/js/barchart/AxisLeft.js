import React from 'react';

export const AxisLeft = ({ yScale }) => {
  // 因為 yScale 是 scaleBand 不存在 ticks
  return yScale.domain().map((value) => (
    <text
      key={value}
      y={yScale(value) + yScale.bandwidth() / 2}
      x={-3}
      dy="0.32em"
      style={{ textAnchor: 'end' }}>{ value }
    </text>
  ))
};
