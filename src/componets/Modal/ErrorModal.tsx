import React from 'react';
import {
  GestureResponderEvent,
  NativeSyntheticEvent,
  View
} from 'react-native';
import {
  BottomSpace,
  BuilderText
} from '../../styles/Styles';
import { colors } from '../../utils/colors';
import BuilderButton from '../shared/BuilderButton';
import AlertModal from './AlertModal';

export interface ErrorModalProps {
  error?: string;
  onRequestClose?: (
    event: NativeSyntheticEvent<any>
  ) => void;
  title?: string;
  onPressClose: (event: GestureResponderEvent) => void;
}

const ErrorModal: React.FC<ErrorModalProps> = ({
  error,
  onRequestClose,
  title = '',
  onPressClose
}) => {
  return (
    <AlertModal
      visible={!!error}
      onRequestClose={onRequestClose}
    >
      <BuilderText color={colors.errorText}>
        {title}
      </BuilderText>
      <BottomSpace size={10} />
      <BuilderText>{error}</BuilderText>
      <BottomSpace size={20} />
      <BuilderButton onPress={onPressClose} text="Fechar" />
    </AlertModal>
  );
};

export default ErrorModal;
