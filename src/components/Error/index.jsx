import { Image, Text, View } from 'react-native';
import styles from './styles';

const Error = () => {
  return (
    <View style={styles.errorContainer}>
      <View style={styles.errorImageContainer}>
        <Image source={require('../../assets/Error.png')} style={styles.errorImage} />
      </View>
      <View style={styles.errorTextContainer}>
        <Text style={styles.errorText}>
          Lo sentimos, ha ocurrido un problema inesperado
        </Text>
      </View>
    </View>
  );
};

export default Error;
