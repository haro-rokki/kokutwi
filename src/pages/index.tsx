import React from 'react';
import { NextPage } from 'next';
import { Tweet } from 'react-twitter-widgets';
import { Flex, Box, Heading, Spacer, Button } from '@chakra-ui/react';
import useSWR from 'swr';
import { getKokutweet } from 'domains/firebase/services/get-kokutweet';

const Index: NextPage = () => {
  const { data: kokutweet } = useSWR(
    'public/v1/kokutwi/202107/3/1410473327328522244',
    getKokutweet,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );
  console.log(kokutweet);

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
      <Tweet tweetId="1414874714015555588" options={{ width: '300' }} />
    </>
  );
};

export default Index;
