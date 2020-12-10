import styled from 'styled-components';
import { down, up } from 'styled-breakpoints';
import { PropsWithTheme } from '../../../Styles/Themes/Themes';

const AltText = styled.span`
  font-weight: ${(props: PropsWithTheme) => props.theme.fontWeights.semiBold};
  color: ${(props: PropsWithTheme) => props.theme.navAlt.contentColour};
  cursor: pointer;

  &:hover,
  &:active {
    text-decoration: underline;
    color: ${(props: PropsWithTheme) =>
      props.theme.navAlt.pseudo.contentColour};
  }

  transition: color ${({ theme }) => theme.transitions.short};

  ${down('sm')} {
    display: none;
  }
`;

const IconBadge = styled.div`
  cursor: pointer;

  background-color: ${(props: PropsWithTheme) =>
    props.theme.navAlt.special.backgroundColour};
  border-radius: 4px;

  padding: 8px;
  height: 24px;

  ${up('md')} {
    display: none;
  }

  &:hover,
  &:active {
    svg {
      stroke: ${(props: PropsWithTheme) =>
        props.theme.navAlt.pseudo.contentColour};
    }
  }

  &:hover {
    background-color: ${(props: PropsWithTheme) =>
      props.theme.navAlt.special.hover.backgroundColour};
  }

  &:active {
    background-color: ${(props: PropsWithTheme) =>
      props.theme.navAlt.special.active.backgroundColour};
  }
`;

export { AltText, IconBadge };
