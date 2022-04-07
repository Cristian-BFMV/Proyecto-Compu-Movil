import { FontAwesome } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';
import Error from '../../components/Error';
import TripCard from '../../components/HomeTripCard';
import firebase from '../../database/firebase';
import { styles } from './styles';

const Home = () => {
  const [trips, setTrips] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const getTrips = async () => {
      try {
        const tripsResponse = [];
        setLoading(true);
        const query = firebase.query(firebase.collection(firebase.db, 'owned-trips'));
        const querySnapshot = await firebase.getDocs(query);
        querySnapshot.forEach(doc => {
          const trip = doc.data();
          const day = trip.tripDate.slice(0, trip.tripDate.indexOf(' '));
          const month = trip.tripDate.slice(trip.tripDate.indexOf(' ') + 1);
          tripsResponse.push({
            id: doc.id,
            ...trip,
            day,
            month,
          });
        });
        setTrips(tripsResponse);
      } catch (error) {
        setShowError(true);
      } finally {
        setLoading(false);
      }
    };

    getTrips();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.homeHeader}>
        <Text style={styles.homeSubTitle}>¡Buenas noches,</Text>
        <Text style={styles.homeTitle}>Cristian Camilo!</Text>
      </View>
      <View style={styles.homeLanding}>
        <View>
          <Image
            style={styles.homeLandingImage}
            source={require('../../assets/home.png')}
          />
        </View>
        <View style={styles.homeLandingTextContainer}>
          <Text style={styles.homeLandingText}>
            Busca los mejores precios para tu viaje
          </Text>
          <FontAwesome name="search" size={20} color="#5C5C5C" />
        </View>
      </View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          {showError ? (
            <Error />
          ) : (
            <View style={styles.homeRecentTrips}>
              <Text style={styles.homeSubTitle}>Mis Viajes Recientes</Text>
              <View style={styles.homeRecentTripsList}>
                <FlatList
                  data={trips}
                  renderItem={({ item }) => <TripCard {...item} />}
                  keyExtractor={item => item.id}
                  horizontal
                />
              </View>
            </View>
          )}
        </>
      )}
    </View>
  );
};

export default Home;
