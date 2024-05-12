import React from 'react';
import { Box, Text } from '@/utils/theme';
import SafeAreaWrapper from '@/components/shared/safe-area-wrapper';
import useSWR from 'swr';
import { fetcher } from '@/services/config';

const HomeScreen = () => {
  const { data, isLoading } = useSWR('categories', fetcher);
  
  console.log(data);

  return (
    <SafeAreaWrapper>
      <Box>
        <Text variant="textXl">Home Screen</Text>
      </Box>
    </SafeAreaWrapper>
  );
};

export default HomeScreen;
