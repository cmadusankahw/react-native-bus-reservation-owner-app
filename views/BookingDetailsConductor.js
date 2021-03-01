import React, { useState, useEffect } from "react";
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
import { Table, Row, Rows } from "react-native-table-component";

import FocusAwareStatusBar from "../Navigation/FocusAwareStatusBar";

const BookingDetailsConductor = ({ navigation }) => {
  // fetched
  let bookings = [
    {
      bookingId: "B1",
      routeNo: "R1",
      name: "name1",
      phoneNo: "0772345678",
      dateTime: "2021-03-19T22:30:00.000Z",
      pickup: "Matara",
      destination: "Colombo",
      noOfPassengers: 24,
      seatNos: [12, 8],
    },
    {
      bookingId: "B2",
      routeNo: "R1",
      name: "name2",
      phoneNo: "0772345679",
      dateTime: "2021-01-19T22:30:00.000Z",
      pickup: "Matara",
      destination: "Anuradhapura",
      noOfPassengers: 24,
      seatNos: [2, 4, 5, 7],
    },
    {
      bookingId: "B3",
      routeNo: "R2",
      name: "name3",
      phoneNo: "0772345678",
      dateTime: "2021-03-19T22:30:00.000Z",
      pickup: "Matara",
      destination: "Galle",
      noOfPassengers: 24,
      seatNos: [11, 1, 3],
    },
    {
      bookingId: "B4",
      routeNo: "R1",
      name: "name4",
      phoneNo: "0772345678",
      dateTime: "2021-04-19T22:30:00.000Z",
      pickup: "Matara",
      destination: "Colombo",
      noOfPassengers: 24,
      seatNos: [2, 4, 5, 7],
    },
    {
      bookingId: "B4",
      routeNo: "R1",
      name: "name4",
      phoneNo: "0772345678",
      dateTime: "2021-04-19T22:30:00.000Z",
      pickup: "Matara",
      destination: "Colombo",
      noOfPassengers: 24,
      seatNos: [2, 4, 5, 7],
    },
    {
      bookingId: "B4",
      routeNo: "R1",
      name: "name4",
      phoneNo: "0772345678",
      dateTime: "2021-04-19T22:30:00.000Z",
      pickup: "Matara",
      destination: "Colombo",
      noOfPassengers: 24,
      seatNos: [2, 4, 5, 7],
    },
    {
      bookingId: "B4",
      routeNo: "R1",
      name: "name4",
      phoneNo: "0772345678",
      dateTime: "2021-04-19T22:30:00.000Z",
      pickup: "Matara",
      destination: "Colombo",
      noOfPassengers: 24,
      seatNos: [2, 4, 5, 7],
    },
  ];

  const tableHead = [
    "Name",
    "Phone no",
    "Pickup",
    "Destination",
    "Passengers",
    "Seat Numbers",
  ];

  const setBookings = (bk) => {
    const newTableData = [];
    for (let book of bk) {
      const rowArr = [];
      rowArr.push(book.name);
      rowArr.push(book.phoneNo);
      rowArr.push(book.pickup);
      rowArr.push(book.destination);
      rowArr.push(book.noOfPassengers);
      rowArr.push(book.seatNos.join(","));
      newTableData.push(rowArr);
    }
    return newTableData;
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

      <View style={{ flex: 1 }}>
        <FocusAwareStatusBar barStyle="light-content" hidden={false} />
        <Text style={styles.titleText}>All Booking Details </Text>
      </View>

      <View style={{ flex: 8 }}>
        <ScrollView style={{ paddingBottom: 5, backgroundColor: "#fff" }}>
          <ScrollView horizontal={true}>
            <View style={styles.container}>
              <Table
                borderStyle={{
                  borderWidth: 2,
                  borderColor: "#c8e1ff",
                }}
              >
                <Row
                  data={tableHead}
                  style={styles.head}
                  textStyle={styles.text}
                  widthArr={[100, 100, 100, 100, 100, 120]}
                />

                <Rows
                  data={setBookings(bookings)}
                  textStyle={styles.text}
                  widthArr={[100, 100, 100, 100, 100, 120]}
                />
              </Table>
            </View>
          </ScrollView>
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
  // table view
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 50, backgroundColor: "#f1f8ff" },
  text: { margin: 6, height: 30 },
});

export default BookingDetailsConductor;
