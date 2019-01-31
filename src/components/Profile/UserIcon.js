import React from "react";
import { View, Image, StyleSheet } from "react-native";

class UserIcon extends React.Component {
  render() {
    return (
      <View style={styles.userIconContainer}>
        <Image
          source={require("../../assets/images/userIcon.jpg")}
          style={styles.userIcon}
        />
      </View>
    );
  }
}

export default UserIcon;

const styles = StyleSheet.create({
  userIconContainer: {
    margin: 20,
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: "#303030",
    overflow: "hidden"
  },
  userIcon: {
    width: 100,
    height: 100
  }
});
