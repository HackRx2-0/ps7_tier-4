/*eslint-disable*/
import React from 'react';
import {AppRegistry, View, Text} from 'react-native';
export default function TopNavigator () {
      return (
          <View style={{flexDirection: 'row'}}>
              <Text style={{ fontSize: 30, paddingLeft: 5 }}>
              &lt;
              </Text>
          </View>
      );
};

AppRegistry.registerComponent("TopNavigator", () => TopNavigator);