import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FirstScreen from "../screens/FirstScreen";
import LoginScreen from "../screens/LoginScreen";
import RolleSelectionScreen from "../screens/RolleSelectionScreen";
import verificationScreen from "../screens/verificationScreen";
import DrawerScreen from "./DrawerHandling";
import BottomNavigator from "./BottomTabNavigator";

const RootStack = createStackNavigator();
const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="FirstScreen" component={FirstScreen} />
    <RootStack.Screen name="LoginScreen" component={LoginScreen} />
    <RootStack.Screen
      name="RolleSelectionScreen"
      component={RolleSelectionScreen}
    />
    <RootStack.Screen
      name="verificationScreen"
      component={verificationScreen}
    />
    <RootStack.Screen name="home" component={DrawerScreen} />
    <RootStack.Screen name="BottomNavigation" component={BottomNavigator} />
  </RootStack.Navigator>
);

export default RootStackScreen;
