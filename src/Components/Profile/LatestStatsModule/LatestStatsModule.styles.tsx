import styled from 'styled-components';
import { PropsWithTheme } from '../../Styles/Themes/Themes';

const getAverageRankContainerColour = (averageRank: string): string => {
  const i = Math.floor(parseInt(averageRank));

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

interface AverageRankNumberContainerProps {
  averageRank: string;
}

const AverageRankContainer = styled.div`
  display: flex;
`;

const AverageRankNumberContainer = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  width: 64px;
  height: 64px;

  background-color: ${(props: AverageRankNumberContainerProps) =>
    getAverageRankContainerColour(props.averageRank)};

  border-radius: 8px;
`;

const AverageRank = styled.h1`
  font-size: 32px;
  color: ${(props: PropsWithTheme) => props.theme.colours.white};
`;

const AverageRankText = styled.div`
  margin-left: 12px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SubText = styled.div`
  color: ${(props: PropsWithTheme) => props.theme.colours.grey};
`;

export {
  AverageRankContainer,
  AverageRankNumberContainer,
  AverageRank,
  AverageRankText,
  SubText,
};
