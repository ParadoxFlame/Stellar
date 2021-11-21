import * as React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import HomeScreen from "../Screens/Home";

class MyHeader extends React.Component {
  render() {
    return (
      <View style={myStyles.textContainer}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Home")}
        >
          <Text style={myStyles.myText}>Return to Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const myStyles = StyleSheet.create({
  textContainer: {
    height: RFValue(50),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    marginBottom: RFValue(1),
  },
  myText: {
    color: "#6600db",
    fontWeight: "300",
    fontSize: RFValue(20),
  },
});

export default MyHeader;
