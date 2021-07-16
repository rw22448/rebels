import React from 'react';
import { UnitsDTO } from '../../../MatchDTO';
import {
  Center,
  ChampionSquareContainer,
  StyledGrid,
} from './ChampionSquare.styles';

interface ChampionSquareProps {
  champion: UnitsDTO;
}

interface RarityProps {
  tier: number;
  rarity: number;
}

const getPrimaryColour = (rarity: number): string => {
  switch (rarity) {
    case 0:
      return '#C4C4C4';
    case 1:
      return '#00C989';
    case 2:
      return '#009EE2';
    case 3:
      return '#ad4895';
    case 4:
      return '#ffd445';
    default:
      return '#C4C4C4';
  }
};

const ChampionSquare = ({ champion }: ChampionSquareProps) => {
  return (
    <>
      <ChampionSquareContainer>
        <Rarity tier={champion.tier} rarity={champion.rarity} />
      </ChampionSquareContainer>
    </>
  );
};

const Rarity = ({ tier, rarity }: RarityProps) => {
  return (
    <StyledGrid repeat={tier}>
      {Array.from(Array(tier), (element) => element).map((element, index) => (
        <Center key={index}>
          <svg
            style={{ position: 'relative', bottom: '8px' }}
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            viewBox="0 0 8 8"
          >
            <circle
              id="Star"
              cx="4"
              cy="4"
              r="4"
              fill={getPrimaryColour(rarity)}
            />
          </svg>
        </Center>
      ))}
    </StyledGrid>
  );
};

export { ChampionSquare };
