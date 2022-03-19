import React from 'react';
import styled from 'styled-components';

const MarksComponent = ({ className, xScale, yScale, data, xValue, yValue }) => {
  return data.map((d, idx) => {
    return <g className={className} key={idx}>
      <circle
        cx={xScale(xValue(d))}
        cy={yScale(yValue(d))}
        r="10">
      </circle>
    </g>
  });
}

export const Marks = styled(MarksComponent)`
  circle {
    fill: #137b80;
  }
`
