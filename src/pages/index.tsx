import React from 'react';
import { NextPage } from 'next';
import { Tweet } from 'react-twitter-widgets';
import { Flex, Box, Heading, Spacer, Button } from '@chakra-ui/react';

const Index: NextPage = () => {
  return (
    <>
      <Flex>
        <Box p="2">
          <Heading size="md">Kokutwi</Heading>
        </Box>
        <Spacer />
        <Box>
          <Button colorScheme="teal" mr="4">
            Sign Up
          </Button>
          <Button colorScheme="teal">Log in</Button>
        </Box>
      </Flex>
      <Tweet tweetId="841418541026877441" options={{ width: '200' }} />
    </>
  );
};

export default Index;
