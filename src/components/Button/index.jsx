import React from 'react';
import { ActivityIndicator, Text, TouchableHighlight } from 'react-native';
import styles from './styles';

export default function ({ buttonText, isLoading = false, isInput = false, onPress }) {
  return (
    <React.Fragment>
      {isLoading ? (
        <ActivityIndicator size="large" color="#33691E" />
      ) : (
        <TouchableHighlight
          style={isInput ? styles.input : styles.button}
          onPress={onPress}
          underlayColor="#f6f6f6"
          activeOpacity={0.9}
        >
          <Text style={isInput ? styles.inputText : styles.buttonText}>{buttonText}</Text>
        </TouchableHighlight>
      )}
    </React.Fragment>
  );
}
