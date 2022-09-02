import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screens/HomePage';
const { Navigator, Screen } = createBottomTabNavigator();

export const Routes = () => {
  return (
    <Navigator>
      <Screen name="Home" component={HomePage} />
    </Navigator>
  );
};
