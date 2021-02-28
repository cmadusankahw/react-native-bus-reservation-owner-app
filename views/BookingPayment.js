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

const BookingPayment = ({ navigation }) => {
  // sample booking : for POST update + localStorage
  const booking = {
    bookingId: "B1",
    dateTime: "2021-02-21T08:30:00.000Z",
    from: "Colombo",
    to: "Matara",
    routeNo: "R1",
    ticketPrice: 23,
    noOfPassengers: 12,
    luggageWeight: 0,
    noOfSeats: 4,
    seatNumbersBooked: [1, 3, 5, 6],
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
        <Text style={styles.headerText}> Place a Booking </Text>
      </View>

      <View style={{ flex: 1 }}>
        <FocusAwareStatusBar barStyle="light-content" hidden={false} />

        <ScrollView style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.txtNum}>3</Text>
            <Text style={styles.titleText}> Make your Payment </Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              source={require("../assets/payment.png")}
              style={styles.loyalIcon}
            />
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginTop: 20,
              marginHorizontal: 15,
              width: SCREEN_WIDTH - 20,
            }}
          >
            <View style={{ flex: 6 }}>
              <Text style={styles.infoTypeLabel}>Ticket Price (Rs.)</Text>
              <Text style={styles.infoTypeLabel}>No of Passengers</Text>
              <Text style={styles.infoTypeLabel2}>Total Amount (Rs.)</Text>
            </View>
            <View style={{ flex: 4, marginLeft: 20 }}>
              <Text style={styles.infoAnswerLabel}>{booking.ticketPrice}</Text>
              <Text style={styles.infoAnswerLabel}>
                {booking.noOfPassengers}
              </Text>
              <Text style={styles.infoAnswerLabel}>
                {booking.ticketPrice * booking.noOfPassengers}
              </Text>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginTop: 40,
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              containerStyle={{ textAlign: "center" }}
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
              buttonStyle={styles.buttonBack}
              title="Back"
              titleStyle={styles.buttonTitle}
              onPress={() => navigation.navigate("SeatBooking")}
              activeOpacity={0.5}
            />

            <Button
              containerStyle={{ textAlign: "center" }}
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
              buttonStyle={styles.buttonPoints}
              title="Use Points"
              titleStyle={styles.buttonTitle}
              onPress={() => console.log("Points used")}
              activeOpacity={0.5}
            />

            <Button
              containerStyle={{ textAlign: "center" }}
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
              buttonStyle={styles.buttonNext}
              title="Pay"
              titleStyle={styles.buttonTitle}
              onPress={() => console.log("payment made!")}
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
  txtNum: {
    backgroundColor: "#007acc",
    borderRadius: 999,
    paddingVertical: 3,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 20,
    marginRight: 7,
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 22,
  },
  titleText: {
    fontSize: 22,
    color: "#007acc",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
  },
  loyalIcon: {
    resizeMode: "center",
    width: 130,
    height: 130,
    borderColor: "rgb(33,33,33)",
    borderRadius: 999,
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 5,
  },
  buttonBack: {
    height: 40,
    width: 90,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
  },
  buttonNext: {
    height: 40,
    width: 90,
    borderRadius: 20,
    marginLeft: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#71C3E7",
  },
  buttonPoints: {
    height: 40,
    width: 120,
    borderRadius: 20,
    marginLeft: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff6666",
  },
  buttonTitle: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
  },
  infoTypeLabel: {
    fontSize: 17,
    textAlign: "right",
    color: "rgba(126,123,138,1)",
    paddingBottom: 10,
  },
  infoTypeLabel2: {
    fontSize: 17,
    textAlign: "right",
    color: "rgba(126,123,138,1)",
    paddingBottom: 10,
    fontWeight: "bold",
    color: "#007acc",
  },
  infoAnswerLabel: {
    fontSize: 17,
    color: "#007acc",
    paddingBottom: 10,
    marginLeft: 20,
  },
});

export default BookingPayment;
