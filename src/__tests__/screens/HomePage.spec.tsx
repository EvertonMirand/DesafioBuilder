import { act, render } from '@testing-library/react-native';

import HomePage from '../../screens/HomePage';
import { mocked } from 'jest-mock';
import { useWeather } from '../../hooks/service/useWeather';
import { AxiosResponse } from 'axios';
import { weatherMockTest } from '../../__mocks__/WeatherMock';
import { Weather } from '../../Models/Weather/Weather';
import { WeatherProvider } from '../../context/WeatherContex';
import * as Location from 'expo-location';

jest.mock('../../hooks/service/useWeather');
jest.mock('expo-location');

const Providers: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <WeatherProvider>{children}</WeatherProvider>;
};

const getInitialData = () => {
  const useWeatherMocked = mocked(useWeather);
  const requestForegroundPermissionsAsyncMocked = mocked(
    Location.requestForegroundPermissionsAsync
  );
  requestForegroundPermissionsAsyncMocked.mockReturnValue(
    Promise.resolve({
      status: Location.PermissionStatus.GRANTED
    } as Location.LocationPermissionResponse)
  );
  const getCurrentPositionAsyncMocked = mocked(
    Location.getCurrentPositionAsync
  );
  getCurrentPositionAsyncMocked.mockReturnValue(
    Promise.resolve({
      coords: {
        accuracy: 1,
        altitude: 1,
        altitudeAccuracy: 1,
        heading: 2,
        latitude: 2.1223,
        longitude: 2.322,
        speed: 1
      },
      timestamp: 2
    })
  );

  useWeatherMocked.mockReturnValue({
    getWeather: () =>
      Promise.resolve({
        data: weatherMockTest
      }) as Promise<AxiosResponse<Weather, any>>
  });

  const reverseGeocodeAsyncMocked = mocked(
    Location.reverseGeocodeAsync
  );
  reverseGeocodeAsyncMocked.mockReturnValue(
    Promise.resolve([
      {
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
      }
    ])
  );
};

describe('HomePage', () => {
  it('should show values correctly', async () => {
    getInitialData();
    const { rerender, debug, getByTestId } = render(
      <HomePage />,
      {
        wrapper: Providers
      }
    );

    await act(async () => {
      rerender(<HomePage />);
    });
    debug();
    const elementWeather = getByTestId('weather-temp');
    expect(elementWeather.props.children).toStrictEqual([
      298.48,
      'º'
    ]);
    const elementAddress = getByTestId(
      'address-description'
    );
    expect(elementAddress).toBeTruthy();
  });
});
