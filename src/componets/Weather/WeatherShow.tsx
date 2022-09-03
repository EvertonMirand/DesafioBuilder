import React, { useContext } from 'react';
import { ActivityIndicator } from 'react-native';

import { WeatherContext } from '../../context/WeatherContex';

import { BuilderText } from '../../styles/Styles';
import {
  WeatherContainer,
  WeatherTemperature
} from './Weather.style';

const WeatherShow: React.FC = () => {
  const { weather } = useContext(WeatherContext);

  return weather ? (
    <WeatherContainer>
      <BuilderText fontWeight="bold">
        Temperatura
      </BuilderText>
      <WeatherTemperature>
        {weather?.main.temp}º
      </WeatherTemperature>
    </WeatherContainer>
  ) : (
    <ActivityIndicator />
  );
};

export default WeatherShow;

