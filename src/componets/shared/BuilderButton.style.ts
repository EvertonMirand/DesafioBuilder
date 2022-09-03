import { colors } from './../../utils/colors';
import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  padding: 10px;
  background-color: ${colors.buttonBackground};
  border-radius: 5px;
  align-self: center;
  text-align: center;
`;
