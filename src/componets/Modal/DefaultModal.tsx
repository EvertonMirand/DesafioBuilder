import React from "react";
import { Modal, NativeSyntheticEvent } from "react-native";

export interface DefaultModalProps {
  visible?: boolean;
  onRequestClose?: (event: NativeSyntheticEvent<any>) => void;
  children: React.ReactNode;
}

const DefaultModal: React.FC<DefaultModalProps> = ({
  children,
  visible,
  onRequestClose,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}
    >
      {children}
    </Modal>
  );
};

export default DefaultModal;
