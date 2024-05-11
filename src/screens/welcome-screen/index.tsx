import React from 'react';
import { Box, Text } from '@/utils/theme';
import { useNavigation } from '@react-navigation/native';
import { AuthScreenNavigationType } from '@/navigation/types';
import { Image } from 'react-native';
import SafeAreaWrapper from '@/components/shared/safe-area-wrapper';
import { LinearGradient } from 'expo-linear-gradient';
import Button from '@/components/shared/button';

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
      <LinearGradient
        colors={[
          '#ffffff',
          '#fef8ff',
          '#fcecff',
          '#f8daff',
          '#fae2ff',
          '#fae2ff',
          '#ffffff',
        ]}
        style={{ flex: 1 }}
      >
        <Box flex={1} justifyContent="center">
          <Box alignItems="center" mb="3.5">
            <Image source={require('@/public/blossom_logo.png')} />
            <Box width={190} mb="3.5">
              <Text
                variant="textXl"
                textAlign="center"
                fontFamily="Nunito_700Bold"
              >
                Do you want to be more productive?
              </Text>
            </Box>
            <Button
              label="Start your journey"
              onPress={navigateToSignUpScreen}
            />
          </Box>
          <Text
            variant="textXs"
            textAlign="center"
            fontFamily="Nunito_700Bold"
            color="gray5"
          >
            26,789 registered today
          </Text>
        </Box>
      </LinearGradient>
    </SafeAreaWrapper>
  );
};

export default WelcomeScreen;
