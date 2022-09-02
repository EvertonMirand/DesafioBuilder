import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DefaultModal from '../componets/Modal/DefaultModal';

import { WeatherContext } from '../context/WeatherContex';

const HomePage: React.FC = () => {
  const {
    address,
    error,
    getNewLocation,
    weather,
    onClearError,
    loading
  } = useContext(WeatherContext);

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff'
        }}
      >
        <View>
          <Text>Temperatura</Text>
          <Text>{weather?.main.temp}º</Text>
        </View>
        <View>
          <Text>Endereço</Text>
          <Text>
            {address?.name}, {address?.district} -{' '}
            {address?.subregion}, {address?.region}
          </Text>
          <Text>{address?.country}</Text>
        </View>
        <TouchableOpacity
          onPress={getNewLocation}
          disabled={loading}
        >
          <Text>Atualizar</Text>
        </TouchableOpacity>
      </View>
      <DefaultModal
        visible={!!error}
        onRequestClose={onClearError}
      >
        <Text>Erro ao obter a localização</Text>
        <Text>{error}</Text>
      </DefaultModal>
    </>
  );
};

export default HomePage;
