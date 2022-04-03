import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  homeHeader: {
    marginVertical: 10,
  },
  homeSubTitle: {
    fontSize: 18,
    color: '#5c5c5c',
  },
  homeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5c5c5c',
  },

  homeLandingImage: {
    width: '100%',
    height: 200,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  homeLandingTextContainer: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  homeLandingText: {
    fontSize: 15,
    color: '#5C5C5C',
    marginRight: 5,
  },
  homeRecentTrips: {
    marginVertical: 20,
  },
  homeRecentTripsList: {
    marginVertical: 20,
  },
});
