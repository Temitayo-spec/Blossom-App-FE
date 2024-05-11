import React, { useState } from 'react';
import theme, { Box, Text } from '@/utils/theme';
import { useNavigation } from '@react-navigation/native';
import { AuthScreenNavigationType } from '@/navigation/types';
import SafeAreaWrapper from '@/components/shared/safe-area-wrapper';
import Input from '@/components/shared/input';
import Button from '@/components/shared/button';
import { Pressable } from 'react-native';
import { useForm } from 'react-hook-form';
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

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const {
    register,
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
      const { email, password } = data;

      if ((!email && !email.includes('@')) || !password) {
        return;
      }

      const res = await axiosInstance.post('/users/login', {
        email,
        password,
      });

      const userResp = res.data;

      const token = userResp.token;
      console.log(userResp);

      const _user = userResp.user;

      if (userResp.success) {
        saveToken(BLOSSOM_TOKEN_NAME, token);

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
          <Input
            label="E-mail"
            value={values.email}
            register={register}
            tag="email"
            values={values}
            setValues={setValues}
          />
          <Input
            label="Password"
            value={values.email}
            register={register}
            tag="password"
            values={values}
            setValues={setValues}
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
              onPress={() => handleSubmit(onSubmit(values) as any)}
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
