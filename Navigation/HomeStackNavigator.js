import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../views/Home";
import ChatView from "../views/ChatView";
import ChatLogin from "../views/ChatLogin";
import ChatSignUp from "../views/ChatSignUp";

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Chat" component={ChatView} />
      <Stack.Screen name="ChatLogin" component={ChatLogin} />
      <Stack.Screen name="CreateAccount" component={ChatSignUp} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
