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

const DividerImageContainer = styled.div`
  display: flex;
  margin: 48px 0px;

  ${down('sm')} {
    display: none;
  }
`;

const DividerImage = styled.img`
  margin: auto;
`;

const Disclaimer = styled.p`
  margin: 24px 80px;

  ${down('sm')} {
    margin: 24px;
  }
`;

export { Content, DividerImageContainer, DividerImage, Disclaimer };
