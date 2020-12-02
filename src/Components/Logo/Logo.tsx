import React from 'react';
import {
  LogoContainer,
  RebelSquare,
  BackgroundSquare,
  RebelIconContainer,
  LogoHeadingText,
} from './Logo.styles';
import { RebelTFTIcon } from './RebelTFTIcon';

interface LogoProps {
  size: 1 | 2 | 3;
  withText?: boolean;
}

const Logo = ({ size, withText }: LogoProps) => {
  return (
    <>
      <LogoContainer size={size}>
        <BackgroundSquare size={size} />
        <RebelSquare size={size}>
          <RebelIconContainer size={size}>
            <RebelTFTIcon size={size} />
          </RebelIconContainer>
        </RebelSquare>
      </LogoContainer>
      {withText && <LogoHeadingText>Rebels</LogoHeadingText>}
    </>
  );
};

export { Logo };
export type { LogoProps };
