import styled from 'styled-components';
import { PropsWithTheme } from '../../Styles/Themes/Themes';

interface DividerContainerProps {
  expanded: boolean;
}

const Divider = styled.div`
  margin: auto;
  width: calc(100% - 16px);
  height: 2px;
  border-radius: 1px;
  background-color: ${(props: PropsWithTheme) => props.theme.nav.contentColour};
`;

const DividerContainer = styled.div`
  width: ${(props: DividerContainerProps) =>
    props.expanded ? '172px' : '40px'};
  padding: 8px 0px;
`;

export { Divider, DividerContainer };
