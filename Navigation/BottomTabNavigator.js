import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import BookingStackNavigator from "./BookingStackNavigator";
import ProfileStackNavigator from "./ProfileStackNavigator";
import ReportsStackNavigator from "./ReportsStackNavigator";
import HomeStackNavigator from "./HomeStackNavigator";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
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
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="View Bookings" component={BookingStackNavigator} />
      <Tab.Screen name="Reports" component={ReportsStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
