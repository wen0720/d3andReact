import React from 'react';
import styled from 'styled-components';
import { line, curveNatural } from 'd3';

const MarksComponent = ({ className, xScale, yScale, xValue, yValue, data }) => {
  return <g className={className}>
    <path d={line()
       // ref. https://observablehq.com/@d3/d3-line
      .curve(curveNatural) // 讓曲線更加的平滑一些
      .x((d) => {
        // console.log(d);
        return xScale(xValue(d));
      })
      .y((d) => yScale(yValue(d)))(data)}>
    </path>
    {
      data.map((d, idx) => {
        return (
          <g key={idx}>
            <circle
              cx={xScale(xValue(d))}
              cy={yScale(yValue(d))}
              r="3">
            </circle>
          </g>
        );
      })
    }
  </g>
}

export const Marks = styled(MarksComponent)`
  circle {
    stroke: #25B33D;
    fill: #ccc;
  }
  path {
    fill: none;
    stroke: #25B33D;
    stroke-width: 5;
    stroke-linejoin: round;
    stroke-linecap: round; // 線條最 2 邊的端點樣式
  }
`;
