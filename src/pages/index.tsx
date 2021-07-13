import React, { useState } from 'react';
import { NextPage } from 'next';
import { Tweet } from 'react-twitter-widgets';
import { Flex, Box, Heading, Spacer, Button } from '@chakra-ui/react';
import useSWR from 'swr';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { getKokutweet } from 'domains/firebase/services/get-kokutweet';

const Index: NextPage = () => {
  const [calendarValue, onChangeCalendarValue] = useState(new Date());
  const [tweetId, setTweetId] = useState('202107/3/1410473327328522244');
  const { data: kokutweet } = useSWR(
    `public/v1/kokutwi/${tweetId}`,
    getKokutweet,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );

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
      <Calendar
        locale="ja-JP"
        calendarType="US"
        onChange={onChangeCalendarValue}
        value={calendarValue}
        onClickDay={() => {
          setTweetId('202108/1/1412241294554898433');
        }}
      />
      <p>{kokutweet?.eventDate.seconds}</p>
      <Tweet tweetId="1412241294554898433" options={{ width: '300' }} />
    </>
  );
};

export default Index;
