import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,
  Dimensions,
} from "react-native";
import { Icon } from "react-native-elements";

import FocusAwareStatusBar from "../Navigation/FocusAwareStatusBar";

const RateJourney = ({ navigation }) => {
  const SCREEN_WIDTH = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.floatingView}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.openDrawer()}
        >
          <Icon name="menu" size={30} color="#ffffff" />
        </TouchableOpacity>
        <Text style={styles.headerText}> Rate BuzzBus </Text>
      </View>
      <ScrollView>
        <View style={{ alignItems: "center", marginHorizontal: 30 }}>
          <Image
            style={styles.productImg}
            source={require("../assets/logo.png")}
          />
          <Text style={styles.name}>How was BuzzBus??</Text>
          <Text style={styles.description}>
            We value your thoughts. Share your Experience with BuzzBus! Help us
            grow!
          </Text>
        </View>
        <View style={styles.starContainer}>
          <Image
            style={styles.star}
            source={{
              uri: "https://img.icons8.com/color/40/000000/star.png",
            }}
          />
          <Image
            style={styles.star}
            source={{
              uri: "https://img.icons8.com/color/40/000000/star.png",
            }}
          />
          <Image
            style={styles.star}
            source={{
              uri: "https://img.icons8.com/color/40/000000/star.png",
            }}
          />
          <Image
            style={styles.star}
            source={{
              uri: "https://img.icons8.com/color/40/000000/star.png",
            }}
          />
          <Image
            style={styles.star}
            source={{
              uri: "https://img.icons8.com/color/40/000000/star.png",
            }}
          />
        </View>

        <View style={styles.contentSize}>
          <TouchableOpacity style={styles.btnSize}>
            <Text>😟</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSize}>
            <Text>😶</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSize}>
            <Text>🙂</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSize}>
            <Text>😃</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.separator}></View>
        <View style={styles.addToCarContainer}>
          <TouchableOpacity style={styles.shareButton}>
            <Text style={styles.shareButtonText}>Rate BuzzBus!</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
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
  container: {
    flex: 1,
  },
  productImg: {
    width: 240,
    height: 240,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "bold",
  },
  description: {
    textAlign: "center",
    marginTop: 10,
    color: "#696969",
    marginLeft: 30,
    marginRight: 30,
  },
  star: {
    width: 40,
    height: 40,
  },
  btnColor: {
    height: 30,
    width: 30,
    borderRadius: 30,
    marginHorizontal: 3,
  },
  btnSize: {
    height: 40,
    width: 40,
    borderRadius: 40,
    borderColor: "#778899",
    borderWidth: 1,
    marginHorizontal: 3,
    backgroundColor: "white",

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  starContainer: {
    justifyContent: "center",
    marginHorizontal: 30,
    flexDirection: "row",
    marginTop: 20,
  },
  contentColors: {
    justifyContent: "center",
    marginHorizontal: 30,
    flexDirection: "row",
    marginTop: 20,
  },
  contentSize: {
    justifyContent: "center",
    marginHorizontal: 30,
    flexDirection: "row",
    marginTop: 20,
  },
  separator: {
    height: 2,
    backgroundColor: "#eeeeee",
    marginTop: 20,
    marginHorizontal: 30,
  },
  shareButton: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
  shareButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  addToCarContainer: {
    marginHorizontal: 30,
  },
});

export default RateJourney;
