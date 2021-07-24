/*eslint-disable*/
import React from 'react';
import {AppRegistry, View, Text, ProgressViewIOSComponent, TouchableOpacity} from 'react-native';
export default function TopNavigator (props) {
    const screenChange = () => {
        props.onPressScreenChange(0);
    }
      return (
          <TouchableOpacity onPress={screenChange} style={{flexDirection: 'row'}}>
              <Text style={{ fontSize: 30, paddingLeft: 5 }}>
              &lt;
              </Text>
          </TouchableOpacity>
      );
};

AppRegistry.registerComponent("TopNavigator", () => TopNavigator);