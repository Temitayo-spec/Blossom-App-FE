import React from 'react';
import { Box, Text } from '@/utils/theme';
import SafeAreaWrapper from '@/components/shared/safe-area-wrapper';

const HomeScreen = () => {
  return (
    <SafeAreaWrapper>
      <Box>
        <Text variant="textXl">Home Screen</Text>
      </Box>
    </SafeAreaWrapper>
  );
};

export default HomeScreen;
