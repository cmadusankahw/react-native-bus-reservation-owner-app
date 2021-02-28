import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootStackScreen from "./Navigation/RootStackScreen";
import { LogBox } from "react-native";
LogBox.ignoreAllLogs();

export default function App() {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
}
