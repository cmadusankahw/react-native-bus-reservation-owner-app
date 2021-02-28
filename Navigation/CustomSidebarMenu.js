// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from "react-native";
import { Icon } from "react-native-elements";

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

const CustomSidebarMenu = (props) => {
  // fetched
  const user = {
    userId: "U01",
    firstName: "Chiran",
    userType: "owner",
    profilePic:
      "https://avatars.githubusercontent.com/u/44913467?s=460&u=2c1f1087edeaddc815c86576213e04e793aaf2a2&v=4",
  };

  const aboutURL = "";

  const signOut = () => {};

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/*Top Large Image */}
      <Image
        source={{ uri: user.profilePic }}
        style={styles.sideMenuProfileIcon}
      />
      <Text style={styles.userName}>{user.firstName}</Text>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />

        <View style={styles.customItem}>
          <Text
            onPress={() => {
              signOut;
            }}
          >
            Log out
          </Text>
        </View>

        <DrawerItem
          label="About BuzzBus"
          onPress={() => Linking.openURL(aboutURL)}
        />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: "center",
    width: 100,
    height: 100,
    borderColor: "rgb(33,33,33)",
    borderRadius: 999,
    alignSelf: "center",
    marginTop: 25,
    marginBottom: 5,
  },
  userName: {
    marginBottom: 20,
    textAlign: "center",
    fontSize: 18,
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 8,
  },
  customItem: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default CustomSidebarMenu;
