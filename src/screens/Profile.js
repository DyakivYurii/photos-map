import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from "react-navigation";

import ProfileInfo from "../components/Profile/ProfileInfo";

class Profile extends React.Component {
  static navigationOptions = {
    title: "Profile"
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ProfileInfo />
        {/* <UserIcon /> */}
        {/* <Text style={styles.text}>Profile</Text> */}
      </SafeAreaView>
    );
  }
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  text: { fontSize: 20 }
});
