import React from "react";
import { View, Text, StyleSheet, Button, AsyncStorage } from "react-native";

class Authorize extends React.Component {
  static navigationOptions = {
    title: "Authorize"
  };

  _setUserToBase = () => async () => {
    try {
      await AsyncStorage.setItem("userToken", "Token");
      this.props.navigation.navigate("AuthLoading");
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Authorize</Text>
        <Button title="Sign In" onPress={this._setUserToBase()} />
      </View>
    );
  }
}

export default Authorize;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  text: { fontSize: 20 }
});
