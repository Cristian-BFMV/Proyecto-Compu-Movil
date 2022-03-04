import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tripCardContainer: {
    paddingVertical: 20,
    paddingHorizontal: 25,
    backgroundColor: '#F5F5F5',
    marginHorizontal: 7,
    borderRadius: 5,
  },
  tripCardHeader: {
    marginBottom: 10,
  },
  tripCardHeaderTitle: {
    fontSize: 20,
    color: '#5C5C5C',
  },
  tripCardHeaderSubTitle: {
    fontSize: 30,
    color: '#80C6D0',
    fontWeight: 'bold',
  },
  tripCardCityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  tripCardCircle: {
    height: 15,
    width: 15,
    borderRadius: 15 / 2,
  },
  tripCardCityText: {
    fontSize: 16,
    color: '#5C5C5C',
    marginLeft: 5,
  },
  purpleCircle: {
    backgroundColor: '#AB95C3',
  },
  pinkCircle: {
    backgroundColor: '#F09DAF',
  },
});

export default styles;
