import { createBox, createText, createTheme } from '@shopify/restyle';
import { colors } from './colors';
import { textVariants } from './text-variants';
import Animated from 'react-native-reanimated';

const theme = createTheme({
  colors: colors,
  spacing: {
    '1': 4,
    '2': 8,
    '2.5': 10,
    '3': 12,
    '3.5': 14,
    '4': 16,
    '5': 20,
    '5.5': 22,
    '6': 24,
    '8': 26,
    '10': 40,
    '11': 44,
    '12': 48,
    '13': 56,
    '13.5': 60,
    '14': 64,
    '15': 72,
    '16': 80,
    '17': 88,
    '18': 96,
    '20': 102,
    auto: 'auto',
  },
  borderRadii: {
    none: 0,
    rounded: 4,
    'rounded-xl': 8,
    'rounded-2xl': 10,
    'rounded-3xl': 12,
    'rounded-4xl': 16,
    'rounded-5xl': 20,
    'rounded-7xl': 28,
  },
  textVariants,
});

export type Theme = typeof theme;

export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const AnimatedText = Animated.createAnimatedComponent(Text);
export const AnimatedBox = Animated.createAnimatedComponent(Box);

export default theme;
