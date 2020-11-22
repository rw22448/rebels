import { down } from 'styled-breakpoints';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  width: 100%;
  margin: 40px 24px;
`;

const ProfileContent = styled.div`
  margin: 0 auto;

  > div {
    margin: 0 auto;

    max-width: 1266px;

    ${down('lg')} {
      max-width: 918px;
    }

    ${down('md')} {
      max-width: 622px;
    }

    ${down('sm')} {
      margin: 0;
    }
  }
`;

export { ProfileContainer, ProfileContent };
