import React, { useState, useEffect } from "react";
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
import { Table, Row, Rows } from "react-native-table-component";
import * as Print from "expo-print";

import FocusAwareStatusBar from "../Navigation/FocusAwareStatusBar";

const ViewReport = ({ navigation }) => {
  // fetched
  let bookings = [
    {
      bookingId: "B1",
      routeNo: "R1",
      name: "name1",
      dateTime: "2021-03-19T22:30:00.000Z",
      pickup: "Matara",
      destination: "Colombo",
      noOfPassengers: 24,
      income: 2245.0,
    },
    {
      bookingId: "B2",
      routeNo: "R1",
      name: "name2",
      dateTime: "2021-01-19T22:30:00.000Z",
      pickup: "Matara",
      destination: "Anuradhapura",
      noOfPassengers: 24,
      income: 1800.0,
    },
    {
      bookingId: "B3",
      routeNo: "R2",
      name: "name3",
      dateTime: "2021-03-19T22:30:00.000Z",
      pickup: "Matara",
      destination: "Galle",
      noOfPassengers: 24,
      income: 1900.0,
    },
    {
      bookingId: "B4",
      routeNo: "R1",
      name: "name4",
      dateTime: "2021-04-19T22:30:00.000Z",
      pickup: "Matara",
      destination: "Colombo",
      noOfPassengers: 24,
      income: 190.0,
    },
    {
      bookingId: "B4",
      routeNo: "R1",
      name: "name5",
      dateTime: "2021-04-19T22:30:00.000Z",
      pickup: "Matara",
      destination: "Colombo",
      noOfPassengers: 24,
      income: 3000.0,
    },
  ];

  const tableHead = ["Name", "Pickup", "Destination", "Passengers", "Income"];

  const setBookings = (bk) => {
    const newTableData = [];
    for (let book of bk) {
      const rowArr = [];
      rowArr.push(book.name);
      rowArr.push(book.pickup);
      rowArr.push(book.destination);
      rowArr.push(book.noOfPassengers);
      rowArr.push("Rs. " + book.income.toString());
      newTableData.push(rowArr);
    }
    return newTableData;
  };

  const SCREEN_WIDTH = Dimensions.get("window").width;

  const SCREEN_HEIGHT = Dimensions.get("window").height;

  // get total income
  const getTotalIncome = (bks) => {
    let total = 0;
    for (let book of bks) {
      total += book.income;
    }
    return total;
  };

  const createHTML = (bks) => {
    let total = 0;
    let htmlString =
      "<h1>Daily Income report <div style='text-align:center;'></h1> <br> </hr>  <table style='borderColor:gray; borderWidth:1;'> <tr> <th>Name</th> <th>Pickup</th> <th> Destination </th> <th> Destination </th> <th> Passengers</th><th>Income</th></tr>";
    for (let book of bks) {
      total += book.income;
      htmlString +=
        "<tr><td>" +
        book.name +
        "</td><td>" +
        book.pickup +
        "</td><td>" +
        book.destination +
        "</td><td>" +
        book.noOfPassengers.toString() +
        "</td><td> Rs. " +
        book.income +
        "</td></tr>";
    }
    htmlString +=
      "</table></hr> </br> <h3> Daily Income Rs. " +
      total.toString() +
      "</h3> </hr> </div>";
    return htmlString;
  };

  // print report
  const printReport = (html) => {
    console.log(html);
    const dateStr =
      "report_" + new Date().toISOString().replace(".", "").replace(":", "-");

    const options = { html };
    Print.printAsync(options);
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
        <Text style={styles.headerText}> Reports View </Text>
      </View>

      <View style={{ flex: 6 }}>
        <ScrollView style={{ paddingBottom: 5, backgroundColor: "#fff" }}>
          <View style={{ flex: 1 }}>
            <FocusAwareStatusBar barStyle="light-content" hidden={false} />
            <Text style={styles.titleText}> Daily Income Report </Text>
          </View>
          <ScrollView horizontal={true}>
            <View style={styles.container}>
              <Table
                borderStyle={{
                  borderWidth: 2,
                  borderColor: "lightblue",
                }}
              >
                <Row
                  data={tableHead}
                  style={styles.head}
                  textStyle={styles.text}
                  widthArr={[100, 100, 100, 120, 120]}
                />

                <Rows
                  data={setBookings(bookings)}
                  textStyle={styles.text}
                  widthArr={[100, 100, 100, 120, 120]}
                />
              </Table>
            </View>
          </ScrollView>
          <View
            style={{
              textAlign: "center",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.totalIncome}>Daily Income: Rs.</Text>
              <Text style={styles.totalIncomeValue}>
                {getTotalIncome(bookings)}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={{ flex: 1, alignItems: "center", marginTop: 20 }}>
        <Button
          containerStyle={{ textAlign: "center" }}
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
          buttonStyle={styles.button}
          title="Download report"
          titleStyle={styles.buttonTitle}
          onPress={() => printReport(createHTML(bookings))}
          activeOpacity={0.5}
        />
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
    marginTop: 35,
  },
  totalIncome: {
    fontSize: 22,
    fontWeight: "bold",
    color: "gray",
    marginBottom: 15,
    marginTop: 15,
  },
  totalIncomeValue: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#007acc",
    marginBottom: 15,
    marginTop: 15,
    marginLeft: 5,
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
  head: { height: 50, backgroundColor: "lightblue" },
  text: { margin: 6, height: 30 },
});

export default ViewReport;
