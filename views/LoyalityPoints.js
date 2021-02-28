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

const LoyalityPoints = ({ navigation }) => {
  // fetched
  const loyalityPoints = {
    userId: "Chiran",
    points: 23,
    amount: 1123,
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
        <Text style={styles.headerText}> Loyality Points </Text>
      </View>

      <View style={{ flex: 1 }}>
        <FocusAwareStatusBar barStyle="light-content" hidden={false} />

        <ScrollView style={{ flex: 1 }}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              source={require("../assets/loyality_points.png")}
              style={styles.loyalIcon}
            />
          </View>
          <View
            style={{
              flex: 1,
              marginTop: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.titleText}>My Loyality Points</Text>
            <Text
              style={{
                flex: 1,
                fontSize: 26,
                color: "#007acc",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {loyalityPoints.points} Points = {loyalityPoints.amount} LKR
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: "center", marginTop: 20 }}>
            <Button
              containerStyle={{ textAlign: "center" }}
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
              buttonStyle={styles.button}
              title="Use my Points"
              titleStyle={styles.buttonTitle}
              onPress={() => console.log("clicked")}
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
  titleText: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 30,
  },
  loyalIcon: {
    resizeMode: "center",
    width: 180,
    height: 180,
    borderColor: "rgb(33,33,33)",
    borderRadius: 999,
    alignSelf: "center",
    marginTop: 40,
    marginBottom: 5,
  },
  button: {
    height: 40,
    width: 180,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
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
});

export default LoyalityPoints;
