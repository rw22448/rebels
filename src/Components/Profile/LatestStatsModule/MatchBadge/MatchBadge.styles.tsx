import styled from 'styled-components';
import { PropsWithTheme } from '../../../Styles/Themes/Themes';

interface MatchBadgeContainerProps {
  placement: number;
}

const getMatchBadgeContainerColour = (placement: number): string => {
  const i = Math.floor(placement);

  switch (i) {
    case 1:
      return '#00C989';
    case 2:
      return '#009EE2';
    case 3:
      return '#33C2FF';
    case 4:
      return '#85DAFF';
    default:
      return '#C4C4C4';
  }
};

const MatchBadgeContainer = styled.div`
  box-sizing: border-box;

  width: 24px;
  height: 24px;

  border-radius: 4px;

  background-color: ${(props: MatchBadgeContainerProps) =>
    getMatchBadgeContainerColour(props.placement)};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Placement = styled.div`
  font-size: 14px;
  font-weight: ${(props: PropsWithTheme) => props.theme.fontWeights.semiBold};
  color: ${(props: PropsWithTheme) => props.theme.colours.white};
`;

export { MatchBadgeContainer, Placement };
