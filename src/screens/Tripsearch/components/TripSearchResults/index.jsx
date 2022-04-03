import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import TripCard from '../../../../components/TripCard';
import firebase from '../../../../database/firebase';
import styles from './styles';

const TripSearchResults = () => {
  const [trips, setTrips] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const {
    params: { fromCity, toCity },
  } = useRoute();

  useEffect(() => {
    const getTrips = async () => {
      const tripsResponse = [];
      setLoading(true);
      const query = firebase.query(
        firebase.collection(firebase.db, 'trips'),
        firebase.where('from', '==', fromCity),
        firebase.where('to', '==', toCity)
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
    <View style={styles.tripSearchResultsContainer}>
      <View style={styles.tripSearchResultsHeaderContainer}>
        <View>
          <Text style={styles.tripSearchResultsHeaderTitle}>Ciudad de Origen</Text>
        </View>
        <View style={styles.tripSearchResultsHeader}>
          <View style={[styles.tripSearchResultsCircle, styles.purpleCircle]}></View>
          <Text style={[styles.tripSearchResultsCityText, styles.purpleText]}>
            {fromCity}
          </Text>
        </View>
        <View>
          <Text style={styles.tripSearchResultsHeaderTitle}>Ciudad de Destino</Text>
        </View>
        <View style={styles.tripSearchResultsHeader}>
          <View style={[styles.tripSearchResultsCircle, styles.pinkCircle]}></View>
          <Text style={[styles.tripSearchResultsCityText, styles.pinkText]}>
            {toCity}
          </Text>
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
              return <TripCard {...item} buttonText="Comprar" />;
            }}
            keyExtractor={({ id }) => id}
          />
        )}
      </View>
    </View>
  );
};

export default TripSearchResults;
