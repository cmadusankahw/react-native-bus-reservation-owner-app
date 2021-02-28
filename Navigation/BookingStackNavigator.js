import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Bookings from "../views/Bookings";
import BookingInfo from "../views/BookingInfo";
import SeatBooking from "../views/SeatBooking";
import BookingPayment from "../views/BookingPayment";

const Stack = createStackNavigator();

const BookingStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Bookings" component={Bookings} />
      <Stack.Screen name="BookingInfo" component={BookingInfo} />
      <Stack.Screen name="BookingPayment" component={BookingPayment} />
      <Stack.Screen name="SeatBooking" component={SeatBooking} />
    </Stack.Navigator>
  );
};

export default BookingStackNavigator;
