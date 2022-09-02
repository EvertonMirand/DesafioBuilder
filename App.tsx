import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes/routes';
import { WeatherProvider } from './src/context/WeatherContex';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <WeatherProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </WeatherProvider>
    </>
  );
}
