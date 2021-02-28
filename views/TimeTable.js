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

const TimeTable = ({ navigation }) => {
  // fetched
  const scheduleData = {
    arrivals: ["Matara", "Colombo", "Galle"],
    departures: ["Matara", "Colombo", "Galle"],
  };

  // fetched
  const busRoutes = [
    {
      routeNo: "R1",
      dateTime: "2021-02-19T22:30:00.000Z",
      arrival: "Matara",
      departure: "Colombo",
    },
    {
      routeNo: "R2",
      dateTime: "2021-02-20T11:30:00.000Z",
      arrival: "Matara",
      departure: "Galle",
    },
    {
      routeNo: "R3",
      dateTime: "2021-02-20T14:30:00.000Z",
      arrival: "Colombo",
      departure: "Galle",
    },
    {
      routeNo: "R4",
      dateTime: "2021-02-21T08:30:00.000Z",
      arrival: "Colombo",
      departure: "Galle",
    },
  ];

  const [date, setDate] = useState(new Date());
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");

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
        <Text style={styles.headerText}> Time Table </Text>
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
            marginTop: 25,
          }}
        >
          <View style={styles.pickerView}>
            <Picker
              selectedValue={arrival}
              style={{
                height: 40,
                minWidth: SCREEN_WIDTH - 90,
              }}
              onValueChange={(itemValue, i) => setArrival(itemValue)}
            >
              <Picker.Item value="" label="Select Arrival..." />
              {scheduleData?.arrivals.map((item, i) => {
                return <Picker.Item key={i} label={item} value={item} />;
              })}
            </Picker>
          </View>

          <View style={styles.pickerView}>
            <Picker
              selectedValue={departure}
              placeholder="Select Departure"
              style={{
                height: 40,
                minWidth: SCREEN_WIDTH - 90,
              }}
              onValueChange={(itemValue, i) => setDeparture(itemValue)}
            >
              <Picker.Item value="" label="Select Departure..." />
              {scheduleData?.departures.map((item, i) => {
                return <Picker.Item key={i} label={item} value={item} />;
              })}
            </Picker>
          </View>

          <Text> Select Date </Text>

          <View>
            <DatePickerModel
              date={date}
              onDateChange={setDate}
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
            />
          </View>
        </View>
      </View>

      <View style={{ flex: 3 }}>
        <ScrollView>
          {busRoutes?.map((route, i) => {
            return (
              <Card>
                <Card.Title>
                  {route.arrival + " to " + route.departure}
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
                      <Icon name="pages" size={20} color="#007acc" />
                      <Text style={styles.dateInfoText}>
                        {route.dateTime.slice(0, 10)}
                      </Text>
                    </View>
                    <View
                      style={{
                        textAlign: "right",
                        flex: 1,
                        flexDirection: "row",
                      }}
                    >
                      <Icon name="history" size={20} color="gray" />
                      <Text style={styles.timeInfoText}>
                        {route.dateTime.slice(11, 16)}
                      </Text>
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

export default TimeTable;
