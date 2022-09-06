import { render } from '@testing-library/react-native';
import React from 'react';
import Address from '../../componets/Address/Address';
import { WeatherProvider } from '../../context/WeatherContex';

const Providers: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <WeatherProvider
      weatherContextValues={{
        address: {
          name: 'Brasolia',
          district: 'teste',
          subregion: 'teste 2',
          region: 'teste3',
          city: 'a',
          country: 'Brazil',
          postalCode: '712892',
          street: '',
          streetNumber: 'aa',
          isoCountryCode: '',
          timezone: ''
        },
        getNewLocation: () => Promise.resolve(),
        onClearError() {}
      }}
    >
      {children}
    </WeatherProvider>
  );
};

describe('Address', () => {
  it('should render', () => {
    const { getByTestId } = render(<Address />, {
      wrapper: Providers
    });

    const element = getByTestId('address-description');
    expect(element).toBeTruthy();
  });
});
