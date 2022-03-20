import React from 'react';
import styled from 'styled-components';

const MarksComponent = ({ className, xScale, yScale, xValue, yValue, data }) => {
  return data.map((d, idx) => {
    return (
      <g key={idx} className={className}>
        <circle
          cx={xScale(d.timestamp)}
          cy={yScale(d.temperature)}
          r="10"
          stroke="black">
        </circle>
      </g>
    );
  })
}

export const Marks = styled(MarksComponent)`

`;
