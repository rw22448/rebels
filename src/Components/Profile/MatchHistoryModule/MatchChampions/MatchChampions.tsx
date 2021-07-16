import React, { useEffect, useState } from 'react';
import { UnitsDTO } from '../../MatchDTO';
import {
  BlankChampionSquare,
  ChampionSquare,
} from './ChampionSquare/ChampionSquare';
import { MatchChampionsContainer } from './MatchChampions.styles';

interface MatchChampionsProps {
  championList: UnitsDTO[];
}

interface RegularChampionListProps {
  championList: UnitsDTO[];
  blanks: number;
}

interface ExtendedChampionListProps {
  championList: UnitsDTO[];
  extras: number;
}

const returnChampionSquares = (championList: UnitsDTO[]) => {
  return championList.map((champion, index) => (
    <ChampionSquare champion={champion} key={index} />
  ));
};

const MatchChampions = ({ championList }: MatchChampionsProps) => {
  useEffect(() => {});

  return (
    <>
      <MatchChampionsContainer>
        {championList.length > 10 && (
          <ExtendedChampionList
            championList={championList}
            extras={championList.length - 9}
          />
        )}
        {championList.length <= 10 && (
          <RegularChampionList
            championList={championList}
            blanks={10 - championList.length}
          />
        )}
      </MatchChampionsContainer>
    </>
  );
};

const RegularChampionList = ({
  championList,
  blanks,
}: RegularChampionListProps) => {
  return (
    <>
      {returnChampionSquares(championList)}
      {Array.from(Array(blanks), (element) => element).map((element, index) => (
        <BlankChampionSquare key={index} />
      ))}
    </>
  );
};

const ExtendedChampionList = ({
  championList,
  extras,
}: ExtendedChampionListProps) => {
  useEffect(() => {
    setRegularChampions(championList.slice(0, 9));
    setExtendedChampions(championList.slice(9));
  }, [championList]);

  const [regularChampions, setRegularChampions] = useState<UnitsDTO[]>([]);
  const [extendedChampions, setExtendedChampions] = useState<UnitsDTO[]>([]);

  return (
    <>
      <>{returnChampionSquares(regularChampions)}</>
    </>
  );
};

export { MatchChampions };
