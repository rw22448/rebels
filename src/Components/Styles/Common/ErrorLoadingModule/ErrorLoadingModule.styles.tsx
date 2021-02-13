import styled from 'styled-components';
import { AlertCircle, RefreshCw } from 'react-feather';

const StyledAlertCircle = styled(AlertCircle).attrs(() => ({
  color: '#DE1A1A',
}))``;

const StyledRefreshCw = styled(RefreshCw)`
  transition: color 0.2s, background-color 0.2s;

  &:hover {
    cursor: pointer;
  }
`;

export { StyledAlertCircle, StyledRefreshCw };
