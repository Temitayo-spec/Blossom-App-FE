import React, { useState } from 'react';
import theme, { Box, Text } from '@/utils/theme';
import { useNavigation } from '@react-navigation/native';
import { AuthScreenNavigationType } from '@/navigation/types';
import SafeAreaWrapper from '@/components/shared/safe-area-wrapper';
import Input from '@/components/shared/input';
import Button from '@/components/shared/button';
import { Pressable } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import axiosInstance, {
  BLOSSOM_TOKEN_NAME,
  saveToken,
} from '@/services/config';
import Toast from 'react-native-toast-message';
import { useUserGlobalStore } from '@/store/useUserGlobalStore';

const Login = () => {
  const navigation = useNavigation<AuthScreenNavigationType<'Login'>>();

  const { user, updateUser } = useUserGlobalStore();

  const navigateToSignUpScreen = () => {
    navigation.navigate('SignUp');
  };

  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Omit<IUser, 'name'>>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: Omit<IUser, 'name'>) => {
    setLoading(true);
    try {
      const { email, password } = data;

      if ((!email && !email.includes('@')) || !password) {
        return;
      }

      const res = await axiosInstance.post('/users/login', {
        email: email.toLowerCase(),
        password,
      });

      const userResp = res.data;

      const _token = userResp.token;
      console.log(userResp);

      const _user = userResp.user;

      if (userResp.success) {
        saveToken(BLOSSOM_TOKEN_NAME, _token);
        axiosInstance.defaults.headers.common['Authorization'] =
          'Bearer ' + _token;

        updateUser({
          name: _user.name,
          email: _user.email,
        });
        setLoading(false);
        Toast.show({
          type: 'success',
          text1: 'Logged in Successfully!',
        });
        // navigateToSignInScreen();
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
      <Box px="5.5" pt="20">
        <Box width={226} mb="11">
          <Text variant="textXl" color="gray8" fontFamily="Nunito_700Bold">
            Welcome back!
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
                error={errors.password}
                secureTextEntry
              />
            )}
            name="password"
          />
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Pressable onPress={navigateToSignUpScreen}>
              <Text
                variant="textBase"
                color="primary"
                fontFamily="Nunito_700Bold"
                style={{
                  marginLeft: 'auto',
                }}
              >
                Create new Account
              </Text>
            </Pressable>
            <Pressable onPress={navigateToSignUpScreen}>
              <Text
                variant="textBase"
                color="primary"
                fontFamily="Nunito_700Bold"
                style={{
                  marginLeft: 'auto',
                }}
              >
                Forgot Password?
              </Text>
            </Pressable>
          </Box>
          <Box mt="4">
            <Button
              label="Log in"
              onPress={handleSubmit(onSubmit)}
              disabled={false}
              uppercase={true}
              loading={loading}
            />
          </Box>
        </Box>
      </Box>
    </SafeAreaWrapper>
  );
};

export default Login;
