import React from 'react';
import { Modal, NativeSyntheticEvent } from 'react-native';
import { Container } from './DefaultModal.style';

export interface DefaultModalProps {
  visible?: boolean;
  onRequestClose?: (
    event: NativeSyntheticEvent<any>
  ) => void;
  children: React.ReactNode;
}

const DefaultModal: React.FC<DefaultModalProps> = ({
  children,
  visible,
  onRequestClose
}) => {
  return (
    <Container
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}
    >
      {children}
    </Container>
  );
};

export default DefaultModal;
