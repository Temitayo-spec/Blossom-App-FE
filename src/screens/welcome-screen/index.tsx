import React from 'react';
import { Box, Text } from '@/utils/theme';
import { useNavigation } from '@react-navigation/native';
import { AuthScreenNavigationType } from '@/navigation/types';
import { Button } from 'react-native';
import SafeAreaWrapper from '@/components/shared/safe-area-wrapper';

const WelcomeScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<'Welcome'>>();

  const navigateToLoginScreen = () => {
    navigation.navigate('Login');
  };
  const navigateToSignUpScreen = () => {
    navigation.navigate('SignUp');
  };
  return (
    <SafeAreaWrapper>
      <Box>
        <Text variant="textBase">Welcome Screen</Text>
        <Button
          title="Navigate to Login Screen"
          onPress={navigateToLoginScreen}
        />
        <Button
          title="Navigate to Signup Screen"
          onPress={navigateToSignUpScreen}
        />
      </Box>
    </SafeAreaWrapper>
  );
};

export default WelcomeScreen;
