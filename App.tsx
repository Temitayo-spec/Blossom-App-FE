import Navigation from '@/navigation';
import { useUserGlobalStore } from '@/store/useUserGlobalStore';
import theme from '@/utils/theme';
import { ThemeProvider } from '@shopify/restyle';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { Nunito_700Bold, useFonts } from '@expo-google-fonts/nunito';

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Nunito_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Navigation />
        <Toast />
        <StatusBar translucent />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
