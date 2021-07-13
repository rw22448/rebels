import styled from 'styled-components';
import { down, up } from 'styled-breakpoints';
import { ThemeObject } from '../../../Styles/Themes/Themes';

const AltText = styled.span`
  font-weight: ${(object: ThemeObject) => object.theme.fontWeights.semiBold};
  color: ${(object: ThemeObject) => object.theme.navAlt.contentColour};
  cursor: pointer;

  &:hover,
  &:active {
    text-decoration: underline;
    color: ${(object: ThemeObject) => object.theme.navAlt.pseudo.contentColour};
  }

  transition: color ${({ theme }) => theme.transitions.short};

  ${down('sm')} {
    display: none;
  }
`;

const IconBadge = styled.div`
  cursor: pointer;

  background-color: ${(object: ThemeObject) =>
    object.theme.navAlt.special.backgroundColour};
  border-radius: 4px;

  padding: 8px;
  height: 24px;

  ${up('md')} {
    display: none;
  }

  &:hover,
  &:active {
    svg {
      stroke: ${(object: ThemeObject) =>
        object.theme.navAlt.pseudo.contentColour};
    }
  }

  &:hover {
    background-color: ${(object: ThemeObject) =>
      object.theme.navAlt.special.hover.backgroundColour};
  }

  &:active {
    background-color: ${(object: ThemeObject) =>
      object.theme.navAlt.special.active.backgroundColour};
  }
`;

export { AltText, IconBadge };
