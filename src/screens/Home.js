import React from "react";
import { View, Text, StyleSheet, Button, StatusBar } from "react-native";

class Home extends React.Component {
  static navigationOptions = {
    title: "Home"
  };

  render() {
    console.log(`Props =`, this.props);
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Home</Text>
        <StatusBar backgroundColor="#f4511e" barStyle="light-content" />
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  text: { fontSize: 20 }
});
