import { colors } from './../../utils/colors';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const ModalContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #00000090;
`;

export const AlertContainer = styled.View`
  background-color: ${colors.modalBackground};
  border-radius: 5px;
  padding: 20px;
  align-items: center;
`;
