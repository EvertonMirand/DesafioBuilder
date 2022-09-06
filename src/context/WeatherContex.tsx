import React, {
  createContext,
  useCallback,
  useState,
  useEffect
} from 'react';
import * as Location from 'expo-location';
import { Weather } from '../Models/Weather/Weather';
import { useWeather } from '../hooks/service/useWeather';

export interface WeatherContextValues {
  getNewLocation: () => Promise<void>;
  address?: Location.LocationGeocodedAddress;
  weather?: Weather;
  error?: string;
  onClearError: () => void;
  loading?: boolean;
}

const defaultValue: WeatherContextValues = {
  getNewLocation: () => Promise.reject<void>(),
  onClearError() {},
  loading: false,
  error: ''
};

export const WeatherContext =
  createContext<WeatherContextValues>(defaultValue);

export const WeatherProvider: React.FC<{
  children: React.ReactNode;
  weatherContextValues?: WeatherContextValues;
}> = ({
  children,
  weatherContextValues = defaultValue
}) => {
  const [loading, setLoading] = useState(
    weatherContextValues.loading
  );
  const [location, setLocation] =
    useState<Location.LocationObject>();

  const [weather, setWeather] = useState<
    Weather | undefined
  >(weatherContextValues.weather);
  const [error, setError] = useState<string | undefined>(
    weatherContextValues.error
  );
  const [address, setAddress] = useState<
    Location.LocationGeocodedAddress | undefined
  >(weatherContextValues.address);

  const { getWeather } = useWeather();

  const getNewLocation = useCallback(async () => {
    setLoading(true);
    setError(undefined);
    const { status } =
      await Location.requestForegroundPermissionsAsync();
    if (status !== Location.PermissionStatus.GRANTED) {
      setError(
        'Permissão para acessar a localização negada'
      );
      setLoading(false);
      return;
    }

    Location.getCurrentPositionAsync()
      .then((loc) => {
        setLocation(loc);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    (async () => {
      await getNewLocation();
    })();
  }, [getNewLocation]);

  useEffect(() => {
    if (location) {
      setLoading(true);
      Location.reverseGeocodeAsync(location.coords)
        .then((value) => {
          setAddress(value[0]);
        })
        .catch((err) => {
          setError(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [location]);

  useEffect(() => {
    if (location) {
      setLoading(true);
      const { coords } = location;
      getWeather(coords.latitude, coords.longitude)
        .then(({ data }) => {
          setWeather(data);
        })
        .catch((err) => {
          setError(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [location]);

  const onClearError = () => setError(undefined);

  const values: WeatherContextValues = {
    getNewLocation,
    address,
    weather,
    error,
    onClearError,
    loading
  };

  return (
    <WeatherContext.Provider value={values}>
      {children}
    </WeatherContext.Provider>
  );
};
