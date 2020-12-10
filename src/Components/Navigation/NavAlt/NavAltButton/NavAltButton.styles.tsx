import styled from 'styled-components';
import { PropsWithTheme } from '../../../Styles/Themes/Themes';
import { AltText, IconBadge } from '../NavAltLink/NavAltLink.styles';

const AltButtonContainer = styled.div``;

const AltButtonText = styled(AltText)`
  padding: 9px 20px;

  border-radius: 4px;
  background-color: ${(props: PropsWithTheme) =>
    props.theme.navAlt.special.backgroundColour};

  transition: background-color ${({ theme }) => theme.transitions.short},
    color ${({ theme }) => theme.transitions.short},
    border-color ${({ theme }) => theme.transitions.short};

  &:hover {
    background-color: ${(props: PropsWithTheme) =>
      props.theme.navAlt.special.hover.backgroundColour};
  }

  &:active {
    background-color: ${(props: PropsWithTheme) =>
      props.theme.navAlt.special.active.backgroundColour};
  }
`;

const ButtonIconBadge = styled(IconBadge)``;

export { AltButtonContainer, AltButtonText, ButtonIconBadge };
