import React, { Component } from "react";
import { View} from "react-native";
import TopNavigator from "./src/Components/TopNavigator";
import MainScreen from "./src/Screens/MainScreen";
import UserScreen from "./src/Screens/UserScreen";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentScreen: 'userscreen'
    };
  }

  onPressScreenChange(screen){
    this.setState({currentScreen: screen});
  }

  render() {

    if(this.state.currentScreen === 'userscreen'){
      return (
        <View style={{flex: 1}}>
          <TopNavigator />
        <UserScreen onPressScreenChange={()=>this.onPressScreenChange()}/>
        </View>
      );      
    }else if(this.state.currentScreen === 'mainscreen'){
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
