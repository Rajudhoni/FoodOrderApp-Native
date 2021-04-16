import {StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from 'react';
import RestaurantsSreen from "./src/features/restaurants/screens/restaurants.screen";



const App = () => {
  
  return (
    <>
    <RestaurantsSreen />
    <ExpoStatusBar style="auto" />
    </>

  )
}

export default App
