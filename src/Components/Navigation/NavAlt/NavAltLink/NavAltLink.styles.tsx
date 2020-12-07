import styled from 'styled-components';
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
`;

export { AltText };
