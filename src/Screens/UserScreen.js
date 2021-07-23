import React, { Component } from "react";
import RNFS from "react-native-fs";
import EditScreen from "./CameraScreen";
import { AppRegistry, StyleSheet, View, Button, ActivityIndicator, TouchableOpacity, Text, ScrollView} from "react-native";
import RNDocumentScanner from "react-native-document-scanner";

export default class UserScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  screenChange(){
      this.props.onPressScreenChange('mainscreen')
  }

  render() {
    return (
        <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#5c2d90'}}>
                    <View style={{borderWidth: 1, backgroundColor: 'white', width: '100%',
    marginBottom: 40}}>
            <Text style={{fontSize: 40, textAlign: 'center', paddingRight: 10, paddingBottom: 10}}>Hi, Sanket Shevkar</Text>
            <TouchableOpacity onPress={()=>this.screenChange()} style={{height: 50, borderRadius: 10, width: 100, backgroundColor: '#fdca7b', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', margin: 10}}>
                  <Text style={styles.photoPreviewUsePhotoText}>
                    Scan
                  </Text>
                </TouchableOpacity>
        </View>
            <ScrollView>
            <View style={{borderWidth: 1, backgroundColor: 'white',
    borderRadius: 4,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    height: 180,
    width: 300,
    elevation: 2,
    margin: 40}}>
            <Text style={{fontSize: 40, textAlign: 'right', paddingRight: 10, paddingBottom: 10}}>Aadhar Card</Text>
            <Text style={{fontSize: 20, textAlign: 'right', paddingRight: 10, paddingBottom: 10}}>15-July-2021</Text>
            <TouchableOpacity style={{height: 50, borderRadius: 10, width: 100, backgroundColor: '#fdca7b', justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-end', margin: 10}}>
                  <Text style={styles.photoPreviewUsePhotoText}>
                    View
                  </Text>
                </TouchableOpacity>
        </View>

        <View style={{borderWidth: 1, backgroundColor: 'white',
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    height: 180,
    width: 300,
    elevation: 2,
    margin: 40}}>
            <Text style={{fontSize: 40, textAlign: 'right', paddingRight: 10, paddingBottom: 10}}>Pan Card</Text>
            <Text style={{fontSize: 20, textAlign: 'right', paddingRight: 10, paddingBottom: 10}}>15-Sept-2020</Text>
            <TouchableOpacity style={{height: 50, borderRadius: 10, width: 100, backgroundColor: '#fdca7b', justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-end', margin: 10}}>
                  <Text style={styles.photoPreviewUsePhotoText}>
                    View
                  </Text>
                </TouchableOpacity>
        </View>

        <View style={{borderWidth: 1, backgroundColor: 'white',
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    height: 180,
    width: 300,
    elevation: 2,
    margin: 40}}>
            <Text style={{fontSize: 40, textAlign: 'right', paddingRight: 10, paddingBottom: 10}}>Voter ID</Text>
            <Text style={{fontSize: 20, textAlign: 'right', paddingRight: 10, paddingBottom: 10}}>10-Apr-2021</Text>
            <TouchableOpacity style={{height: 50, borderRadius: 10, width: 100, backgroundColor: '#fdca7b', justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-end', margin: 10}}>
                  <Text style={styles.photoPreviewUsePhotoText}>
                    View
                  </Text>
                </TouchableOpacity>
        </View>

        <View style={{borderWidth: 1, backgroundColor: 'white',
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    height: 180,
    width: 300,
    elevation: 2,
    margin: 40}}>
            <Text style={{fontSize: 40, textAlign: 'right', paddingRight: 10, paddingBottom: 10}}>Class 10</Text>
            <Text style={{fontSize: 20, textAlign: 'right', paddingRight: 10, paddingBottom: 10}}>15-Sept-2020</Text>
            <TouchableOpacity style={{height: 50, borderRadius: 10, width: 100, backgroundColor: '#fdca7b', justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-end', margin: 10}}>
                  <Text style={styles.photoPreviewUsePhotoText}>
                    View
                  </Text>
                </TouchableOpacity>
        </View>
        </ScrollView>
        </View>
    );
  }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonStyleContainer: {
    flexDirection: 'row',
    backgroundColor: '#5c2d90',
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 9,
},
shadowOpacity: 0.48,
shadowRadius: 11.95,
   },
  loading: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2,
  },
});

AppRegistry.registerComponent("UserScreen", () => UserScreen);