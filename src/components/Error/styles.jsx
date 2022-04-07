import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorImageContainer: {
    marginVertical: 10,
  },
  errorImage: {
    width: 200,
    height: 200,
  },
  errorTextContainer: {
    marginVertical: 10,
  },
  errorText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5C5C5C',
    textAlign: 'center',
  },
});

export default styles;
