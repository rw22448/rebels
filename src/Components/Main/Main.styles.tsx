import styled from 'styled-components';
import { down } from 'styled-breakpoints';

const Content = styled.div`
  /* 100% of container - 40px for 3 * padding - 400px for width of banner */
  width: calc(100% - 120px - 400px);

  margin: 40px;

  ${down('lg')} {
    width: 100%;
  }
`;

export { Content };
