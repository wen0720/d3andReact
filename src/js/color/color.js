import React from 'react';
import ReactDOM from 'react-dom';
import { scaleLinear, ticks } from 'd3';

const colorScale = scaleLinear([10, 100], ['brown', 'steelblue']);
const rulerScale = ticks(0, 10, 100); // 因為要包含前後的值，所以會產 101 個

const GradientColor = () => {
  return colorScale.ticks(45).map((tickValue) => {
    return <div
      style={{'backgroundColor': colorScale(tickValue), height: '10px'}}
      key={tickValue}>
    </div>
  });
};

const getRulerStyle = (value) => {
  const isBigNumber = !`${value}`.includes('.');
  return {
    width: '1px',
    height: isBigNumber ? '20px' : '8px',
    backgroundColor: '#666',
    margin: isBigNumber ? '15px 15px' : '0 15px 25px 15px',
    position: 'relative',
    display: 'inline-block',
  };
};

const Ruler = () => {
  return rulerScale.map((value) => {
    const isBigNumber = !`${value}`.includes('.');
    return <span
      key={value}
      style={getRulerStyle(value)}>
        <b
          style={{
            position: 'absolute',
            bottom: 0,
            transform: 'translateY(100%) translateX(-50%)',
            fontSize: isBigNumber ? '16px' : '12px',
            color: isBigNumber ? '#444' : '#666',
          }}>
            {value}
        </b>
    </span>
  });
};

const App = () => (
  <>
    <GradientColor/>
    <Ruler/>
  </>
);

ReactDOM.render(<App/>, document.getElementById('app'));
