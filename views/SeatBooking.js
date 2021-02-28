import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
  StatusBar,
} from "react-native";
import { Button, Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import Grid from "react-native-grid-component";
import FocusAwareStatusBar from "../Navigation/FocusAwareStatusBar";

const SeatBooking = ({ navigation }) => {
  // fetched
  // PROTOCOL : available: 1, selected: 2, already_reserved: 3
  const [seats, setSeats] = useState(
    Array(48)
      .fill()
      .map(() => 1)
  );

  const [selectedSeats, setSelectedSeats] = useState(0);

  // sample booking : for POST update + localStorage
  const booking = {
    bookingId: "B1",
    dateTime: "2021-02-21T08:30:00.000Z",
    from: "Colombo",
    to: "Matara",
    routeNo: "R1",
    ticketPrice: 0,
    noOfPassengers: 0,
    luggageWeight: 0,
    noOfSeats: 0,
    seatNumbersBooked: [],
  };

  const SCREEN_WIDTH = Dimensions.get("window").width;

  const renderSeat = (d, i) => (
    <TouchableOpacity
      key={i}
      activeOpacity={0.5}
      onPress={() => {
        let newSeats = [...seats];
        if (d == 1) {
          setSelectedSeats(selectedSeats + 1);
          newSeats[i] = 2;
          setSeats(newSeats);
        } else {
          setSelectedSeats(selectedSeats - 1);
          newSeats[i] = 1;
          setSeats(newSeats);
        }
      }}
      style={{ textAlign: "center", justifyContent: "center" }}
    >
      <View
        style={[
          {
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 12,
          },
          i % 2 > 0 ? { marginRight: 30 } : { marginRight: 0 },
        ]}
      >
        <Image
          style={styles.busSeat}
          source={
            d == 2
              ? require("../assets/selected_seat.png")
              : require("../assets/available_seat.png")
          }
        />
        <Text>{i + 1}</Text>
      </View>
    </TouchableOpacity>
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
        <Text style={styles.headerText}> Place a Booking </Text>
      </View>

      <View style={{ flex: 1 }}>
        <FocusAwareStatusBar barStyle="light-content" hidden={false} />
        <View
          style={{
            flexDirection: "row",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.txtNum}>2</Text>
          <Text style={styles.titleText}> Select your Seats </Text>
        </View>
        <ScrollView style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 28,
              marginTop: 10,
            }}
          >
            <Grid
              renderItem={renderSeat} // call method to render style to item
              data={seats}
              numColumns={4}
            />
          </View>
        </ScrollView>
        <View style={{ flex: 0 }}>
          <View
            style={{
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <Text style={styles.titleText}>
              No of Seats Selected: {selectedSeats}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 20,
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
              onPress={() => navigation.navigate("BookingInfo")}
              activeOpacity={0.5}
            />

            <Button
              containerStyle={{ textAlign: "center" }}
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
              buttonStyle={styles.buttonNext}
              title="Next"
              titleStyle={styles.buttonTitle}
              onPress={() => navigation.navigate("BookingPayment")}
              activeOpacity={0.5}
            />
          </View>
        </View>
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
  infoAnswerLabel: {
    fontSize: 17,
    color: "#007acc",
    paddingBottom: 10,
    marginLeft: 20,
  },
  busSeat: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
  },
});

export default SeatBooking;
