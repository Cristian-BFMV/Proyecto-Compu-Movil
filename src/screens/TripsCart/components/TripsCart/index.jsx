import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { FlatList, Text, View, ActivityIndicator } from 'react-native';
import TripCard from '../../../../components/TripCard';
import { styles } from './styles';
import firebase from '../../../../database/firebase';

const TripsCart = () => {
  const navigation = useNavigation();
  const [trips, setTrips] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const navigateToDetails = useCallback((id) => {
    navigation.navigate('TripCartDetails', {id});
  }, []);

  useEffect(() => {
    const getTrips = async () => {
      const tripsResponse = [];
      setLoading(true);
      const query = firebase.query(
        firebase.collection(firebase.db, 'owned-trips')
      );
      const querySnapshot = await firebase.getDocs(query);
      querySnapshot.forEach(doc => {
        tripsResponse.push({ id: doc.id, ...doc.data() });
      });
      setTrips(tripsResponse);
      setLoading(false);
    };

    getTrips();
  }, []);

  return (
    <View style={styles.tripsCartContainer}>
      <View style={styles.tripsCartHeader}>
        <Text style={styles.tripsCartHeaderTitle}>Mis tiquetes</Text>
      </View>
      {isLoading ?
        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" color="#F09DAF" />
        </View> :
        <View style={styles.tripsCartListContainer}>
        <FlatList
          data={trips}
          renderItem={({ item }) => (
            <TripCard
              {...item}
              buttonText="Ver Código QR"
              buttonPress={() => navigateToDetails(item.id)}
            />
          )}
          keyExtractor={({ id }) => id}
        />
      </View>}
    </View>
  );
};

export default TripsCart;
