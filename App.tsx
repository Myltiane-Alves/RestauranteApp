import 'react-native-gesture-handler';
import { AppProvider } from './providers/app';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import { Screen, Screens } from './screens';
import { HomeScreen } from './screens/HomeScreen';
import { AuthScreen } from './screens/AuthScreen';
import { DrawerCustom } from './components/DrawerCustom';
import { ScheduleScreen } from './screens/SchedulesScreen';
import { AuthRegisterScreen } from './screens/AuthRegisterScreen';
import OrdersScreen from './screens/Oders';

const Drawer = createDrawerNavigator<typeof Screens>();

export default function App() {
  return (
    <NavigationContainer>
      <AppProvider>
        <Drawer.Navigator
           initialRouteName={Screen.Home}
           screenOptions={{
             drawerPosition: 'right',
             headerShown: false,
           }}
           drawerContent={(props) =>  <DrawerCustom {...props}  />}
        >
          <Drawer.Screen name={Screen.Home} component={HomeScreen}  />
          <Drawer.Screen name={Screen.Schedule} component={ScheduleScreen}  />
          <Drawer.Screen name={Screen.Auth} component={AuthScreen} />
          <Drawer.Screen name={Screen.Orders} component={OrdersScreen} />
          {/* <Drawer.Screen name={Screen.AuthRegister} component={AuthRegisterScreen} /> */}
        </Drawer.Navigator>    
      </AppProvider>
    </NavigationContainer>
  );
}

