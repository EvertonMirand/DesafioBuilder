import React from 'react';
import { Modal, NativeSyntheticEvent } from 'react-native';
import {
  AlertContainer,
  ModalContainer
} from './AlertModal.style';

export interface AlertModalProps {
  visible?: boolean;
  onRequestClose?: (
    event: NativeSyntheticEvent<any>
  ) => void;
  children: React.ReactNode;
}

const AlertModal: React.FC<AlertModalProps> = ({
  children,
  visible,
  onRequestClose
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}
    >
      <ModalContainer>
        <AlertContainer>{children}</AlertContainer>
      </ModalContainer>
    </Modal>
  );
};

export default AlertModal;
