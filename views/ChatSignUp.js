import React from "react";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Button, Icon } from "react-native-elements";

import FocusAwareStatusBar from "../Navigation/FocusAwareStatusBar";
import firebaseSvc from "../FirebaseSvc";

class ChatSignUp extends React.Component {
  static navigationOptions = {
    title: "Scv Chatter",
  };

  state = {
    name: "Admin",
    email: "",
    password: "",
    avatar: "",
  };

  onPressCreate = async () => {
    try {
      const user = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      };
      await firebaseSvc.createAccount(user);
    } catch ({ message }) {
      console.log("create account failed. catch error:" + message);
    }
  };

  onChangeTextEmail = (email) => this.setState({ email });
  onChangeTextPassword = (password) => this.setState({ password });
  onChangeTextName = (name) => this.setState({ name });

  onImageUpload = async () => {
    const { status: cameraRollPerm } = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );
    try {
      // only if user allows permission to camera roll
      if (cameraRollPerm === "granted") {
        let pickerResult = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [1, 1],
        });
        console.log(
          "ready to upload... pickerResult json:" + JSON.stringify(pickerResult)
        );

        var wantedMaxSize = 150;
        var rawheight = pickerResult.height;
        var rawwidth = pickerResult.width;
        var ratio = rawwidth / rawheight;
        var wantedwidth = wantedMaxSize;
        var wantedheight = wantedMaxSize / ratio;
        // check vertical or horizontal
        if (rawheight > rawwidth) {
          wantedwidth = wantedMaxSize * ratio;
          wantedheight = wantedMaxSize;
        }
        let uploadUrl = await firebaseSvc.uploadImage(pickerResult.uri);
        this.setState({ avatar: uploadUrl });
        await firebaseSvc.updateAvatar(uploadUrl);
      }
    } catch (err) {
      console.log("onImageUpload error:" + err.message);
      alert("Upload image error:" + err.message);
    }
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        {/* header */}
        <View style={styles.floatingView}>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => this.props.navigation.openDrawer()}
          >
            <Icon name="menu" size={30} color="#ffffff" />
          </TouchableOpacity>
          <Text style={styles.headerText}> Create Chat Account </Text>
        </View>

        <View style={{ flex: 3 }}>
          <FocusAwareStatusBar barStyle="light-content" hidden={false} />
          <ScrollView>
            <View>
              <Text style={styles.title}>Your Email:</Text>
              <TextInput
                style={styles.nameInput}
                onChangeText={this.onChangeTextEmail}
                value={this.state.email}
              />
              <Text style={styles.title}>Password:</Text>
              <TextInput
                style={styles.nameInput}
                onChangeText={this.onChangeTextPassword}
                value={this.state.password}
              />
              <Text style={styles.title}>User Type:</Text>
              <TextInput
                style={styles.nameInput}
                editable={false}
                selectTextOnFocus={false}
                onChangeText={this.onChangeTextName}
                value={this.state.name}
              />

              <View style={{ alignItems: "center", marginTop: 20 }}>
                <Button
                  containerStyle={{ textAlign: "center" }}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  buttonStyle={styles.button}
                  title="Create Account"
                  titleStyle={styles.buttonTitle}
                  onPress={this.onPressCreate}
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
                  title="Back to Login"
                  titleStyle={styles.buttonTitle}
                  onPress={() => this.props.navigation.navigate("ChatLogin")}
                  activeOpacity={0.5}
                />
              </View>
              {/* <Button
          title="Upload Avatar Image 2"
          style={styles.buttonText}
          onPress={this.onImageUpload}
        /> */}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const offset = 16;
const styles = StyleSheet.create({
  statusBar: {
    height: 10,
  },
  logoImage: {
    marginTop: 30,
    width: 210,
    height: 160,
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
  button: {
    height: 45,
    width: Dimensions.get("window").width - 100,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#007acc",
  },

  buttonRed: {
    height: 40,
    width: Dimensions.get("window").width - 100,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff6666",
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
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  nameInput: {
    height: offset * 2.6,
    margin: offset,
    paddingHorizontal: offset,
    borderColor: "lightgray",
    paddingTop: 12,
    paddingBottom: 12,
    borderWidth: 1,
    borderRadius: 5,
    fontSize: offset,
  },
  buttonText: {
    marginLeft: offset,
    fontSize: 42,
  },
});

export default ChatSignUp;
