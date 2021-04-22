import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import RestaurantsSreen from "./src/features/restaurants/screens/restaurants.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

const App = () => {
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
