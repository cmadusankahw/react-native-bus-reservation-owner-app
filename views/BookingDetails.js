import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Picker,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Button, Icon, Card } from "react-native-elements";
import DatePickerModel from "react-native-datepicker";

import FocusAwareStatusBar from "../Navigation/FocusAwareStatusBar";

const BookingDetails = ({ navigation }) => {
  // fetched
  const bookings = [
    {
      bookingId: "B1",
      routeNo: "R1",
      dateTime: "2021-03-19T22:30:00.000Z",
      start: "Matara",
      end: "Colombo",
      noOfPassengers: 24,
    },
    {
      bookingId: "B2",
      routeNo: "R1",
      dateTime: "2021-01-19T22:30:00.000Z",
      start: "Matara",
      end: "Anuradhapura",
      noOfPassengers: 24,
    },
    {
      bookingId: "B3",
      routeNo: "R2",
      dateTime: "2021-03-19T22:30:00.000Z",
      start: "Matara",
      end: "Galle",
      noOfPassengers: 24,
    },
    {
      bookingId: "B4",
      routeNo: "R1",
      dateTime: "2021-04-19T22:30:00.000Z",
      start: "Matara",
      end: "Colombo",
      noOfPassengers: 24,
    },
  ];

  const [selectedBookings, setSelectedBookings] = useState(bookings);

  const [date, setDate] = useState(new Date());

  // date queries
  const queryByDate = (date) => {
    newBookings = bookings.filter(
      (booking) => booking.dateTime.slice(0, 10) === date
    );
    setSelectedBookings(newBookings);
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
        <Text style={styles.headerText}> Booking Details </Text>
      </View>

      <View style={{ flex: 2 }}>
        <FocusAwareStatusBar barStyle="light-content" hidden={false} />

        <View
          style={{
            flex: 1,
            textAlign: "center",
            alignItems: "center",
            left: 0,
            right: 0,
            marginTop: 30,
          }}
        >
          <Text style={styles.selectDate}> Select a Date </Text>

          <View>
            <DatePickerModel
              date={date}
              placeholder="select date"
              format="YYYY-MM-DD"
              minDate={new Date()}
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  left: 0,
                  top: 12,
                  marginLeft: 5,
                },
                dateInput: {
                  alignSelf: "center",
                  borderRadius: 5,
                  minWidth: SCREEN_WIDTH - 120,
                  marginLeft: 10,
                  marginTop: 20,
                },
                dateText: {
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "#007acc",
                },
              }}
              onDateChange={(date) => {
                queryByDate(date);
                setDate(date);
              }}
            />
          </View>
        </View>
      </View>

      <View style={{ flex: 8 }}>
        <ScrollView style={{ paddingBottom: 5 }}>
          {selectedBookings?.map((booking, i) => {
            return (
              <Card>
                <Card.Title>Booking ID: {booking.bookingId}</Card.Title>

                <Card.Divider />

                <View>
                  <View style={{ flex: 1, flexDirection: "row" }}>
                    <View>
                      <View
                        style={{
                          textAlign: "left",
                          flex: 1,
                          flexDirection: "row",
                          marginBottom: 4,
                        }}
                      >
                        <Icon name="next-week" size={20} color="#007acc" />
                        <Text style={styles.dateInfoText}>
                          {booking.dateTime.slice(0, 10)}
                        </Text>
                      </View>
                      <View
                        style={{
                          textAlign: "right",
                          flex: 1,
                          flexDirection: "row",
                        }}
                      >
                        <Icon name="schedule" size={20} color="gray" />
                        <Text style={styles.timeInfoText}>
                          {booking.dateTime.slice(11, 16)}
                        </Text>
                      </View>
                    </View>

                    <View
                      style={{
                        textAlign: "left",
                        flex: 1,
                        flexDirection: "row",
                        marginLeft: 35,
                        marginRight: 20,
                      }}
                    >
                      <Icon name="train" size={20} color="#007acc" />
                      <Text style={styles.dateInfoText}>
                        {booking.start + " to " + booking.end}
                      </Text>
                    </View>
                  </View>

                  <View style={{ flex: 1, marginTop: 5 }}></View>
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
  selectDate: {
    fontSize: 20,
    color: "gray",
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
  pickerView: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "gray",
    marginTop: 5,
    marginBottom: 15,
  },
});

export default BookingDetails;
