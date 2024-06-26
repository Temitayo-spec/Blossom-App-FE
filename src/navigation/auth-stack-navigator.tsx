import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackParamList } from './types';
import WelcomeScreen from '@/screens/welcome-screen';
import SignUp from '@/screens/signup-screen';
import Login from '@/screens/login-screen';

const Stack = createNativeStackNavigator<AuthStackParamList>();
const AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={() => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
