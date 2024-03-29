import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Bookings from "../views/Bookings";
import BookingDetails from "../views/BookingDetails";

const Stack = createStackNavigator();

const BookingStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Bookings" component={Bookings} />
      <Stack.Screen name="BookingDetails" component={BookingDetails} />
    </Stack.Navigator>
  );
};

export default BookingStackNavigator;
