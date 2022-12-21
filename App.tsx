import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppProvider } from './index';
import {Screen, Screens } from './screens';
import { HomeScreen } from './screens/HomeScreen';

const Drawer = createDrawerNavigator<typeof Screens>();

export default function App() {
  return (
    <NavigationContainer>
      <AppProvider>
        <HomeScreen />
      </AppProvider>
    </NavigationContainer>
  );
}

