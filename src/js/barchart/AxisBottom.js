import React from 'react';
import styled from 'styled-components';


const AxisBottomComponent = ({ xScale, innerHeight, className }) => {
  return xScale.ticks().map((tickValue, idx) => (
    <g key={idx}
      className={className}
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

export const AxisBottom = styled(AxisBottomComponent)`
  line {
    stroke: #c0c0bb;
  }
  text {
    fill: #8e8883;
  }
`
