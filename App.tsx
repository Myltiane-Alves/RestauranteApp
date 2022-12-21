import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppProvider } from './index';
import {Screen, Screens } from './screens';
import { HomeScreen } from './screens/HomeScreen';
import AboutComponent from './components/AboutComponent';
import Header from './components/Header';
import MenuComponent from './components/MenuComponent';
import Cardapio from './components/Cardapio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Fragment } from 'react';

const Drawer = createDrawerNavigator<typeof Screens>();

export default function App() {
  return (
    <Fragment>
        <Header />
        <AboutComponent />
        <Cardapio />
        <MenuComponent />
        <Contact />
        <Footer />
    </Fragment>
  );
}

