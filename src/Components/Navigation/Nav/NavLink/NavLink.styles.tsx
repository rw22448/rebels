import styled from 'styled-components';
import { ThemeObject } from '../../../Styles/Themes/Themes';

interface NavIconContainerProps extends ThemeObject {
  text: string | undefined;
  expanded: boolean | undefined;
}

interface TextProps extends ThemeObject {
  expanded: boolean | undefined;
}

const IconArea = styled.div`
  margin: 8px 0px 0px 8px;
  width: 24px;
  height: 24px;
`;

const NavIconContainer = styled.div`
  display: flex;
  border-radius: 4px;

  width: ${(props: NavIconContainerProps) =>
    props.expanded && props.text ? '172px' : '40px'};
  height: 40px;

  cursor: pointer;

  &:hover,
  &:active {
    svg {
      stroke: ${(props: NavIconContainerProps) =>
        props.theme.nav.pseudo.contentColour};
    }

    * {
      color: ${(props: NavIconContainerProps) =>
        props.theme.nav.pseudo.contentColour};
    }
  }

  &:hover {
    background-color: ${(props: NavIconContainerProps) =>
      props.theme.nav.hover.linkColour};
  }

  &:active {
    background-color: ${(props: NavIconContainerProps) =>
      props.theme.nav.active.linkColour};
  }

  transition: ${(props: NavIconContainerProps) => {
    if (props.expanded) {
      return `background-color ${props.theme.transitions.short},
      width ${props.theme.transitions.short}`;
    } else {
      return `background-color ${props.theme.transitions.short},
      width ${props.theme.transitions.short} ease ${props.theme.transitions.short}`;
    }
  }};
`;

const Text = styled.span`
  margin: 9px 0px 9px 12px;
  color: ${(props: TextProps) => props.theme.nav.contentColour};
  font-weight: ${(props: TextProps) => props.theme.fontWeights.semiBold};

  visibility: ${(props: TextProps) => (props.expanded ? 'visible' : 'hidden')};
  opacity: ${(props: TextProps) => (props.expanded ? '1' : '0')};

  transition: ${(props: TextProps) =>
    props.expanded
      ? `opacity ${props.theme.transitions.shorter} ease ${props.theme.transitions.short},
      visibility ${props.theme.transitions.shorter} ease ${props.theme.transitions.short}`
      : `opacity ${props.theme.transitions.shorter},
      visibility ${props.theme.transitions.shorter}`};
`;

export { IconArea, NavIconContainer, Text };
