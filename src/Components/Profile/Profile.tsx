import React from 'react';
import { Nav } from '../Nav/Nav';
import { Flex } from '../Styles/CommonStyles';

export const Profile = () => {
  return (
    <>
      <Flex>
        <Nav />
        <div style={{ margin: 'auto' }}>Profile</div>
      </Flex>
    </>
  );
};
