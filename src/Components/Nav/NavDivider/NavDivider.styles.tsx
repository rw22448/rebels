import styled from 'styled-components';
import { Theme } from '../../Styles/Themes/Themes';

interface DividerProps {
  theme: Theme;
}

interface DividerContainerProps {
  expanded: boolean;
}

const Divider = styled.div`
  flex: none;
  margin: auto;
  width: calc(100% - 16px);
  height: 2px;
  border-radius: 1px;
  background-color: ${(props: DividerProps) => props.theme.nav.contentColour};
`;

const DividerContainer = styled.div`
  display: flex;
  width: ${(props: DividerContainerProps) =>
    props.expanded ? '172px' : '40px'};
  padding: 8px 0px;
`;

export { Divider, DividerContainer };
