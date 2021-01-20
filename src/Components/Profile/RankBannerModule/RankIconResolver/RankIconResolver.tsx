import React from 'react';
import { Tier } from '../RankBannerModule';
import { IconContainer, StyledRankIcon } from './RankIconResolver.styles';

interface RankIconResolverProps {
  tier: Tier;
}

const rankIconPath = {
  IRON: '/images/rank-iron.png',
  BRONZE: '/images/rank-bronze.png',
  SILVER: '/images/rank-silver.png',
  GOLD: '/images/rank-gold.png',
  PLATINUM: '/images/rank-platinum.png',
  DIAMOND: '/images/rank-diamond.png',
  MASTER: '/images/rank-master.png',
  GRANDMASTER: '/images/rank-grandmaster.png',
  CHALLENGER: '/images/rank-challenger.png',
  UNRANKED: '/images/rank-unranked.png',
};

const RankIconResolver = ({ tier }: RankIconResolverProps) => {
  return (
    <>
      <IconContainer>
        <StyledRankIcon src={rankIconPath[tier]} />
      </IconContainer>
    </>
  );
};

export { RankIconResolver };
