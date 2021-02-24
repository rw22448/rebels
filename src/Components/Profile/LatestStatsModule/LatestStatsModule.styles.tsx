import styled from 'styled-components';
import { down } from 'styled-breakpoints';
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

const LatestStatsContent = styled.div`
  min-width: 276px;
`;

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
  color: ${(props: PropsWithTheme) => props.theme.colours.grey.darkGrey};
`;

const LatestStatsContainer = styled.div`
  margin-top: 16px;
`;

const StatsSummaryContainer = styled.div`
  margin: 8px 0px;

  display: grid;
  gap: 4px;
  grid-template-columns: repeat(10, 24px);

  ${down('sm')} {
    /* 100% of container (flex for mobile) - 240px (24px wide badges * 10 per row) / 9 (9 grid gaps between 10 elements) */
    gap: 4px calc((100% - 240px) / 9);
  }
`;

const Newest = styled.div`
  text-align: start;
  color: ${(props: PropsWithTheme) => props.theme.colours.grey.darkGrey};
`;

const Oldest = styled.div`
  text-align: end;
  color: ${(props: PropsWithTheme) => props.theme.colours.grey.darkGrey};
`;

const Wins = styled.div`
  display: flex;
  color: ${(props: PropsWithTheme) => props.theme.colours.green};
`;

const Tops = styled.div`
  display: flex;
`;

const Right = styled.span`
  flex: 0;
  margin-left: auto;
  text-align: right;
`;

export {
  LatestStatsContent,
  AverageRankContainer,
  AverageRankNumberContainer,
  AverageRank,
  AverageRankText,
  SubText,
  LatestStatsContainer,
  StatsSummaryContainer,
  Newest,
  Oldest,
  Wins,
  Tops,
  Right,
};
