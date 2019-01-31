import React from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  AsyncStorage
} from "react-native";

class AuthLoading extends React.Component {
  componentDidMount() {
    this._checkUserAuthentification();
  }

  _checkUserAuthentification = async () => {
    try {
      const userToken = await AsyncStorage.getItem("userToken");
      this.props.navigation.navigate(userToken ? "App" : "Auth");
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }
}

export default AuthLoading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
