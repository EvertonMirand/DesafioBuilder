import React, { Fragment, useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { WeatherContext } from '../../context/WeatherContex';
import {
  BottomSpace,
  BuilderText
} from '../../styles/Styles';

const Address: React.FC = () => {
  const { address } = useContext(WeatherContext);

  return address ? (
    <View>
      <BuilderText fontSize={20} fontWeight="bold">
        Endereço
      </BuilderText>
      <BottomSpace size={10} />
      <BuilderText>
        {address?.name}, {address?.district} -{' '}
        {address?.subregion}, {address?.region}
      </BuilderText>
      <BuilderText>{address?.country}</BuilderText>
    </View>
  ) : (
    <ActivityIndicator />
  );
};

export default Address;

