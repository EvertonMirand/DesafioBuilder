import { colors } from './../../utils/colors';
import styled from 'styled-components/native';
import { BuilderText } from '../../styles/Styles';

export const WeatherContainer = styled.View`
  justify-content: center;
  align-items: center;

  padding: 20px;
`;

export const WeatherTemperature = styled.Text`
  color: ${colors.secondaryText};
  font-size: 40px;
  font-weight: bolder;
`;
