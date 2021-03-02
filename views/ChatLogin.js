import React from "react";
import firebaseSvc from "../FirebaseSvc";
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

class ChatLogin extends React.Component {
  static navigationOptions = {
    title: "Chat",
  };

  state = {
    name: "Admin",
    email: "admin@gmail.com",
    password: "abc123",
    avatar:
      "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
  };

  // using Fire.js
  onPressLogin = async () => {
    console.log("pressing login... email:" + this.state.email);
    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      avatar: this.state.avatar,
    };

    const response = firebaseSvc.login(
      user,
      this.loginSuccess,
      this.loginFailed
    );
  };

  loginSuccess = () => {
    console.log("login successful, navigate to chat.");
    this.props.navigation.navigate("Chat", {
      name: this.state.name,
      email: this.state.email,
      avatar: this.state.avatar,
    });
  };
  loginFailed = () => {
    console.log("login failed ***");
    alert("Chat Login failure. Please triy again.");
  };

  onChangeTextEmail = (email) => this.setState({ email });
  onChangeTextPassword = (password) => this.setState({ password });

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
          <Text style={styles.headerText}> Chat Login </Text>
        </View>

        <View style={{ flex: 3 }}>
          <FocusAwareStatusBar barStyle="light-content" hidden={false} />
          <ScrollView>
            <SafeAreaView style={{ flex: 6, alignItems: "center" }}>
              <Image
                source={require("../assets/logo.png")}
                style={styles.logoImage}
              />
            </SafeAreaView>
            <Text style={styles.title}>Email:</Text>
            <TextInput
              style={styles.nameInput}
              onChangeText={this.onChangeTextEmail}
              value={this.state.email}
            />
            <Text style={styles.title}>Password:</Text>
            <TextInput
              style={styles.nameInput}
              onChangeText={this.onChangeTextPassword}
              secureTextEntry={true}
              value={this.state.password}
            />
            <View style={{ alignItems: "center", marginTop: 20 }}>
              <Button
                containerStyle={{ textAlign: "center" }}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
                buttonStyle={styles.button}
                title="Login to Chat"
                titleStyle={styles.buttonTitle}
                onPress={this.onPressLogin}
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
                buttonStyle={styles.buttonSignUp}
                title="Create New Chat Account"
                titleStyle={styles.buttonTitle}
                onPress={() => this.props.navigation.navigate("CreateAccount")}
                activeOpacity={0.5}
              />
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

  buttonSignUp: {
    height: 40,
    width: Dimensions.get("window").width - 100,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#71D3E7",
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
    fontSize: 42,
  },
});

export default ChatLogin;
