import React from 'react';
import styled from 'styled-components';

const AxisBottomComponent = ({ className, xScale, innerHeight }) => {
  return xScale.ticks().map((dTick, idx) => {
    // console.log(dTick);
    // xScale.ticks() 給的是在 x 軸上數值的刻度數，要在帶入 sScale 找到 px 值
    return <g
      key={idx} className={className}
      transform={`translate(${xScale(dTick)}, 0)`}>
      <line
        x1="0" y1="0"
        x2="0" y2={innerHeight}>
      </line>
      <text textAnchor="middle" y={innerHeight + 20}>{dTick}</text>
    </g>
  });
};

export const AxisBottom = styled(AxisBottomComponent)`
  line {
    stroke: #c0c0bb;
  }
  text {
    stroke: #c0c0bb;
  }
`;
