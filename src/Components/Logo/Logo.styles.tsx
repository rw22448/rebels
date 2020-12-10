import styled from 'styled-components';
import { PropsWithTheme } from '../Styles/Themes/Themes';
import { LogoProps } from './Logo';

const LogoContainer = styled.div`
  flex: none;
  width: ${(props: LogoProps) => props.size * 48 + 'px'};
  height: ${(props: LogoProps) => props.size * 48 + 'px'};
  position: relative;
`;

const Square = styled.div`
  width: ${(props: LogoProps) => props.size * 30 + 'px'};
  height: ${(props: LogoProps) => props.size * 30 + 'px'};
  border-radius: ${(props: LogoProps) => props.size * 4 + 'px'};
  position: absolute;
`;

const RebelSquare = styled(Square)`
  background-color: ${(props: PropsWithTheme) => props.theme.colours.black};
  bottom: ${(props: LogoProps) => props.size * 4 + 'px'};
  left: ${(props: LogoProps) => props.size * 4 + 'px'};
`;

const BackgroundSquare = styled(Square)`
  box-sizing: border-box;
  border: ${(props: LogoProps) => props.size * 4 + 'px'} solid
    ${(props: PropsWithTheme) => props.theme.colours.blue};
  top: ${(props: LogoProps) => props.size * 4 + 'px'};
  right: ${(props: LogoProps) => props.size * 4 + 'px'};
`;

const RebelIconContainer = styled.div`
  width: ${(props: LogoProps) => props.size * 24 + 'px'};
  height: ${(props: LogoProps) => props.size * 24 + 'px'};

  position: absolute;
  top: ${(props: LogoProps) => props.size * 3 + 'px'};
  left: ${(props: LogoProps) => props.size * 3 + 'px'};
`;

const LogoHeadingText = styled.h1`
  font-size: ${(props: LogoProps) => props.size * 28 + 'px'};
  padding-left: ${(props: LogoProps) => props.size * 12 + 'px'};
`;

export {
  LogoContainer,
  RebelSquare,
  BackgroundSquare,
  RebelIconContainer,
  LogoHeadingText,
};
