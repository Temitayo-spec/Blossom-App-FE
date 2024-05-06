import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootBottomTabParamList } from './types';
import HomeStackNavigator from './home-stack-navigator';
import CompletedScreen from '@/screens/completed-screen';
import TodayScreen from '@/screens/today-screen';
import CategoriesScreen from '@/screens/categories-screen';
import CategoriesStackNavigator from './categories-stack-navigator';
import Icons from '@/components/shared/icons';
import theme from '@/utils/theme';

const Tab = createBottomTabNavigator<RootBottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: theme.colors.gray550,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={() => ({
          title: 'Home',
          tabBarIcon: ({ color }) => <Icons color={color} name="home" />,
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="Completed"
        component={CompletedScreen}
        options={() => ({
          title: 'Completed',
          tabBarIcon: ({ color }) => <Icons color={color} name="completed" />,
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="Today"
        component={TodayScreen}
        options={() => ({
          title: 'Today',
          tabBarIcon: ({ color }) => <Icons color={color} name="calendar" />,
          headerShown: false,
        })}
      />

      <Tab.Screen
        name="CategoriesStack"
        component={CategoriesStackNavigator}
        options={() => ({
          title: 'Categories',
          tabBarIcon: ({ color }) => <Icons color={color} name="categories" />,
          headerShown: false,
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
