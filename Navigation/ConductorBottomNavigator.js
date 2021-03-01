import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import home from "../views/Home";
import { Icon } from "react-native-elements";
import ConductorBookingStackNavigator from "./ConductorBookingStackNavigator";
import ProfileStackNavigator from "./ProfileStackNavigator";

const Tab = createBottomTabNavigator();

const ConductorBottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "View Bookings") {
            iconName = "book";
          } else if (route.name === "Reports") {
            iconName = "history";
          } else if (route.name === "Profile") {
            iconName = "face";
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#71D3E7",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={home} />
      <Tab.Screen
        name="View Bookings"
        component={ConductorBookingStackNavigator}
      />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
};

export default ConductorBottomNavigator;
