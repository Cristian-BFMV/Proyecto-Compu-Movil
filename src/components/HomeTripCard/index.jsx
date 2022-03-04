import { View, Text } from 'react-native';
import styles from './styles';

const TripCard = ({ from, to, month, day }) => {
  return (
    <View style={styles.tripCardContainer}>
      <View style={styles.tripCardHeader}>
        <Text style={styles.tripCardHeaderTitle}>{month}</Text>
        <Text style={styles.tripCardHeaderSubTitle}>{day}</Text>
      </View>
      <View style={styles.tripCardCityContainer}>
        <View style={[styles.tripCardCircle, styles.purpleCircle]}></View>
        <Text style={styles.tripCardCityText}>{from}</Text>
      </View>
      <View style={styles.tripCardCityContainer}>
        <View style={[styles.tripCardCircle, styles.pinkCircle]}></View>
        <Text style={styles.tripCardCityText}>{to}</Text>
      </View>
    </View>
  );
};

export default TripCard;
