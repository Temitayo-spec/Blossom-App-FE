import React, { useState } from 'react';
import theme, { Box, Text } from '@/utils/theme';
import SafeAreaWrapper from '@/components/shared/safe-area-wrapper';
import { useNavigation } from '@react-navigation/native';
import { AuthScreenNavigationType } from '@/navigation/types';
import { Pressable, TextInput } from 'react-native';
import Input from '@/components/shared/input';
import Button from '@/components/shared/button';
import { Controller, useForm } from 'react-hook-form';
import Toast from 'react-native-toast-message';
import axiosInstance from '@/services/config';

const SignUp = () => {
  const navigation = useNavigation<AuthScreenNavigationType<'SignUp'>>();

  const navigateToSignInScreen = () => {
    navigation.navigate('Login');
  };

  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: IUser) => {
    setLoading(true);
    try {
      const { email, password, name } = data;
      console.log(email, password, name);

      if ((!email && !email.includes('@')) || !name || !password) {
        return;
      }

      const res = await axiosInstance.post('/users/create', {
        email: email.toLowerCase(),
        name,
        password,
      });

      const userResp = res.data;

      if (userResp.success) {
        setLoading(false);
        Toast.show({
          type: 'success',
          text1: 'Account created Successfully!',
        });
        navigateToSignInScreen();
      }
    } catch (error: any) {
      setLoading(false);
      Toast.show({
        type: 'error',
        text1: error.response.data.message,
      });
      console.log(error.response.data.message);
    }
  };
  return (
    <SafeAreaWrapper>
      <Box px="5.5" pt="13">
        <Box width={226} mb="8">
          <Text variant="textXl" color="gray8" fontFamily="Nunito_700Bold">
            Welcome to Blossom!
          </Text>
          <Text variant="textXl" color="gray8" fontFamily="Nunito_700Bold">
            Your journey starts here
          </Text>
        </Box>

        <Box
          style={{
            gap: theme.spacing[8],
          }}
        >
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Name"
                error={errors.name}
              />
            )}
            name="name"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="E-mail"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Email"
                error={errors.email}
              />
            )}
            name="email"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Password"
                error={errors.name}
                secureTextEntry
              />
            )}
            name="password"
          />

          <Pressable onPress={navigateToSignInScreen}>
            <Text
              variant="textBase"
              color="primary"
              fontFamily="Nunito_700Bold"
              style={{
                marginLeft: 'auto',
              }}
              onPress={navigateToSignInScreen}
            >
              Already have an account? Sign in
            </Text>
          </Pressable>
          <Box mt="4">
            <Button
              label="Register"
              disabled={false}
              uppercase={true}
              onPress={handleSubmit(onSubmit)}
              loading={loading}
            />
          </Box>
        </Box>
      </Box>
    </SafeAreaWrapper>
  );
};

export default SignUp;
