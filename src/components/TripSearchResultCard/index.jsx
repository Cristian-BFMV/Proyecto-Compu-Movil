import { View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';
import Button from '../Button';

const TripSearchResultCard = ({ companyName, tripDate, departureTime, price }) => {
  return (
    <View style={styles.tripResultCard}>
      <View style={styles.tripResultCardHeader}>
        <Text style={styles.tripResultCardHeaderTitle}>{companyName}</Text>
      </View>
      <View style={styles.tripResultCardBody}>
        <View style={styles.tripResultCardSchedulePrice}>
          <View style={styles.tripResultCardIcon}>
            <AntDesign name="calendar" size={20} color="#AB95C3" />
            <Text style={styles.tripResultCardIconText}>{tripDate}</Text>
          </View>
          <Text style={styles.tripResultCardPriceText}>{price}</Text>
        </View>
        <View style={styles.tripResultCardIcon}>
          <AntDesign name="clockcircleo" size={20} color="#AB95C3" />
          <Text style={styles.tripResultCardIconText}>{departureTime}</Text>
        </View>
      </View>
      <Button
        buttonText="Comprar"
        onPress={() => {
          console.log('Buenas');
        }}
      />
    </View>
  );
};

export default TripSearchResultCard;
