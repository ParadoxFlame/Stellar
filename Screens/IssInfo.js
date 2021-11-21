import React, { Component } from "react";
import { View, Text, StyleSheet, Alert, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import axios from "axios";

import MyHeader from "../Components/MyHeader";

export default class IssLocationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
    };
  }

  componentDidMount() {
    this.getIssLocation();
    try {
      setInterval(async () => {
        this.getIssLocation();
      }, 5000);
    } catch (e) {
      console.log(e);
    }
  }

  getIssLocation = () => {
    axios
      .get("https://api.wheretheiss.at/v1/satellites/25544")
      .then((response) => {
        this.setState({ location: response.data });
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  render() {
    if (Object.keys(this.state.location).length === 0) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Loading</Text>
        </View>
      );
    } else {
      return (
        <View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>
              Latitude: {this.state.location.latitude}
            </Text>
            <Text style={styles.infoText}>
              Longitude: {this.state.location.longitude}
            </Text>
            <Text style={styles.infoText}>
              Altitude (KM): {this.state.location.altitude}
            </Text>
            <Text style={styles.infoText}>
              Velocity (KM/H): {this.state.location.velocity}
            </Text>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  infoContainer: {
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    width: Dimensions.get("window").width - 50,
    height: Dimensions.get("window") - 49,
    padding: 30,
    alignSelf: "center",
    shadowColor: "#000",
    marginBottom: RFValue(10),
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
  },
  infoText: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
  },
});
