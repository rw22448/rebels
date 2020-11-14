import styled from 'styled-components';

interface NavIconContainerProps {
  text: string | undefined;
  expanded: boolean | undefined;
}

interface TextProps {
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

  &:hover,
  &:active {
    svg {
      stroke: #24292e;
    }

    * {
      color: #24292e;
    }
  }

  &:hover {
    background-color: #ebebeb;
  }

  &:active {
    background-color: #d6d6d6;
  }
`;

const Text = styled.span`
  margin: 9px 0px 9px 12px;
  color: #a3a3a3;
  user-select: none;
  font-weight: 600;

  display: ${(props: TextProps) => (props.expanded ? 'initial' : 'none')};
`;

export { IconArea, NavIconContainer, Text };
