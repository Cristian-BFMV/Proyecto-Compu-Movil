import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tripSearchResultsContainer: {
    backgroundColor: '#fff',
    paddingTop: 20,
    flex: 1,
  },
  tripSearchResultsHeaderContainer: {
    paddingHorizontal: 20,
  },
  tripSearchResultsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  tripSearchResultsHeaderTitle: {
    fontSize: 22,
    color: '#5C5C5C',
  },
  tripSearchResultsCircle: {
    height: 18,
    width: 18,
    borderRadius: 18 / 2,
  },
  tripSearchResultsCityText: {
    fontSize: 18,
    color: '#5C5C5C',
    marginLeft: 5,
  },
  purpleCircle: {
    backgroundColor: '#AB95C3',
  },
  pinkCircle: {
    backgroundColor: '#F09DAF',
  },
  tripSearchResultsList: {
    marginTop: 20,
    backgroundColor: '#f6f6f6',
    flex: 1,
  },
  tripSearchResultsListTitle: {
    margin: 10,
  },
  tripSearchResultsListTitleText: {
    fontSize: 18,
    color: '#5C5C5C',
  },
  purpleText: {
    color: '#AB95C3',
  },
  pinkText: {
    color: '#F09DAF',
  },
});

export default styles;
