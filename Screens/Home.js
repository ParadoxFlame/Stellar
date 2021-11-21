import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
} from "react-native";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require("../Assets/bg.png")}
          style={styles.backgroundImage}
        >
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>Stellar</Text>
          </View>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate("IssLocation")}
          >
            <Text style={styles.routeText}>ISS Location</Text>
            <Text style={styles.knowMore}>{"Know More --->"}</Text>
            <Text style={styles.bgDigit}></Text>
            <Image
              source={require("../Assets/iss_icon.png")}
              style={styles.iconImage}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate("Meteors")}
          >
            <Text style={styles.routeText}>Meteors</Text>
            <Text style={styles.knowMore}>{"Know More --->"}</Text>
            <Text style={styles.bgDigit}></Text>
            <Image
              source={require("../Assets/meteor_icon.png")}
              style={styles.iconImage}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate("Updates")}
          >
            <Text style={styles.routeText}>Updates</Text>
            <Text style={styles.knowMore}>{"Know More --->"}</Text>
            <Text style={styles.bgDigit}></Text>
            <Image
              source={require("../Assets/rocket_icon.png")}
              style={styles.iconImage}
            ></Image>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  routeCard: {
    flex: 0.25,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    borderRadius: 30,
    backgroundColor: "black",
  },
  titleBar: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
  routeText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
    marginTop: 75,
    paddingLeft: 30,
  },
  knowMore: {
    paddingLeft: 30,
    color: "red",
    fontSize: 15,
  },
  bgDigit: {
    position: "absolute",
    color: "#6600db",
    fontSize: 150,
    right: 20,
    bottom: -15,
    zIndex: -1,
  },
  iconImage: {
    position: "absolute",
    height: 200,
    width: 200,
    resizeMode: "contain",
    right: 20,
    top: -80,
  },
});
