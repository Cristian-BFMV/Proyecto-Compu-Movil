import { useRoute } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import Error from '../../../../components/Error';
import Modal from '../../../../components/Modal';
import TripCard from '../../../../components/TripCard';
import firebase from '../../../../database/firebase';
import styles from './styles';

const TripSearchResults = () => {
  const [trips, setTrips] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [createIsLoading, setCreateIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showError, setShowError] = useState(false);
  const {
    params: { fromCity, toCity },
  } = useRoute();

  useEffect(() => {
    const getTrips = async () => {
      setLoading(true);
      try {
        const tripsResponse = [];
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
      } catch (error) {
        setShowError(true);
      } finally {
        setLoading(false);
      }
    };

    getTrips();
  }, []);

  const buyTrip = useCallback(async trip => {
    setCreateIsLoading(true);
    await firebase.addDoc(firebase.collection(firebase.db, 'owned-trips'), {
      companyName: trip.companyName,
      departureTime: trip.departureTime,
      from: trip.from,
      price: trip.price,
      to: trip.to,
      tripDate: trip.tripDate,
      terminal: trip.terminal,
    });
    setCreateIsLoading(false);
    setShowModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
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
          <>
            {showError ? (
              <Error />
            ) : (
              <FlatList
                data={trips}
                renderItem={({ item }) => {
                  return (
                    <TripCard
                      {...item}
                      buttonText="Comprar"
                      buttonPress={() => buyTrip(item)}
                      isLoading={createIsLoading}
                    />
                  );
                }}
                keyExtractor={({ id }) => id}
              />
            )}
          </>
        )}
      </View>
      <Modal
        closeModal={closeModal}
        showModal={showModal}
        modalContent={{
          modalTitle: 'Compra exitosa',
          modalMessage: 'Se ha registrado tu compra',
        }}
      />
    </View>
  );
};

export default TripSearchResults;
