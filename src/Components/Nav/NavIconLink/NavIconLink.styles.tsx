import styled from 'styled-components';
import { Theme } from '../../Styles/Themes/Themes';

interface NavIconContainerProps {
  text: string | undefined;
  expanded: boolean | undefined;
  theme: Theme;
}

interface TextProps {
  expanded: boolean | undefined;
  theme: Theme;
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
`;

const Text = styled.span`
  margin: 9px 0px 9px 12px;
  color: ${(props: TextProps) => props.theme.nav.contentColour};
  font-weight: 600;

  display: ${(props: TextProps) => (props.expanded ? 'initial' : 'none')};
`;

export { IconArea, NavIconContainer, Text };
