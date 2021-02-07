import { down } from 'styled-breakpoints';
import styled from 'styled-components';

const IconContainer = styled.div`
  display: flex;
  width: 108px;
  height: 108px;

  ${down('md')} {
    width: 72px;
    height: 72px;
  }
`;

const StyledRankIcon = styled.img`
  width: 90px;
  flex: 0;
  margin: auto;

  ${down('md')} {
    height: 64px;
  }
`;

export { IconContainer, StyledRankIcon };
