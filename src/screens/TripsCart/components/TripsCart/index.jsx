import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { FlatList, Text, View } from 'react-native';
import TripCard from '../../../../components/TripCard';
import { styles } from './styles';

const tripsCart = [
  {
    id: '1',
    companyName: 'Company name 1',
    tripDate: '25 de Noviembre',
    departureTime: '08:00 p.m.',
    price: '$ 50.000',
  },
  {
    id: '2',
    companyName: 'Company name 2',
    tripDate: '25 de Noviembre',
    departureTime: '08:00 p.m.',
    price: '$ 50.000',
  },
];

const TripsCart = () => {
  const navigation = useNavigation();

  const navigateToDetails = useCallback(() => {
    navigation.navigate('TripCartDetails');
  }, []);

  return (
    <View style={styles.tripsCartContainer}>
      <View style={styles.tripsCartHeader}>
        <Text style={styles.tripsCartHeaderTitle}>Mis tiquetes</Text>
      </View>
      <View style={styles.tripsCartListContainer}>
        <FlatList
          data={tripsCart}
          renderItem={({ item }) => (
            <TripCard
              {...item}
              buttonText="Ver Código QR"
              buttonPress={navigateToDetails}
            />
          )}
          keyExtractor={({ id }) => id}
        />
      </View>
    </View>
  );
};

export default TripsCart;
