import React from 'react';
import { Nav } from '../Nav/Nav';
import { Flex } from '../Styles/CommonStyles';

interface PageProps {
  content: React.ReactNode;
  nav?: boolean;
}

const Page = ({ content, nav }: PageProps) => {
  return (
    <Flex>
      {nav && <Nav />}
      {content}
    </Flex>
  );
};

export { Page };
