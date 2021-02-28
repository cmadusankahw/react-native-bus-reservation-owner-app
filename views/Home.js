import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { Button, Icon } from "react-native-elements";

import FocusAwareStatusBar from "../Navigation/FocusAwareStatusBar";

const Home = ({ navigation }) => {
  return (
    <>
      {/* header */}
      <View style={styles.floatingView}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.openDrawer()}
        >
          <Icon name="menu" size={30} color="#ffffff" />
        </TouchableOpacity>
        <Text style={styles.headerText}> BuzzBus </Text>
      </View>

      <View style={{ flex: 1, alignItems: "center" }}>
        <FocusAwareStatusBar barStyle="light-content" hidden={false} />
        <Text style={styles.titleText}>Welcome to BuzzBus!</Text>
      </View>
      <SafeAreaView style={{ flex: 6, alignItems: "center" }}>
        <Image
          source={require("../assets/logo.png")}
          style={styles.logoImage}
        />
      </SafeAreaView>
      <View style={{ flex: 5 }}>
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Button
            containerStyle={{ textAlign: "center" }}
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
            buttonStyle={styles.button}
            title="Start your Journey"
            titleStyle={styles.buttonTitle}
            onPress={() => console.log("clicked")}
            activeOpacity={0.5}
          />
        </View>

        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Button
            containerStyle={{ textAlign: "center" }}
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
            buttonStyle={styles.button}
            title="View Time Table"
            titleStyle={styles.buttonTitle}
            onPress={() => console.log("clicked")}
            activeOpacity={0.5}
          />
        </View>

        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Button
            containerStyle={{ textAlign: "center" }}
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
            buttonStyle={styles.buttonRed}
            title="Cancel a Booking"
            titleStyle={styles.buttonTitle}
            onPress={() => console.log("clicked")}
            activeOpacity={0.5}
          />
        </View>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  floatingView: {
    width: Dimensions.get("window").width,
    height: 60,
    borderRadius: 5,
    backgroundColor: "#71D3E7",
    position: "absolute",
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
  container: {
    alignItems: "center",
  },
  logoImage: {
    marginTop: 120,
    width: 270,
    height: 190,
  },
  titleText: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 100,
    marginBottom: 15,
  },
  button: {
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#71C3E7",
    height: 40,
    width: 300,
  },
  buttonTitle: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
  },
  buttonRed: {
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 300,
    backgroundColor: "#ff6666",
  },
  text: {
    fontSize: 15,
    textAlign: "center",
  },
});
