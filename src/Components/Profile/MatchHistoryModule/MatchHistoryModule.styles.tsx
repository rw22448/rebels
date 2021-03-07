import styled from 'styled-components';
import { PropsWithTheme } from '../../Styles/Themes/Themes';

const Warning = styled.div`
  color: ${(props: PropsWithTheme) => props.theme.colours.grey.grey};
`;

const MatchHistoryGrid = styled.div`
  display: grid;
  gap: 12px;
`;

const MatchContent = styled.div`
  display: flex;
`;

export { Warning, MatchHistoryGrid, MatchContent };
