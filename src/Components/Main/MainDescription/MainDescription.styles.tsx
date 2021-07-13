import { down } from 'styled-breakpoints';
import styled from 'styled-components';
import { ThemeObject } from '../../Styles/Themes/Themes';

const Description = styled.div`
  background-color: ${(object: ThemeObject) => object.theme.containerColour};
  margin-top: 240px;
`;

const DescriptionContainer = styled.div`
  min-width: 275px;
  max-width: 918px;
  padding: 40px 80px;

  ${down('md')} {
    max-width: 738px;
  }

  ${down('sm')} {
    max-width: 416px;
  }
`;

const DescriptionHeader = styled.h1`
  font-size: 48px;

  ${down('sm')} {
    font-size: 40px;
  }
`;

const DescriptionText = styled.div`
  margin-top: 16px;
`;

export {
  Description,
  DescriptionContainer,
  DescriptionHeader,
  DescriptionText,
};
