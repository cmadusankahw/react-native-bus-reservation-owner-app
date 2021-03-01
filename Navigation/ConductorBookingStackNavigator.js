import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Bookings from "../views/Bookings";
import BookingDetailsConductor from "../views/BookingDetailsConductor";

const Stack = createStackNavigator();

const ConductorBookingStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Bookings" component={Bookings} />
      <Stack.Screen name="BookingDetails" component={BookingDetailsConductor} />
    </Stack.Navigator>
  );
};

export default ConductorBookingStackNavigator;
