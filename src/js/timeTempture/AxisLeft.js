import React from 'react';
import styled from 'styled-components';

const AxisLeftComponent = ({ className, yScale, innerWidth }) => {
  return yScale.ticks().map((dTick) => {
    return <g className={className}
      key={dTick}
      transform={`translate(0, ${yScale(dTick)})`}>
      <line x2={innerWidth}></line>
      <text
        textAnchor="middle"
        dy="0.2em"
        x="-20">{dTick}</text>
    </g>;
  });
}

export const AxisLeft = styled(AxisLeftComponent)`
  line {
    stroke: #ddd;
  }
`;
