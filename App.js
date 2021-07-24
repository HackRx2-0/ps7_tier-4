import React, { Component } from "react";
import { View} from "react-native";
import TopNavigator from "./src/Components/TopNavigator";
import MainScreen from "./src/Screens/MainScreen";
import UserScreen from "./src/Screens/UserScreen";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentScreen: 0
    };
  }

  onPressScreenChange(screen){
    this.setState({currentScreen: screen});
  }

  render() {

    if(this.state.currentScreen === 0){
      return (
        <View style={{flex: 1}}>
          <TopNavigator />
        <UserScreen onPressScreenChange={()=>this.onPressScreenChange()}/>
        </View>
      );      
    }else if(this.state.currentScreen === 1){
      <View style={{flex: 1}}>
          <TopNavigator onPressScreenChange={()=>this.onPressScreenChange()}/>
        <MainScreen/>
        </View>
    }else{
      return(
        <View style={{flex: 1}}>
          <TopNavigator onPressScreenChange={()=>this.onPressScreenChange()}/>
        <MainScreen/>
        </View>
      )
    }
    }
}
