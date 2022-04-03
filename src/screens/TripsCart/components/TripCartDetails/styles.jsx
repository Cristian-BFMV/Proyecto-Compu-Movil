import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  tripCartDetailsContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  tripCartDetailsHeader: {
    marginBottom: 10,
  },
  tripCartDetailsHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tripCartDetailsHeaderText: {
    fontSize: 15,
    textAlign: 'center',
    color: '#5C5C5C',
  },
  tripCartDetailsInfoContainer: {
    marginBottom: 10,
  },
  tripCartDetailsInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    marginHorizontal: 40,
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#C7C7C7',
    paddingBottom: 10,
  },
  tripCartDetailsInfoTitle: {
    fontSize: 16,
    color: '#5C5C5C',
  },
  tripCartDetailsInfoText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tripCartDetailsImageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tripCartDetailsImage: {
    width: 200,
    height: 200,
  },
  tripCartDetailsButtonContainer: {
    marginHorizontal: 20,
  },
});
