import styled from 'styled-components';
import { down } from 'styled-breakpoints';
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
    CHALLENGER: 'linear-gradient(#8a8a8a, #434343)',
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
    UNRANKED: theme.colours.grey.grey,
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

const getLeaguePointsColour = (tier: Tier, theme: Theme): string => {
  switch (tier) {
    case 'UNRANKED':
      return theme.contentColour;
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
    case 'CHALLENGER':
      return '#FFFFFF';
    case 'PLATINUM':
    case 'DIAMOND':
    case 'MASTER':
    case 'GRANDMASTER':
      return '#E0E0E0';
    default:
      return '#C4C4C4';
  }
};

interface RankBannerProps extends PropsWithTheme {
  tier: Tier;
}

const RankBannerModuleContent = styled(ProfileModuleContent)`
  display: grid;

  grid-template-columns: auto;

  background: ${(props: RankBannerProps) =>
    getRankBannerContainerColour(props.tier, props.theme)};

  ${down('lg')} {
    grid-template-columns: 226px 50px auto;
  }

  ${down('md')} {
    grid-template-columns: 260px;
  }

  ${down('sm')} {
    grid-template-columns: auto;
  }
`;

const SetName = styled.h4`
  color: ${(props: RankBannerProps) =>
    getHeaderColour(props.tier, props.theme)};
  text-align: center;

  ${down('md')} {
    font-size: 16px;
  }
`;

const RankInfoContainer = styled.div`
  padding: 24px 0px;

  ${down('md')} {
    padding: 8px 16px 8px 0px;
  }
`;

const RankBorder = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  width: 120px;
  height: 120px;
  border-radius: 60px;
  border: 6px solid
    ${(props: RankBannerProps) => getRankBorderColour(props.tier, props.theme)};

  ${down('md')} {
    width: 80px;
    height: 80px;

    border: 4px solid
      ${(props: RankBannerProps) =>
        getRankBorderColour(props.tier, props.theme)};
  }
`;

const PlayerRankData = styled.div`
  text-align: center;

  ${down('md')} {
    align-self: center;

    text-align: start;
  }
`;

const RankName = styled.h4`
  font-size: 24px;
  color: ${(props: RankBannerProps) =>
    getRankNameColour(props.tier, props.theme)};

  ${down('md')} {
    font-size: 20px;
  }
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
  color: ${(props: RankBannerProps) =>
    getLeaguePointsColour(props.tier, props.theme)};

  ${down('md')} {
    font-size: 20px;
  }
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

const HorizontalRuleContainer = styled.div`
  padding: 8px 0px;

  display: initial;

  ${down('lg')} {
    display: none;
  }

  ${down('md')} {
    display: initial;

    padding: 0px;
  }
`;

const VerticalRuleContainer = styled.div`
  display: none;

  ${down('lg')} {
    display: initial;
  }

  ${down('md')} {
    display: none;
  }
`;

const IconTierPointsContainer = styled.div`
  display: initial;

  ${down('md')} {
    display: flex;

    justify-content: center;
  }
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
  HorizontalRuleContainer,
  VerticalRuleContainer,
  IconTierPointsContainer,
};
