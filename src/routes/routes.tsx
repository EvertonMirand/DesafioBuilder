import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../screens/HomePage';
const { Navigator, Screen } = createStackNavigator();

export const Routes = () => {
  return (
    <Navigator>
      <Screen name="Home" component={HomePage} />
    </Navigator>
  );
};
