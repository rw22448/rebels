import { down } from 'styled-breakpoints';
import styled from 'styled-components';
import { Theme } from '../Styles/Themes/Themes';

interface ProfileContentProps {
  theme: Theme;
}

const ProfileContainer = styled.div`
  width: 100%;
  margin: 40px 24px;
`;

const ProfileContent = styled.div`
  margin: 0 auto;

  > div {
    margin: 0 auto;

    max-width: ${(props: ProfileContentProps) => props.theme.contentSize.xl};

    ${down('lg')} {
      max-width: ${(props: ProfileContentProps) => props.theme.contentSize.lg};
    }

    ${down('md')} {
      max-width: ${(props: ProfileContentProps) => props.theme.contentSize.md};
    }

    ${down('sm')} {
      margin: 0;
    }
  }
`;

export { ProfileContainer, ProfileContent };
