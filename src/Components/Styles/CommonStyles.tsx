import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Flex = styled.div`
  display: flex;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export { Flex, FlexColumn, StyledLink };
