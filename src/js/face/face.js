import React from 'react';
import { BackRoundCircle, Eye, Mouth } from './faceAssemble.js';
import { FaceContainer } from './faceContainer';


export const Face = ({
  width,
  height,
  strokeWidth,
  eyeOffsetX,
  eyeOffsetY,
  eyeRadius,
  mouthWidth,
  mouthRadius,
}) => {
  const centerX = width / 2;
  const centerY = height / 2;
  return (
    <FaceContainer
      width={width}
      height={height}
      centerX={centerX}
      centerY={centerY}>
      <BackRoundCircle
        radius={centerY - strokeWidth / 2}
        strokeWidth={strokeWidth} />
      <Eye
        eyeOffsetX={-eyeOffsetX}
        eyeOffsetY={-eyeOffsetY}
        eyeRadius={eyeRadius}
      />
      <Eye
        eyeOffsetX={eyeOffsetX}
        eyeOffsetY={-eyeOffsetY}
        eyeRadius={eyeRadius}
      />
      <Mouth
        mouthRadius={mouthRadius}
        mouthWidth={mouthWidth}
      />
    </FaceContainer>
  )
};
