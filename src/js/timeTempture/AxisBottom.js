import React from 'react';
import styled from 'styled-components';
import { timeDay } from 'd3';

const AxisBottomComponent = ({ className, xScale, innerHeight, formatWeek }) => {
  return xScale.ticks(timeDay.every(1)).map((dTick, idx) => {
    return <g
      className={className}
      key={idx}
      transform={`translate(${xScale(dTick)}, 0)`}>
      <line y2={innerHeight}></line>
      <text y={innerHeight + 20}>{formatWeek(dTick)}</text>
    </g>
  });
};

export const AxisBottom = styled(AxisBottomComponent)`
  line {
    stroke: #ddd;
  }
`
