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
  RarityGrid,
  StyledImage,
  ItemsGrid,
  Item,
} from './ChampionSquare.styles';

interface ChampionSquareProps {
  champion: UnitsDTO;
}

interface RarityProps {
  tier: number;
  rarity: number;
}

interface ItemsProps {
  items: number[];
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
              alt="Champion icon"
            ></StyledImage>
          </Square>
        </ChampionSquareBorder>
        <Items items={champion.items} />
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
    <RarityGrid repeat={tier}>
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
    </RarityGrid>
  );
};

const Items = ({ items }: ItemsProps) => {
  return (
    <ItemsGrid repeat={items.length}>
      {items.map((item, index) => (
        <Item
          key={index}
          src={`/images/5/items/${item.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}.png`}
          alt="Item icon"
        />
      ))}
    </ItemsGrid>
  );
};

export { ChampionSquare, BlankChampionSquare };
