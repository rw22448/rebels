import styled from 'styled-components';
import { down } from 'styled-breakpoints';

const DescriptionContainer = styled.div`
  background-color: white;

  position: relative;
  bottom: 100px;

  ${down('lg')} {
    position: initial;
  }
`;

export { DescriptionContainer };
