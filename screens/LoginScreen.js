import React from "react";
import {
  Text,
  Image,
  View,
  Button,
  StyleSheet,
  TextInput,
  Alert,
  StatusBar,
  TouchableOpacity,
} from "react-native";

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
    };
  }

  Login = async () => {
    const { password } = this.state;
    const { email } = this.state;

    this.setState({ text: "login" });

    // for testing
    this.props.navigation.navigate("home", {
      roleId: this.props.route.params.roleId,
    });

    fetch("", {
      method: "POST",
      mode: "cors",

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "ORIGIN",
      },

      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.success == true) {
          this.props.navigation.navigate("home");
        }
        console.log(response);
        this.setState((current) => ({
          ...current,
          success: response.success,
          error: response.error,
        }));
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#2471A3" barStyle="light-content" />
        <Text style={styles.txt}> Login to Your Account </Text>

        {<Text style={styles.errtxt}>{this.state.error}</Text>}

        <TextInput
          style={styles.input1}
          placeholder="Email"
          placeholderTextColor="#BFC9CA"
          onChangeText={(email) => {
            this.setState((current) => ({ ...current, email }));
          }}
        />

        <TextInput
          style={styles.input2}
          placeholder="Password"
          placeholderTextColor="#BFC9CA"
          secureTextEntry={true}
          onChangeText={(password) => {
            this.setState((current) => ({ ...current, password }));
          }}
        />

        <TouchableOpacity style={styles.button} onPress={this.Login}>
          <Text style={styles.text}> Login </Text>
        </TouchableOpacity>

        <Text
          style={{ position: "absolute", top: 380, color: "#71D3E7" }}
        ></Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("ChangePassword")}
          style={{ position: "absolute", top: 400 }}
        >
          <Text style={{ color: "#71D3E7" }}> Change Password</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

//Stylesheet for input fields
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  button: {
    borderRadius: 25,
    padding: 10,
    position: "absolute",
    top: 320,
    backgroundColor: "#71D3E7",
    height: 40,
    width: 300,
  },
  text: {
    fontSize: 15,

    textAlign: "center",
  },
  txt: {
    fontSize: 30,
    textAlign: "center",
    position: "absolute",
    top: 50,
    color: "#22AFD1",
  },

  input1: {
    width: 300,
    height: 45,
    backgroundColor: "#F1F7F8",
    padding: 15,
    borderRadius: 5,
    fontSize: 15,

    color: "#566573",
    position: "absolute",
    top: 190,
  },
  input2: {
    width: 300,
    height: 45,
    backgroundColor: "#F1F7F8",
    position: "absolute",
    top: 250,
    padding: 15,
    borderRadius: 5,
    fontSize: 15,
    // fontWeight: '500',
    color: "#566573",
  },
  errtxt: {
    color: "red",
    fontSize: 10,
    position: "absolute",
    top: 150,
  },
});
