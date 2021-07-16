import styled from 'styled-components';
import { ThemeObject } from '../../../../Styles/Themes/Themes';

interface RarityGridProps {
  repeat: number;
}

interface ColourProp {
  primaryColour: string;
}

const ChampionSquareContainer = styled.div`
  display: grid;
  grid-template-rows: 8px 40px 12px;
  gap: 4px;
`;

const BlankChampionSquareBorder = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${(object: ThemeObject) =>
    object.theme.secondaryContainerColour};
  border-radius: 4px;

  position: relative;
  top: 12px;
`;

const BlankSquare = styled.div`
  width: 36px;
  height: 36px;
  background-color: ${(object: ThemeObject) => object.theme.containerColour};
  border-radius: 3px;

  position: relative;
  top: 2px;
  left: 2px;
`;

const ChampionSquareBorder = styled(BlankChampionSquareBorder)`
  position: initial;

  background-color: ${({ primaryColour }: ColourProp) => primaryColour};
`;

const Square = styled(BlankSquare)``;

const StyledImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 3px;
`;

const Center = styled.span`
  /* margin: auto; */
  height: 8px;
`;

const StyledGrid = styled.div`
  display: grid;

  margin: 0px auto;
`;

const RarityGrid = styled(StyledGrid)`
  grid-template-columns: ${({ repeat }: RarityGridProps) =>
    `repeat(${repeat}, 8px)`};
  gap: 2px;
`;

const RaritySvg = styled.svg`
  position: relative;
  bottom: 8px;
`;

const RarityCircle = styled.circle``;

const ItemsGrid = styled(StyledGrid)`
  grid-template-columns: ${({ repeat }: RarityGridProps) =>
    `repeat(${repeat}, 12px)`};
  gap: 2px;
`;

const Item = styled.img`
  width: 12px;
  height: 12px;
`;

export {
  ChampionSquareContainer,
  BlankChampionSquareBorder,
  BlankSquare,
  ChampionSquareBorder,
  Square,
  StyledImage,
  Center,
  RarityGrid,
  RaritySvg,
  RarityCircle,
  ItemsGrid,
  Item,
};
