import { Image, Modal, Text, View } from 'react-native';
import Button from '../../components/Button';
import styles from './styles';

export default function ({ showModal, closeModal, modalContent }) {
  const { modalTitle, modalMessage } = modalContent;
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={showModal}
      onRequestClose={closeModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          <View style={styles.modalImageContainer}>
            <Image
              source={require('../../assets/Confirm.png')}
              style={styles.modalImage}
            />
          </View>
          <View style={styles.modalMessageContainer}>
            <Text style={styles.modalTitle}>{modalTitle}</Text>
            <Text style={styles.modalText}>{modalMessage}</Text>
          </View>
          <Button buttonText="Aceptar" onPress={closeModal} />
        </View>
      </View>
    </Modal>
  );
}
