import React from 'react';
import { Box, Spinner } from '@chakra-ui/react';

export const Loading: React.VFC = () => {
  return (
    <Box textAlign="center">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="lg"
      />
    </Box>
  );
};
