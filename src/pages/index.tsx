import React, { useState } from 'react';
import { NextPage } from 'next';
import { Tweet } from 'react-twitter-widgets';
import { Flex, Box, Heading, Spacer, Button } from '@chakra-ui/react';
import useSWR from 'swr';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';

import { getKokutweets } from 'domains/firebase/services/get-kokutweet';

const Index: NextPage = () => {
  const now = new Date();
  const [calendarValue, onChangeCalendarValue] = useState(now);
  const [tweetIdPath, setTweetIdPath] = useState(
    `${format(now, 'yyyyMM')}/${format(now, 'dd')}`,
  );
  const { data: kokutweets } = useSWR(
    `public/v1/kokutwi/${tweetIdPath}`,
    getKokutweets,
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
        onClickDay={(value) => {
          const date = new Date(value);
          setTweetIdPath(`${format(date, 'yyyyMM')}/${format(date, 'dd')}`);
        }}
      />
      {kokutweets &&
        kokutweets.map((kokutweet) => (
          <Tweet
            key={kokutweet}
            tweetId={kokutweet}
            options={{ width: '300' }}
          />
        ))}
    </>
  );
};

export default Index;
