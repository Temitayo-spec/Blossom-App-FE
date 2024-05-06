import { NavigationContainer } from '@react-navigation/native';
import AuthStackNavigator from './auth-stack-navigator';
import AppStackNavigator from './app-stack-navigator';

const Navigation = () => {
  return (
    <NavigationContainer>
      {/* <AuthStackNavigator /> */}
      <AppStackNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
