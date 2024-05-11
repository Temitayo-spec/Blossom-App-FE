import { Box, Text } from '@/utils/theme';
import { Pressable } from 'react-native';
import LoadingSpinner from './spinner';

type ButtonProps = {
  label: string;
  onPress: () => void;
  onLongPress?: () => void;
  disabled?: boolean;
  uppercase?: boolean;
  loading?: boolean;
};

const Button = ({
  label,
  onPress,
  onLongPress,
  disabled,
  uppercase,
  loading,
}: ButtonProps) => {
  return (
    <Pressable onPress={onPress} onLongPress={onLongPress} disabled={disabled}>
      <Box
        bg={disabled ? 'gray800' : 'primary'}
        borderRadius="rounded-7xl"
        px="15"
        py="3.5"
        height={58}
        alignItems="center"
        justifyContent="center"
      >
        {loading ? (
          <LoadingSpinner />
        ) : (
          <Text
            variant="textXs"
            color="white"
            fontWeight="700"
            fontFamily="Nunito_700Bold"
            textTransform={uppercase ? 'uppercase' : 'none'}
          >
            {label}
          </Text>
        )}
      </Box>
    </Pressable>
  );
};

export default Button;
