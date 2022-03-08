import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    borderColor: '#a1a1a1',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 10,
    height: 40,
  },
  focusInput: {
    borderColor: '#33691E',
  },
  errorInput: {
    borderColor: '#ff3e3e',
  },
  errorMessage: {
    color: '#ff3e3e',
    fontSize: 16,
  },
});

export default styles;
