import React from 'react';
import { NextPage } from 'next';

import { Tweet } from 'react-twitter-widgets';

const Index: NextPage = () => {
  return (
    <>
      <p>This is Kokutwi.</p>
      <Tweet tweetId="841418541026877441" options={{ width: '200' }} />
    </>
  );
};

export default Index;
