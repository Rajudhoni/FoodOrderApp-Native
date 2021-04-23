import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import RestaurantsSreen from "./src/features/restaurants/screens/restaurants.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { useFonts as useOwald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

// import AppLoading from 'expo-app-loading';

const App = () => {
  let [oswaldLoaded] = useOwald({
    Oswald_400Regular,
  });

  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if(!oswaldLoaded || !latoLoaded){
    return null
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsSreen />
        
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
};

export default App;
