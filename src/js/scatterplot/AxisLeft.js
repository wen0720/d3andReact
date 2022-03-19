import React from 'react';
import styled from 'styled-components';

const AxisLeftComponent = ({ yScale, className, innerWidth }) => {
  // yScale 是一個 function，當把圖表的刻度丟進去，會回傳 px
  // 這個 px 就是相對於原本給 ySacle 裡 range 裡的值
  return yScale.ticks().map((dTick, idx) => {
    return <g
      key={idx}
      className={className}
      transform={`translate(0, ${yScale(dTick)})`}>
      <line x2={innerWidth}></line>
      <text x="-20" textAnchor="end" dy="0.4em">{dTick}</text>
    </g>
  });
}

export const AxisLeft = styled(AxisLeftComponent)`
  stroke: #BDBDBD;
`
