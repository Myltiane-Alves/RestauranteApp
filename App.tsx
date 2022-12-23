import 'react-native-gesture-handler';
import { AppProvider } from './providers/app';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import { Screen, Screens } from './screens';
import { HomeScreen } from './screens/HomeScreen';
import { AuthScreen } from './screens/AuthScreen';

const Drawer = createDrawerNavigator<typeof Screens>();

export default function App() {
  return (
    <NavigationContainer>
      <AppProvider>
        <Drawer.Navigator
           initialRouteName={Screen.Auth}
           screenOptions={{
             drawerPosition: 'right',
             headerShown: false,
           }}
        >
          {/* <Drawer.Screen name={Screen.Home} component={HomeScreen} /> */}
          <Drawer.Screen name={Screen.Auth} component={AuthScreen} />
        </Drawer.Navigator>    
      </AppProvider>
    </NavigationContainer>
  );
}

