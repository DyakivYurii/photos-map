import React from "react";
import { View, Text, StyleSheet } from "react-native";

class SignUp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Sign Up</Text>
      </View>
    );
  }
}

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  text: { fontSize: 20 }
});
