import React from 'react';
import styled from 'styled-components';

const AxisLeftComponent = ({ yScale, className }) => {
  // 因為 yScale 是 scaleBand 不存在 ticks
  return yScale.domain().map((value) => (
    <text
      className={className}
      key={value}
      y={yScale(value) + yScale.bandwidth() / 2}
      x={-3}
      dy="0.32em"
      style={{ textAnchor: 'end' }}>{ value }
    </text>
  ))
};

export const AxisLeft = styled(AxisLeftComponent)`
  fill: #8e8883;
`
