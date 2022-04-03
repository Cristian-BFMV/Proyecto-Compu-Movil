import { Image, Text, View } from 'react-native';
import Button from '../../../../components/Button';
import { styles } from './styles';

const TripCartDetails = () => {
  return (
    <View style={styles.tripCartDetailsContainer}>
      <View style={styles.tripCartDetailsHeader}>
        <Text style={styles.tripCartDetailsHeaderTitle}>Medellín - Ibague</Text>
        <Text style={styles.tripCartDetailsHeaderText}>25 de Noviembre</Text>
      </View>
      <View style={styles.tripCartDetailsInfoContainer}>
        <View style={styles.tripCartDetailsInfo}>
          <View>
            <Text style={styles.tripCartDetailsInfoTitle}>Viajero</Text>
            <Text style={styles.tripCartDetailsInfoText}>Cristian Camilo</Text>
          </View>
          <View>
            <Text style={styles.tripCartDetailsInfoTitle}>Hora de salida</Text>
            <Text style={styles.tripCartDetailsInfoText}>08:00 p.m.</Text>
          </View>
        </View>
        <View style={styles.tripCartDetailsInfo}>
          <View>
            <Text style={styles.tripCartDetailsInfoTitle}>Terminal</Text>
            <Text style={styles.tripCartDetailsInfoText}>Terminal del norte</Text>
          </View>
          <View>
            <Text style={styles.tripCartDetailsInfoTitle}>Precio</Text>
            <Text style={styles.tripCartDetailsInfoText}>$85.000</Text>
          </View>
        </View>
      </View>
      <View style={styles.tripCartDetailsImageContainer}>
        <Image
          source={require('../../../../assets/qr.png')}
          style={styles.tripCartDetailsImage}
        />
      </View>
      <View style={styles.tripCartDetailsButtonContainer}>
        <Button
          buttonText="Descargar QR"
          onPress={() => {
            console.log('Buenas');
          }}
        />
      </View>
    </View>
  );
};

export default TripCartDetails;
