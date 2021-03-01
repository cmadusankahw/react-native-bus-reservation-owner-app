import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ViewReport from "../views/ViewReport";
import Reports from "../views/Reports";

const Stack = createStackNavigator();

const ReportsStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Reports" component={Reports} />
      <Stack.Screen name="ViewReport" component={ViewReport} />
    </Stack.Navigator>
  );
};

export default ReportsStackNavigator;
