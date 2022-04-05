import { Image, Text, View, ActivityIndicator } from 'react-native';
import Button from '../../../../components/Button';
import { styles } from './styles';
import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import firebase from '../../../../database/firebase';

const TripCartDetails = () => {
  const {params: {id}} = useRoute();

  const [tripDetail, setTripDetail] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(async() => {
    const docRef = firebase.doc(firebase.db, "owned-trips", id);
    setLoading(true);
    const docSnap = await firebase.getDoc(docRef);
    setTripDetail(docSnap.data());
    setLoading(false);
  }, []);
  
  return (
    <>
      {isLoading ? <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" color="#F09DAF" />
        </View> :
        <View style={styles.tripCartDetailsContainer}>
        <View style={styles.tripCartDetailsHeader}>
          <Text style={styles.tripCartDetailsHeaderTitle}>{tripDetail.from} - {tripDetail.to}</Text>
          <Text style={styles.tripCartDetailsHeaderText}>{tripDetail.tripDate}</Text>
        </View>
        <View style={styles.tripCartDetailsInfoContainer}>
          <View style={styles.tripCartDetailsInfo}>
            <View>
              <Text style={styles.tripCartDetailsInfoTitle}>Viajero</Text>
              <Text style={styles.tripCartDetailsInfoText}>Cristian Camilo</Text>
            </View>
            <View>
              <Text style={styles.tripCartDetailsInfoTitle}>Hora de salida</Text>
              <Text style={styles.tripCartDetailsInfoText}>{tripDetail.departureTime}</Text>
            </View>
          </View>
          <View style={styles.tripCartDetailsInfo}>
            <View>
              <Text style={styles.tripCartDetailsInfoTitle}>Terminal</Text>
              <Text style={styles.tripCartDetailsInfoText}>{tripDetail.terminal}</Text>
            </View>
            <View>
              <Text style={styles.tripCartDetailsInfoTitle}>Precio</Text>
              <Text style={styles.tripCartDetailsInfoText}>{tripDetail.price}</Text>
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
      </View>}
    </>
  );
};

export default TripCartDetails;
