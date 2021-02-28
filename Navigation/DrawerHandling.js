import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from "react-native-elements";

import ProfileScreen from "../views/Profile";
import CustomSidebarMenu from "./CustomSidebarMenu";
import BottomNavigator from "./BottomTabNavigator";
import Bookings from "../views/Bookings";
import RateJourney from "../views/RateJourney";
import Reports from "../views/Reports";

const Drawer = createDrawerNavigator();

const DrawerScreen = ({ route, navigation }) => (
  <>
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContentOptions={{
        activeTintColor: "#71D3E7",
        itemStyle: { marginVertical: 5 },
      }}
      drawerContent={(props) => <CustomSidebarMenu {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={BottomNavigator}
        options={{
          drawerIcon: ({ focused, size }) => <Icon name="home" />,
        }}
      />
      <Drawer.Screen
        name="View Bookings"
        component={Bookings}
        options={{
          drawerIcon: ({ focused, size }) => <Icon name="history" />,
        }}
      />
      {route.params.roleId == "owner" && (
        <Drawer.Screen
          name="Reports"
          component={Reports}
          options={{
            drawerIcon: ({ focused, size }) => <Icon name="book" />,
          }}
        />
      )}

      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ focused, size }) => <Icon name="face" />,
        }}
      />

      {/* <Drawer.Screen
        name="Rate BuzzBus"
        component={RateJourney}
        options={{
          drawerIcon: ({ focused, size }) => <Icon name="star" />,
        }}
      /> */}
    </Drawer.Navigator>
  </>
);

export default DrawerScreen;
