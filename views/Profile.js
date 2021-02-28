import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Button, Icon } from "react-native-elements";

import FocusAwareStatusBar from "../Navigation/FocusAwareStatusBar";

const Profile = ({ navigation }) => {
  // fetched
  const user = {
    userId: "U01",
    firstName: "Chiran",
    lastName: "Madushanka",
    NIC: "9645467V",
    mobileNo: "0772345678",
    email: "cmadusankahw@gmail.com",
    profilePic:
      "https://avatars.githubusercontent.com/u/44913467?s=460&u=2c1f1087edeaddc815c86576213e04e793aaf2a2&v=4",
  };

  const SCREEN_WIDTH = Dimensions.get("window").width;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* header */}
      <View style={styles.floatingView}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.openDrawer()}
        >
          <Icon name="menu" size={30} color="#ffffff" />
        </TouchableOpacity>
        <Text style={styles.headerText}> Profile </Text>
      </View>

      <View style={{ flex: 1 }}>
        <FocusAwareStatusBar barStyle="light-content" hidden={false} />
        <View style={styles.statusBar} />
        <ScrollView style={{ flex: 1 }}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              source={{
                uri: user.profilePic,
              }}
              style={styles.profileIcon}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginTop: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                flex: 1,
                fontSize: 26,
                color: "#007acc",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {user.firstName + " " + user.lastName}
            </Text>
          </View>

          <View style={{ flex: 1, marginTop: 30 }}>
            <Text
              style={{
                flex: 1,
                fontSize: 18,
                color: "rgba(216, 121, 112, 1)",
                marginLeft: 50,
                fontWeight: "bold",
              }}
            >
              Profile Info
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                marginTop: 20,
                marginHorizontal: 15,
              }}
            >
              <View style={{ flex: 2 }}>
                <Text style={styles.infoTypeLabel}>First Name</Text>
                <Text style={styles.infoTypeLabel}>Last Name</Text>
                <Text style={styles.infoTypeLabel}>NIC</Text>
                <Text style={styles.infoTypeLabel}>Mobile No</Text>
                <Text style={styles.infoTypeLabel}>Email</Text>
              </View>
              <View style={{ flex: 3, marginLeft: 20 }}>
                <Text style={styles.infoAnswerLabel}>{user.firstName}</Text>
                <Text style={styles.infoAnswerLabel}>{user.lastName}</Text>
                <Text style={styles.infoAnswerLabel}>{user.NIC}</Text>
                <Text style={styles.infoAnswerLabel}>{user.mobileNo}</Text>
                <Text style={styles.infoAnswerLabel}>{user.email}</Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 1, alignItems: "center", marginTop: 20 }}>
            <Button
              containerStyle={{ textAlign: "center" }}
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
              buttonStyle={styles.button}
              title="Edit Profile"
              titleStyle={styles.buttonTitle}
              onPress={() => navigation.navigate("EditProfile")}
              activeOpacity={0.5}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    height: 10,
  },
  floatingView: {
    width: Dimensions.get("window").width,
    height: 60,
    borderRadius: 5,
    backgroundColor: "#71D3E7",
    position: "relative",
    alignContent: "center",
    top: 0,
    left: 0,
  },
  icon: {
    left: -(Dimensions.get("window").width / 2 - 30),
    top: 15,
  },
  headerText: {
    left: 55,
    fontSize: 20,
    fontWeight: "bold",
    top: -15,
    color: "#ffffff",
  },
  profileIcon: {
    resizeMode: "center",
    width: 120,
    height: 120,
    borderColor: "rgb(33,33,33)",
    borderRadius: 999,
    alignSelf: "center",
    marginTop: 25,
    marginBottom: 5,
  },
  button: {
    height: 40,
    width: 180,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#71C3E7",
  },
  buttonTitle: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
  },
  nameHeader: {
    color: "white",
    fontSize: 22,
    textAlign: "center",
  },
  infoTypeLabel: {
    fontSize: 17,
    textAlign: "right",
    color: "rgba(126,123,138,1)",
    paddingBottom: 10,
  },
  infoAnswerLabel: {
    fontSize: 17,
    color: "#007acc",
    paddingBottom: 10,
  },
});

export default Profile;
