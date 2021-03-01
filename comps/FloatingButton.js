import React from "react";
import { View, TouchableOpacity, Image } from "react-native";

export default (props) => (
  <TouchableOpacity onPress={props.onPress} style={props.style}>
    <View
      style={{
        backgroundColor: "#007acc",
        width: 50,
        height: 50,
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: { width: 12, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
      }}
    >
      <Image
        source={require("../assets/chat.png")}
        style={{ height: 27, width: 30, margin: 10 }}
      />
    </View>
  </TouchableOpacity>
);
