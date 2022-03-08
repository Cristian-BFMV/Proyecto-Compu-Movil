import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import TripSearchResultCard from '../TripSearchResultCard';
import styles from './styles';
import { useEffect, useState } from 'react';
import firebase from '../../database/firebase';

const TripSearchResults = () => {
  const [trips, setTrips] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const getTrips = async () => {
      const trips = [];
      setLoading(true);
      const querySnapshot = await firebase.getDocs(
        firebase.collection(firebase.db, 'trips')
      );
      querySnapshot.forEach(doc => {
        trips.push({ id: doc.id, ...doc.data() });
      });
      setTrips(trips);
      setLoading(false);
    };

    getTrips();
  }, []);
  return (
    <View style={styles.tripSearchResultsContainer}>
      <View style={styles.tripSearchResultsHeaderContainer}>
        <View>
          <Text style={styles.tripSearchResultsHeaderTitle}>Ciudad de Origen</Text>
        </View>
        <View style={styles.tripSearchResultsHeader}>
          <View style={[styles.tripSearchResultsCircle, styles.purpleCircle]}></View>
          <Text style={[styles.tripSearchResultsCityText, styles.purpleText]}>
            Medellín
          </Text>
        </View>
        <View>
          <Text style={styles.tripSearchResultsHeaderTitle}>Ciudad de Destino</Text>
        </View>
        <View style={styles.tripSearchResultsHeader}>
          <View style={[styles.tripSearchResultsCircle, styles.pinkCircle]}></View>
          <Text style={[styles.tripSearchResultsCityText, styles.pinkText]}>Ibague</Text>
        </View>
      </View>
      <View style={styles.tripSearchResultsList}>
        <View style={styles.tripSearchResultsListTitle}>
          <Text style={styles.tripSearchResultsListTitleText}>
            Resultados de la busqueda
          </Text>
        </View>
        {isLoading ? (
          <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center' }}>
            <ActivityIndicator size="large" color="#F09DAF" />
          </View>
        ) : (
          <FlatList
            data={trips}
            renderItem={({ item }) => {
              return <TripSearchResultCard {...item} />;
            }}
            keyExtractor={({ id }) => id}
          />
        )}
      </View>
    </View>
  );
};

export default TripSearchResults;
