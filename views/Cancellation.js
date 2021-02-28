import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Button, Icon, Card } from "react-native-elements";

import FocusAwareStatusBar from "../Navigation/FocusAwareStatusBar";

const Cancellation = ({ navigation }) => {
  // fetched
  const bookings = [
    {
      bookingId: "B1",
      dateTime: "2021-02-21T08:30:00.000Z",
      from: "Colombo",
      to: "Matara",
      routeNo: "R1",
    },
    {
      bookingId: "B1",
      dateTime: "2021-02-21T11:30:00.000Z",
      from: "Colombo",
      to: "Galle",
      routeNo: "R1",
    },
    {
      bookingId: "B1",
      dateTime: "2021-02-21T21:30:00.000Z",
      from: "Colombo",
      to: "Badulla",
      routeNo: "R3",
    },
  ];

  const SCREEN_WIDTH = Dimensions.get("window").width;

  // cancellation pop-up
  const confirmCancellation = () =>
    Alert.alert(
      "BuzzBus Booking",
      "Sure want to cancel?",
      [
        {
          text: "Keep It",
          onPress: () => console.log("Cancel Pressed"),
        },
        {
          text: "Cancel",
          style: "cancel",
          onPress: () => {
            // your cancellation logic here
            console.log("Cancel Pressed");
          },
        },
      ],
      { cancelable: false }
    );

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
        <Text style={styles.headerText}> Cancel a Booking </Text>
      </View>

      <View style={{ flex: 1 }}>
        <FocusAwareStatusBar barStyle="light-content" hidden={false} />

        <ScrollView>
          {bookings?.map((booking, i) => {
            return (
              <Card>
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
                      {booking.from + " to " + booking.to}
                    </Text>
                  </View>
                </Card.Title>

                <Card.Divider />

                <View>
                  <Text style={{ marginBottom: 3 }}> Booked on: </Text>
                  <View style={{ flex: 1, flexDirection: "row" }}>
                    <View
                      style={{
                        textAlign: "left",
                        flex: 1,
                        flexDirection: "row",
                      }}
                    >
                      <Icon name="pages" size={20} color="gray" />
                      <Text style={styles.dateInfoText}>
                        {booking.dateTime.slice(0, 10)}
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                      }}
                    >
                      <Icon name="history" size={20} color="gray" />
                      <Text style={styles.timeInfoText}>
                        {booking.dateTime.slice(11, 16)}
                      </Text>
                    </View>
                    <View
                      style={{
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
                        buttonStyle={styles.buttonRed}
                        title="Cancel"
                        titleStyle={styles.buttonTitle}
                        onPress={confirmCancellation}
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
  buttonRed: {
    height: 40,
    width: 80,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff6666",
  },
  buttonTitle: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
  },
});

export default Cancellation;
