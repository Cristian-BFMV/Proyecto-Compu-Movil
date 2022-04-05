import { AntDesign } from '@expo/vector-icons';
import { useCallback } from 'react';
import { Text, View } from 'react-native';
import Button from '../Button';
import styles from './styles';

const TripCard = ({
  companyName,
  tripDate,
  departureTime,
  price,
  buttonText,
  buttonPress,
  isLoading
}) => {
  const handleButtonPress = useCallback(() => {
    buttonPress();
  }, []);

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
      <Button buttonText={buttonText} onPress={handleButtonPress} isLoading={isLoading} />
    </View>
  );
};

export default TripCard;
