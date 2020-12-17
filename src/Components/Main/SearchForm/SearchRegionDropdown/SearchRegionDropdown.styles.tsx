import styled from 'styled-components';
import { PropsWithTheme } from '../../../Styles/Themes/Themes';

interface DropdownBoxProps extends PropsWithTheme {
  expanded: boolean;
  length: number;
}

interface DropdownListProps extends PropsWithTheme {
  expanded: boolean;
}

const Dropdown = styled.div``;

const DropdownLabel = styled.label`
  font-size: 20px;
`;

const LabelWrapper = styled.div`
  margin-bottom: 4px;
`;

const DropdownIconWrapper = styled.span`
  cursor: pointer;
  display: flex;
  align-items: center;

  position: relative;
  top: 0px;

  margin-left: auto;
  height: 24px;
  width: 24px;

  border-radius: 4px;

  svg {
    margin: auto;
  }

  transition: ${(props: PropsWithTheme) =>
    `top ${props.theme.transitions.short}`};

  &:hover {
    top: 4px;
  }
`;

const DropdownSelectedValueText = styled.span``;

const DropdownBox = styled.div`
  cursor: ${(props: DropdownBoxProps) =>
    props.expanded ? 'initial' : 'pointer'};

  height: ${(props: DropdownBoxProps) => {
    if (props.expanded) {
      return `${54 + 2 + 16 + 8 + props.length * 30}px`;
    } else {
      return '54px';
    }
  }};

  box-sizing: border-box;

  padding: 8px 24px;

  border-radius: 8px;
  box-shadow: ${(props: DropdownBoxProps) => props.theme.shadows.downShadow};
  background-color: ${(props: DropdownBoxProps) => props.theme.containerColour};

  transition: ${(props: DropdownBoxProps) =>
    props.expanded
      ? `background-color ${props.theme.transitions.short}, height ${props.theme.transitions.short}`
      : `background-color ${props.theme.transitions.short}, height ${props.theme.transitions.short} ease ${props.theme.transitions.short}`};

  &:focus {
    outline: none;
  }

  &:hover ${DropdownIconWrapper} {
    ${(props: DropdownBoxProps) => (props.expanded ? '' : `top: 4px;`)}
  }

  &:hover ${DropdownSelectedValueText} {
    ${(props: DropdownBoxProps) =>
      props.expanded ? '' : 'text-decoration: underline;'}
  }

  user-select: none;
`;

const DropdownBoxContents = styled.div`
  display: flex;
  align-items: center;

  height: 38px;
`;

const DropdownList = styled.div`
  height: ${(props: DropdownListProps) => (props.expanded ? 'initial' : '0px')};

  visibility: ${(props: DropdownListProps) =>
    props.expanded ? 'visible' : 'hidden'};
  opacity: ${(props: DropdownListProps) => (props.expanded ? '1' : '0')};

  transition: ${(props: DropdownListProps) =>
    props.expanded
      ? `opacity 0.1s ease ${props.theme.transitions.short},
      visibility 0.1s ease ${props.theme.transitions.short}`
      : `opacity 0.05s ease 0.05s,
      visibility 0.05s ease 0.05s`};
`;

const DropdownListContents = styled.ul`
  margin: 0px;
  padding: 8px 0px 8px 0px;

  list-style: none;
`;

const DropdownListItemOption = styled.li`
  padding-bottom: 8px;

  &:hover,
  &:active {
    text-decoration: underline;

    cursor: pointer;
  }

  * {
    pointer-events: none;
  }
`;

const DropdownListItemText = styled.span``;

export {
  Dropdown,
  DropdownLabel,
  LabelWrapper,
  DropdownIconWrapper,
  DropdownSelectedValueText,
  DropdownBox,
  DropdownBoxContents,
  DropdownListContents,
  DropdownList,
  DropdownListItemOption,
  DropdownListItemText,
};
