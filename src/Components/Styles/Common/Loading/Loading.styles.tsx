import styled, { keyframes } from 'styled-components';
import { PropsWithTheme } from '../../Themes/Themes';

interface StyledLoadingProps extends PropsWithTheme {
  size: number;
}

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const StyledLoading = styled.div`
  width: ${(props: StyledLoadingProps) => props.size + 'px'};
  height: ${(props: StyledLoadingProps) => props.size + 'px'};
  border: ${(props: StyledLoadingProps) => {
    if (props.size <= 30) return '2px solid ' + props.theme.background;
    else return '4px solid ' + props.theme.background;
  }};
  border-radius: 50%;
  border-top-color: ${(props: StyledLoadingProps) => props.theme.contentColour};
  animation: ${rotate} 1s linear infinite;

  transition: border
    ${(props: StyledLoadingProps) => props.theme.transitions.short};
`;

export { StyledLoading };
