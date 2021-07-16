import React from 'react';
import { UnitsDTO } from '../../../MatchDTO';
import {
  BlankChampionSquareBorder,
  BlankSquare,
  Center,
  ChampionSquareBorder,
  ChampionSquareContainer,
  RarityCircle,
  RaritySvg,
  Square,
  StyledGrid,
  StyledImage,
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
        <ChampionSquareBorder primaryColour={getPrimaryColour(champion.rarity)}>
          <Square>
            <StyledImage
              src={`/images/5/champions/${champion.character_id}.png`}
            ></StyledImage>
          </Square>
        </ChampionSquareBorder>
      </ChampionSquareContainer>
    </>
  );
};

const BlankChampionSquare = () => {
  return (
    <BlankChampionSquareBorder>
      <BlankSquare />
    </BlankChampionSquareBorder>
  );
};

const Rarity = ({ tier, rarity }: RarityProps) => {
  return (
    <StyledGrid repeat={tier}>
      {Array.from(Array(tier), (element) => element).map((element, index) => (
        <Center key={index}>
          <RaritySvg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            viewBox="0 0 8 8"
          >
            <RarityCircle
              id="Star"
              cx="4"
              cy="4"
              r="4"
              fill={getPrimaryColour(rarity)}
            />
          </RaritySvg>
        </Center>
      ))}
    </StyledGrid>
  );
};

export { ChampionSquare, BlankChampionSquare };
