import React, { Component, useState } from "react";
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
import { Button, Icon, Card } from "react-native-elements";

import FocusAwareStatusBar from "../Navigation/FocusAwareStatusBar";

const Bookings = ({ navigation }) => {
  // fetched
  const busRoutes = [
    {
      routeNo: "R1",
      start: "Matara",
      end: "Colombo",
    },
    {
      routeNo: "R2",
      start: "Matara",
      end: "Galle",
    },
    {
      routeNo: "R3",
      start: "Colombo",
      end: "Galle",
    },
    {
      routeNo: "R4",
      start: "Kataragama",
      end: "Colombo",
    },
    {
      routeNo: "R5",
      start: "Kany",
      end: "Colombo",
    },
    {
      routeNo: "R6",
      start: "Mannarama",
      end: "Colombo",
    },
    {
      routeNo: "R7",
      start: "Badulla",
      end: "Colombo",
    },
  ];

  const SCREEN_WIDTH = Dimensions.get("window").width;

  const createBooking = () => {
    // booking creation logic here
    // local storage logic here
    console.log("Booking Created Step 01");
  };

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
        <Text style={styles.headerText}> Select Your Route </Text>
      </View>

      <View style={{ flex: 3 }}>
        <FocusAwareStatusBar barStyle="light-content" hidden={false} />
        <ScrollView>
          {busRoutes?.map((route, i) => {
            return (
              <Card key={i}>
                <Card.Title>
                  <View
                    style={{
                      textAlign: "left",
                      flex: 1,
                      flexDirection: "row",
                    }}
                  >
                    <Icon name="train" color="gray" />
                    <Text style={{ marginLeft: 5 }}>
                      {route.start + " to " + route.end}
                    </Text>
                  </View>
                </Card.Title>

                <Card.Divider />

                <View>
                  <View style={{ flex: 1, flexDirection: "row" }}>
                    <View
                      style={{
                        textAlign: "left",
                        flex: 1,
                        flexDirection: "row",
                      }}
                    >
                      <Icon name="info" size={20} color="#007acc" />
                      <Text style={styles.dateInfoText}>
                        Route No: {route.routeNo}
                      </Text>
                    </View>
                    <View
                      style={{
                        textAlign: "right",
                        flex: 1,
                        flexDirection: "row",
                      }}
                    >
                      <Button
                        containerStyle={{ textAlign: "center" }}
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        buttonStyle={styles.button}
                        title="Book Now"
                        titleStyle={styles.buttonTitle}
                        onPress={() => navigation.navigate("BookingInfo")}
                        activeOpacity={0.5}
                      />
                    </View>
                  </View>
                </View>
              </Card>
            );
          })}
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
  button: {
    height: 30,
    width: 100,
    marginLeft: Dimensions.get("window").width / 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#71C3E7",
  },
  buttonTitle: {
    fontSize: 12,
    color: "white",
    textAlign: "center",
  },
  titleText: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    marginTop: 15,
  },
  dateInfoText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#007acc",
    marginLeft: 8,
  },
  timeInfoText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "gray",
    marginLeft: 8,
  },
});

export default Bookings;
