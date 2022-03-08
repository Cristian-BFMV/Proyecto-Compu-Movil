import { View, Text, FlatList } from 'react-native';
import TripSearchResultCard from '../TripSearchResultCard';
import styles from './styles';

const tripReusults = [
  {
    id: '1',
    companyName: 'Nombre de la empresa',
    tripDate: '25 de Noviembre',
    departureTime: '08:00 p.m.',
    price: '$85.000',
  },
  {
    id: '2',
    companyName: 'Nombre de la empresa',
    tripDate: '25 de Noviembre',
    departureTime: '08:00 p.m.',
    price: '$85.000',
  },
  {
    id: '3',
    companyName: 'Nombre de la empresa',
    tripDate: '25 de Noviembre',
    departureTime: '08:00 p.m.',
    price: '$85.000',
  },
];

const TripSearchResults = () => {
  return (
    <View style={styles.tripSearchResultsContainer}>
      <View style={styles.tripSearchResultsHeaderContainer}>
        <View style={styles.tripSearchResultsHeaderTitle}>Ciudad de Origen</View>
        <View style={styles.tripSearchResultsHeader}>
          <View style={[styles.tripSearchResultsCircle, styles.purpleCircle]}></View>
          <Text style={[styles.tripSearchResultsCityText, styles.purpleText]}>
            Medellín
          </Text>
        </View>
        <View style={styles.tripSearchResultsHeaderTitle}>Ciudad de Destino</View>
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
        <FlatList
          data={tripReusults}
          renderItem={({ item }) => {
            return <TripSearchResultCard {...item} />;
          }}
          keyExtractor={({ id }) => id}
        />
      </View>
    </View>
  );
};

export default TripSearchResults;
