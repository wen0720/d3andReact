import React from 'react';
import styled from 'styled-components';

const MarksComponent = ({ className, xScale, yScale, data, xValue, yValue, colorScale, colorValue }) => {
  return data.map((d, idx) => {
    return <g className={className} key={idx}>
      <circle
        cx={xScale(xValue(d))}
        cy={yScale(yValue(d))}
        style={{ fill: colorScale(colorValue(d)) }}
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
