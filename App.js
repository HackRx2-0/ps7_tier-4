import React, { Component } from "react";
import { View} from "react-native";
import TopNavigator from "./src/Components/TopNavigator";
import MainScreen from "./src/Screens/MainScreen";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
      return (
        <View style={{flex: 1}}>
          <TopNavigator />
        <MainScreen/>
        </View>
      );
    }
}
