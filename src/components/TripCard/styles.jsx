import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tripResultCard: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    margin: 15,
  },
  tripResultCardHeader: {
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
    paddingVertical: 5,
  },
  tripResultCardHeaderTitle: {
    fontSize: 20,
    color: '#5C5C5C',
    textAlign: 'center',
  },
  tripResultCardBody: {
    marginVertical: 10,
  },
  tripResultCardSchedulePrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tripResultCardIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  tripResultCardIconText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#5C5C5C',
  },
  tripResultCardPriceText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#80C6D0',
  },
});

export default styles;
