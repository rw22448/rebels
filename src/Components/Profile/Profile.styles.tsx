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

    max-width: ${(props: PropsWithTheme) => props.theme.contentSizes.xl};

    ${down('lg')} {
      max-width: ${(props: PropsWithTheme) => props.theme.contentSizes.lg};
    }

    ${down('md')} {
      max-width: ${(props: PropsWithTheme) => props.theme.contentSizes.md};
    }

    ${down('sm')} {
      margin: 0;
    }
  }
`;

const ProfileLoadingContainer = styled.div`
  margin: auto;
`;

const ProfileErrorContainer = styled.div`
  margin: auto;
  padding: 40px 24px 160px 24px;
`;

const ProfileSideGrid = styled.div`
  display: inline-grid;

  grid-template-columns: 324px;
  gap: 24px;
`;

export {
  ProfileContainer,
  ProfileContent,
  ProfileLoadingContainer,
  ProfileErrorContainer,
  ProfileSideGrid,
};
