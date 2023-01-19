import React from 'react';
//custom font
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import Welcome from './screens/Welcome';
import Home from './screens/Home';
import RootStack from './navigators/RootStack'

export default function App() {

  let [fontsLoaded] = useFonts({
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular": require('./assets/fonts/Lato-Regular.ttf')
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Home />
  );
}


