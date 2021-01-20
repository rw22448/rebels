import styled from 'styled-components';
import { PropsWithTheme, Theme } from '../../Styles/Themes/Themes';
import { ProfileModuleContent } from '../ProfileModule/ProfileModule.styles';
import { Tier } from './RankBannerModule';

const getRankBannerContainerColour = (tier: Tier, theme: Theme): string => {
  const backgroundColours = {
    IRON: '#EOEOEO',
    BRONZE: '#2E1B0F',
    SILVER: '#585B5F',
    GOLD: '#D5C250',
    PLATINUM: '#074B4A',
    DIAMOND: '#2F2963',
    MASTER: '#481E3E',
    GRANDMASTER: '#494D5A',
    CHALLENGER: 'linear-gradient(#BFBEBE, #434343)',
    UNRANKED: theme.containerColour,
  };

  return backgroundColours[tier];
};

const getHeaderColour = (tier: Tier, theme: Theme): string => {
  switch (tier) {
    case 'UNRANKED':
      return theme.contentColour;
    case 'IRON':
      return '#585B5F';
    default:
      return '#FFFFFF';
  }
};

const getRankBorderColour = (tier: Tier, theme: Theme): string => {
  const borderColours = {
    IRON: '#585B5F',
    BRONZE: '#9E5D34',
    SILVER: '#C4C4C4',
    GOLD: '#F8F807',
    PLATINUM: '#21B0C0',
    DIAMOND: '#938CCF',
    MASTER: '#AD4895',
    GRANDMASTER: '#EF2E38',
    CHALLENGER: '#00A9E0',
    UNRANKED: theme.colours.grey,
  };

  return borderColours[tier];
};

const getRankNameColour = (tier: Tier, theme: Theme): string => {
  const borderColours = {
    IRON: '#585B5F',
    BRONZE: '#9E5D34',
    SILVER: '#C4C4C4',
    GOLD: '#F8F807',
    PLATINUM: '#21B0C0',
    DIAMOND: '#938CCF',
    MASTER: '#AD4895',
    GRANDMASTER: '#EF2E38',
    CHALLENGER: '#FFB60A',
    UNRANKED: theme.contentColour,
  };

  return borderColours[tier];
};

const getLeaguePointsColour = (tier: Tier): string => {
  switch (tier) {
    case 'UNRANKED':
    case 'IRON':
      return '#24292E';
    default:
      return '#FFFFFF';
  }
};

const getDetailedRankInfoTextColour = (tier: Tier): string => {
  switch (tier) {
    case 'IRON':
      return '#A3A3A3';
    case 'GOLD':
      return '#FFFFFF';
    case 'PLATINUM':
    case 'DIAMOND':
      return '#E0E0E0';
    default:
      return '#C4C4C4';
  }
};

interface RankBannerProps extends PropsWithTheme {
  tier: Tier;
}

const RankBannerModuleContent = styled(ProfileModuleContent)`
  background: ${(props: RankBannerProps) =>
    getRankBannerContainerColour(props.tier, props.theme)};
`;

const SetName = styled.h4`
  color: ${(props: RankBannerProps) =>
    getHeaderColour(props.tier, props.theme)};
  text-align: center;
`;

const RankInfoContainer = styled.div`
  padding: 24px 0px;
`;

const RankBorder = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  width: 120px;
  height: 120px;
  border-radius: 60px;
  border: 6px solid
    ${(props: RankBannerProps) => getRankBorderColour(props.tier, props.theme)};
`;

const PlayerRankData = styled.div`
  text-align: center;
`;

const RankName = styled.h4`
  font-size: 24px;
  color: ${(props: RankBannerProps) =>
    getRankNameColour(props.tier, props.theme)};
`;

const StyledTierName = styled.span`
  display: inline-block;
  text-transform: lowercase;

  &::first-letter {
    text-transform: uppercase;
  }
`;

const LeaguePoints = styled.h4`
  font-size: 24px;
  color: ${(props: RankBannerProps) => getLeaguePointsColour(props.tier)};
`;

const DetailedRankInfo = styled.div`
  color: ${(props: RankBannerProps) =>
    getDetailedRankInfoTextColour(props.tier)};
`;

const RankDetailText = styled.div`
  display: flex;
`;

const Wins = styled(RankDetailText)`
  color: ${(props: PropsWithTheme) => props.theme.colours.green};
`;

const Losses = styled(RankDetailText)``;

const WinRate = styled(RankDetailText)`
  color: ${(props: PropsWithTheme) => props.theme.colours.blue.blue};
`;

const GamesPlayed = styled(RankDetailText)``;

const Right = styled.span`
  flex: 0;
  margin-left: auto;
  text-align: right;
`;

export {
  RankBannerModuleContent,
  SetName,
  RankInfoContainer,
  RankBorder,
  PlayerRankData,
  RankName,
  StyledTierName,
  LeaguePoints,
  DetailedRankInfo,
  Wins,
  Losses,
  WinRate,
  GamesPlayed,
  Right,
};
