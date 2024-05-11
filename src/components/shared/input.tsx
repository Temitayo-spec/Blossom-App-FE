import theme, { Box, Text } from '@/utils/theme';
import { TextInput, TextInputProps } from 'react-native';

export interface UserProps extends IUser {
  confirmPassword?: string;
}

type InputProps = {
  label: string;
  error?: undefined;
  values: UserProps;
  setValues: React.Dispatch<React.SetStateAction<UserProps>>;
  register: any;
  tag: string;
} & TextInputProps;

const Input = ({
  label,
  error,
  values,
  setValues,
  register,
  tag,
}: InputProps) => {
  return (
    <Box
      style={{
        gap: 14,
      }}
    >
      <Text
        variant="textXs"
        fontFamily="Nunito_700Bold"
        textTransform="uppercase"
      >
        {label}
      </Text>
      <TextInput
        style={{
          height: 58,
          borderRadius: theme.borderRadii['rounded-7xl'],
          borderWidth: 1,
          borderColor: 'rgba(60, 60, 67, 0.60)',
          backgroundColor: '#FEFDFF',
          padding: 16,
        }}
        onChangeText={(newText) =>
          setValues({
            ...values,
            [tag]: newText,
          })
        }
        defaultValue={values[tag as keyof IUser]}
        {...register(tag)}
      />
    </Box>
  );
};

export default Input;
