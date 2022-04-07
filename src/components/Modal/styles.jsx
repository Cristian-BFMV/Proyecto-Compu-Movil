import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modal: {
    width: Dimensions.get('window').width * 0.95,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalImageContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  modalImage: {
    width: 200,
    height: 200,
  },
  modalMessageContainer: {
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#F09DAF',
    textAlign: 'center',
  },
  modalText: {
    fontSize: 16,
    color: '#818181',
    textAlign: 'center',
  },
});

export default styles;
