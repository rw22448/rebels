import React from 'react';
import { UnitsDTO } from '../../MatchDTO';
import { ChampionSquare } from './ChampionSquare/ChampionSquare';

interface MatchChampionsProps {
  championList: UnitsDTO[];
}

const MatchChampions = ({ championList }: MatchChampionsProps) => {
  return (
    <>
      {championList.map((champion, index) => (
        <ChampionSquare champion={champion} key={index} />
      ))}
    </>
  );
};

export { MatchChampions };
