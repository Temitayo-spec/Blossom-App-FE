import React from 'react';
import { Box, Text } from '@/utils/theme';
import { Button } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import {
  AuthScreenNavigationType,
  AuthStackParamList,
} from '@/navigation/types';
import SafeAreaWrapper from '@/components/shared/safe-area-wrapper';

const Login = () => {
  const navigation = useNavigation<AuthScreenNavigationType<'Login'>>();

  const navigateToSignUpScreen = () => {
    navigation.navigate('SignUp');
  };
  return (
    <SafeAreaWrapper>
      <Box>
        <Text variant="textXl">Sign in Screen</Text>
        <Button
          title="Navigate to Signup Screen"
          onPress={navigateToSignUpScreen}
        />
      </Box>
    </SafeAreaWrapper>
  );
};

export default Login;
