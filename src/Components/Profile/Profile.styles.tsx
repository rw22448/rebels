import { down } from 'styled-breakpoints';
import styled from 'styled-components';
import { PropsWithTheme } from '../Styles/Themes/Themes';

const ProfileContainer = styled.div`
  width: 100%;
  margin: 40px 24px;
`;

const ProfileContent = styled.div`
  margin: 0 auto;

  > div {
    margin: 0 auto;

    max-width: ${(props: PropsWithTheme) => props.theme.contentSize.xl};

    ${down('lg')} {
      max-width: ${(props: PropsWithTheme) => props.theme.contentSize.lg};
    }

    ${down('md')} {
      max-width: ${(props: PropsWithTheme) => props.theme.contentSize.md};
    }

    ${down('sm')} {
      margin: 0;
    }
  }
`;

export { ProfileContainer, ProfileContent };
