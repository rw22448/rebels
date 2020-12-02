import React from 'react';

interface RebelTFTIconProps {
  size: 1 | 2 | 3;
}

const RebelTFTIcon = ({ size }: RebelTFTIconProps) => {
  const widthAndHeight = size * 24 + 'px';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={widthAndHeight}
      height={widthAndHeight}
      viewBox="0 0 35 35"
      fill="#FFFFFF"
    >
      <path d="M4.1 17.8c-.3-.1-.2-.4 0-.5 2.4-.3 9.9-1.4 10.6-2.6.9-1.4 2.4-8.4 2.8-11 0-.2.3-.2.4 0 .4 2.5 1.8 9.8 3 11 1.4 1.4 8.1 2.5 9.9 2.8.5.1.4.4 0 .5-1.9.3-8.4 1.9-9.7 3.3-1 1.1-3.3 10-3.3 10 0 .1-.1.1-.1 0 0 0-1.9-8.6-2.8-10-1.1-1.7-8.3-2.9-10.8-3.5z" />
    </svg>
  );
};

export { RebelTFTIcon };
