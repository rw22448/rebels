import styled, { keyframes } from 'styled-components';
import { PropsWithTheme } from '../../Themes/Themes';

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const StyledLoading = styled.div`
  width: 60px;
  height: 60px;
  border: 4px solid ${(props: PropsWithTheme) => props.theme.background};
  border-radius: 50%;
  border-top-color: ${(props: PropsWithTheme) => props.theme.contentColour};
  animation: ${rotate} 1s linear infinite;

  transition: border ${(props: PropsWithTheme) => props.theme.transitions.short};
`;

export { StyledLoading };
