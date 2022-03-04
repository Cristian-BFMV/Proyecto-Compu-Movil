import { View, Text, Image, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';
import TripCard from '../HomeTripCard';

const recentTrips = [
  {
    id: '1',
    from: 'Medellín',
    to: 'Ibague',
    month: 'Enero',
    day: '24',
  },
  {
    id: '2',
    from: 'Medellín',
    to: 'Ibague',
    month: 'Enero',
    day: '24',
  },
  {
    id: '3',
    from: 'Medellín',
    to: 'Ibague',
    month: 'Enero',
    day: '24',
  },
  {
    id: '4',
    from: 'Medellín',
    to: 'Ibague',
    month: 'Enero',
    day: '24',
  },
];

const Home = () => {
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

      <View style={styles.homeRecentTrips}>
        <Text style={styles.homeSubTitle}>Mis Viajes Recientes</Text>
        <View style={styles.homeRecentTripsList}>
          <FlatList
            data={recentTrips}
            renderItem={({ item }) => <TripCard {...item} />}
            keyExtractor={item => item.id}
            horizontal
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
