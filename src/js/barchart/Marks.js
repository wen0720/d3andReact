import React from 'react';
import styled from 'styled-components';

const MarksComponent = ({ data, yScale, xScale, yValue, xValue, className }) => {
  return data.map((d, idx) => (
    <rect
      className={className}
      key={idx}
      x={0}
      y={yScale(yValue(d))}
      width={xScale(xValue(d))}
      height={yScale.bandwidth()}
    />));
};

export const Marks = styled(MarksComponent)`
  fill: #137b80;
`
