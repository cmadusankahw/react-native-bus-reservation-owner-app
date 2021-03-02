import React from "react";
import { GiftedChat } from "react-native-gifted-chat";
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

type Props = {
  name?: string,
  email?: string,
  avatar?: string,
};

class ChatView extends React.Component<Props> {
  constructor(props) {
    super(props);
  }
  static navigationOptions = ({ navigation }) => ({
    title: "ChatView",
  });

  state = {
    messages: [],
  };

  get user() {
    return {
      name: this.props.route.params.name,
      email: this.props.route.params.email,
      avatar: this.props.route.params.avatar,
      id: firebaseSvc.uid,
      _id: firebaseSvc.uid, // need for gifted-chat
    };
  }

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
          <Text style={styles.headerText}> BuzzBus Chat </Text>
        </View>

        <View style={{ flex: 3 }}>
          <FocusAwareStatusBar barStyle="light-content" hidden={false} />
          <GiftedChat
            messages={this.state.messages}
            onSend={firebaseSvc.send}
            user={this.user}
            renderUsernameOnMessage={true}
          />
        </View>
      </SafeAreaView>
    );
  }

  componentDidMount() {
    firebaseSvc.refOn((message) =>
      this.setState((previousState) => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );
  }
  componentWillUnmount() {
    firebaseSvc.refOff();
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
});

export default ChatView;
