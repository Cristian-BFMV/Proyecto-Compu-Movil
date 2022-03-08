import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

export default function ({
  value,
  onBlur,
  onChangeText,
  error,
  secureTextEntry = false,
}) {
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <TextInput
      style={[styles.input, isFocused && styles.focusInput, error && styles.errorInput]}
      onBlur={() => {
        onBlur();
        setIsFocused(false);
      }}
      onChangeText={value => onChangeText(value)}
      value={value}
      onFocus={() => setIsFocused(true)}
      secureTextEntry={secureTextEntry}
    />
  );
}
