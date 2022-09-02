import { api } from '../../service/api';
import { useCallback } from 'react';
import { Weather } from '../../Models/Weather/Weather';

const key = '2bd7d950208a07f353418c91b701e8e0';

export const useWeather = () => {
  const getWeather = useCallback(
    (lat: number, long: number) => {
      return api.post<Weather>(
        `/weather?lat=${lat.toFixed(2)}&lon=${long.toFixed(
          2
        )}&appid=${key}`
      );
    },
    []
  );

  return { getWeather };
};
