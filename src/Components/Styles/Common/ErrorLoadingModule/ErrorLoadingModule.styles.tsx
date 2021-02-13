import styled from 'styled-components';
import { AlertCircle, RefreshCw } from 'react-feather';

const StyledAlertCircle = styled(AlertCircle).attrs(() => ({
  color: '#DE1A1A',
}))``;

const StyledRefreshCw = styled(RefreshCw)`
  &:hover {
    cursor: pointer;
  }
`;

export { StyledAlertCircle, StyledRefreshCw };
