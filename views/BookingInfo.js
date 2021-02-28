import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  Picker,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Button, Icon } from "react-native-elements";
import DatePickerModel from "react-native-datepicker";

import FocusAwareStatusBar from "../Navigation/FocusAwareStatusBar";

const BookingInfo = ({ navigation }) => {
  // fetched
  const scheduleData = {
    arrivals: ["Matara", "Colombo", "Galle"],
    departures: ["Matara", "Colombo", "Galle"],
  };

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

  const [date, setDate] = useState(new Date());
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [weight, setWeight] = useState(0);

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

      <View style={{ flex: 2 }}>
        <FocusAwareStatusBar barStyle="light-content" hidden={false} />
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.txtNum}>1</Text>
            <Text style={styles.titleText}> Booking Details </Text>
          </View>

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
                selectedValue={from}
                style={{
                  height: 40,
                  minWidth: SCREEN_WIDTH - 90,
                }}
                onValueChange={(itemValue, i) => setFrom(itemValue)}
              >
                <Picker.Item value="" label="From..." />
                {scheduleData?.arrivals.map((item, i) => {
                  return <Picker.Item key={i} label={item} value={item} />;
                })}
              </Picker>
            </View>

            <View style={styles.pickerView}>
              <Picker
                selectedValue={to}
                placeholder="Select Departure"
                style={{
                  height: 40,
                  minWidth: SCREEN_WIDTH - 90,
                }}
                onValueChange={(itemValue, i) => setTo(itemValue)}
              >
                <Picker.Item value="" label="To..." />
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
                useNativeDriver="true"
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
            <View
              style={{
                flext: 1,
                flexDirection: "row",
                alignItems: "center",
                paddingTop: 30,
              }}
            >
              <Text style={styles.timeInfoText1}> No of Passengers</Text>
              <TextInput
                style={styles.input}
                value={passengers}
                keyboardType="number-pad"
                onChangeText={(noOfPassenger) => setPassengers(noOfPassenger)}
              />
            </View>

            <View
              style={{
                flext: 1,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={styles.timeInfoText2}> Luggage Weight</Text>
              <TextInput
                style={styles.input}
                value={weight}
                keyboardType="number-pad"
                onChangeText={(luggageWeight) => setWeight(luggageWeight)}
              />
            </View>

            <View style={{ flex: 1, flexDirection: "row", marginTop: 40 }}>
              <Button
                containerStyle={{ textAlign: "center" }}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
                buttonStyle={styles.buttonBack}
                title="Back"
                titleStyle={styles.buttonTitle}
                onPress={() => navigation.navigate("Bookings")}
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
                onPress={() => navigation.navigate("SeatBooking")}
                activeOpacity={0.5}
              />
            </View>
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
  headerText: {
    left: 55,
    fontSize: 20,
    fontWeight: "bold",
    top: -15,
    color: "#ffffff",
  },
  buttonBack: {
    height: 40,
    width: 120,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
  },
  buttonNext: {
    height: 40,
    width: 120,
    borderRadius: 20,
    marginLeft: 30,
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
    fontSize: 22,
    color: "#007acc",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
  },
  timeInfoText1: {
    fontWeight: "bold",
    fontSize: 16,
    color: "gray",
    marginRight: 38,
  },
  timeInfoText2: {
    fontWeight: "bold",
    fontSize: 16,
    color: "gray",
    marginRight: 50,
  },
  pickerView: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "gray",
    marginTop: 5,
    marginBottom: 15,
  },
  input: {
    height: 40,
    minWidth: 100,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "gray",
    marginTop: 5,
    marginBottom: 15,
    paddingLeft: 15,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default BookingInfo;
