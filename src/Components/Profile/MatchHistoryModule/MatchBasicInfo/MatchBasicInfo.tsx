import React from 'react';
import {
  BasicInfoText,
  CircleDivider,
  ColouredPlacementBar,
  DatePlayed,
  PlacementNumber,
  TextFlex,
} from './MatchBasicInfo.styles';

interface MatchBasicInfoProps {
  placement: number;
  gameType: String;
  gameLength: number;
  datePlayed: number;
}

const formatGameLength = (gameLength: number): String => {
  let gameLengthToWhole = Math.floor(gameLength);
  let minutes = Math.floor(gameLengthToWhole / 60);
  let seconds = gameLengthToWhole % 60;
  let secondsToString = `${seconds}`;

  if (seconds < 10) secondsToString = `0${seconds}`;

  return `${minutes}:${secondsToString}`;
};

const calculateMatchDateTimeAgo = (dateTime: number): string => {
  const currentDate = new Date();
  const date = new Date(dateTime);

  const differenceInDays = Math.floor(
    (currentDate.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (differenceInDays === 0) {
    return 'Today';
  }

  if (differenceInDays === 1) {
    return '1 day';
  }

  if (differenceInDays >= 60) {
    return Math.floor(differenceInDays / 30) + ' months';
  }

  if (differenceInDays > 30) {
    return '1 month';
  }

  if (differenceInDays >= 14) {
    let weeks = Math.floor(differenceInDays / 7);
    return `${weeks} weeks`;
  }

  if (differenceInDays >= 7) {
    return '1 week';
  }

  return `${differenceInDays} days`;
};

const MatchBasicInfo = ({
  placement,
  gameType,
  gameLength,
  datePlayed,
}: MatchBasicInfoProps) => {
  return (
    <>
      <ColouredPlacementBar placement={placement} />
      <PlacementNumber placement={placement}>#{placement}</PlacementNumber>
      <CircleDivider />
      <TextFlex>
        <BasicInfoText>{gameType}</BasicInfoText>
        <BasicInfoText>{formatGameLength(gameLength)}</BasicInfoText>
        <DatePlayed>{calculateMatchDateTimeAgo(datePlayed)}</DatePlayed>
      </TextFlex>
    </>
  );
};

export { MatchBasicInfo };
