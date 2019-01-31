import React from "react";
import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator
} from "react-navigation";

import Authorize from "../screens/Authorize";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import SignUp from "../screens/SignUp";
import SignIn from "../screens/SingIn";
import AuthLoading from "../screens/AuthLoading";

const HomeStack = createStackNavigator(
  {
    Home: Home
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const ProfileStack = createStackNavigator(
  {
    Profile: Profile
  },
  {
    initialRouteName: "Profile",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const AppDrawerNavigation = createDrawerNavigator(
  {
    Home: HomeStack,
    Profile: ProfileStack
  },
  {
    initialRouteName: "Home"
  }
);

const AuthStack = createStackNavigator(
  {
    Authorize: Authorize,
    SignUp: SignUp,
    SignIn: SignIn
  },
  {
    initialRouteName: "Authorize",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const MainAppSweetchNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    App: AppDrawerNavigation,
    Auth: AuthStack
  },
  {
    initialRouteName: "AuthLoading"
  }
);

const RootNavigation = createAppContainer(MainAppSweetchNavigator);

class AppNavigation extends React.Component {
  render() {
    return <RootNavigation />;
  }
}

export default AppNavigation;
