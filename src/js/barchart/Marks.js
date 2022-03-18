import React from 'react';
import styled from 'styled-components';

const MarksComponent = ({ data, yScale, xScale, yValue, xValue, tickformat, className }) => {
  return data.map((d, idx) => (
    <rect
      className={className}
      key={idx}
      x={0}
      y={yScale(yValue(d))}
      width={xScale(xValue(d))}
      height={yScale.bandwidth()}>
      <title>{tickformat(xValue(d))}</title>
    </rect>
    ));
};

export const Marks = styled(MarksComponent)`
  fill: #137b80;
`
