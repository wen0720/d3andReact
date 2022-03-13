import React from 'react';

export const Marks = ({ data, yScale, xScale, yValue, xValue }) => {
  return data.map((d, idx) => (
    <rect
      key={idx}
      x={0}
      y={yScale(yValue(d))}
      width={xScale(xValue(d))}
      height={yScale.bandwidth()}
    />));
};
