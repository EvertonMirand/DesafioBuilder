import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import DefaultModal from './src/componets/Modal/DefaultModal';

export default function App() {
  const [location, setLocation] =
    useState<Location.LocationObject>();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } =
        await Location.requestForegroundPermissionsAsync();
      if (status !== Location.PermissionStatus.GRANTED) {
        setShowModal(true);
        return;
      }

      Location.getCurrentPositionAsync()
        .then((loc) => {
          setLocation(loc);
        })
        .catch((err) => {
          console.log(err);
          setShowModal(true);
        });
    })();
  }, []);

  useEffect(() => {
    if (location) {
      Location.reverseGeocodeAsync(location.coords)
        .then((value) => {
          console.log(value);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [location]);

  return (
    <View style={styles.container}>
      <DefaultModal
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <Text>Erro ao obter a localização</Text>
        <Text>
          Verifica se o seu GPS está ativo ou se você
          permitiu o uso do GPS.
        </Text>
      </DefaultModal>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
