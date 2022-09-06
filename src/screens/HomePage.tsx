import React, { useContext } from 'react';

import Address from '../componets/Address/Address';

import ErrorModal from '../componets/Modal/ErrorModal';
import BuilderButton from '../componets/shared/BuilderButton';
import WeatherShow from '../componets/Weather/WeatherShow';

import { WeatherContext } from '../context/WeatherContex';
import { BottomSpace } from '../styles/Styles';

import { HomePageContainer } from './HomePage.styled';

const HomePage: React.FC = () => {
  const {
    error,
    getNewLocation,

    onClearError,
    loading
  } = useContext(WeatherContext);

  return (
    <>
      <HomePageContainer>
        <WeatherShow />
        <Address />
        <BottomSpace size={30} />
        <BuilderButton
          onPress={getNewLocation}
          disabled={loading}
          text="Atualizar"
        />
      </HomePageContainer>
      <ErrorModal
        error={error}
        onPressClose={onClearError}
        onRequestClose={onClearError}
        title="Erro ao obter a localização"
      />
    </>
  );
};

export default HomePage;
