import { down } from 'styled-breakpoints';
import styled from 'styled-components';
import { ThemeObject } from '../Styles/Themes/Themes';

const ProfileContainer = styled.div`
  width: 100%;
  margin: 40px 24px;
`;

const ProfileContent = styled.div`
  margin: 0 auto;

  > div {
    margin: 0 auto;

    max-width: ${(object: ThemeObject) => object.theme.contentSizes.xl};

    ${down('lg')} {
      max-width: ${(object: ThemeObject) => object.theme.contentSizes.lg};
    }

    ${down('md')} {
      max-width: ${(object: ThemeObject) => object.theme.contentSizes.md};
    }

    ${down('sm')} {
      max-width: 788px;
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
  display: grid;
  gap: 24px;

  ${down('lg')} {
    grid-template-columns: auto 324px;
  }

  ${down('sm')} {
    display: flex;
    flex-direction: column;
  }
`;

const MainContent = styled.div`
  display: grid;

  grid-template-columns: 324px auto;
  gap: 24px;

  ${down('lg')} {
    grid-template-columns: 918px;
  }

  ${down('md')} {
    grid-template-columns: 656px;
  }

  ${down('sm')} {
    display: flex;
    flex-direction: column;
  }
`;

export {
  ProfileContainer,
  ProfileContent,
  ProfileLoadingContainer,
  ProfileErrorContainer,
  ProfileSideGrid,
  MainContent,
};
