import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../views/Profile";
import EditProfile from "../views/EditProfile";

const Stack = createStackNavigator();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
