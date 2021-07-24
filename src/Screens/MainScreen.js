import React, { Component } from "react";
import RNFS from "react-native-fs";
import EditScreen from "./CameraScreen";
import { AppRegistry, StyleSheet, View, Button, ActivityIndicator, TouchableOpacity, Text} from "react-native";
import RNDocumentScanner from "react-native-document-scanner";

export default class MainScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCapturing: false,
      isCropping: false,
      isValidatingImageCropping: false,
      image: null,
      content: "",
    };
  }

  /**
   * When crop button is clicked
   */
  _handlePressCrop = () => {
    this.setState({ isValidatingImageCropping: true }, () => {
      setTimeout(this._startImageCropping, 0);
    });
  };

  /**
   * Start image cropping
   */
  _startImageCropping = () => {
    this.scanner.cropImage().then(({ image }) => {
      console.log("44", image);
      RNFS.readFile(image, "base64").then((res) => {
        console.log(res);
        this.setState({
          image,
          isValidatingImageCropping: false,
          content: res,
        });
      });
    });
  };

  render() {
    const { isCapturing, isCropping, isValidatingImageCropping, image } =
      this.state;

    if (image === null) {
      return (
        <View style={styles.container}>
          {/* Document scanner */}
          <RNDocumentScanner
            ref={(ref) => (this.scanner = ref)}
            onStartCapture={() => this.setState({ isCapturing: true })}
            onEndCapture={() =>
              this.setState({ isCapturing: false, isCropping: true })
            }
            androidCameraPermissionOptions={{
              title: "Permission to use camera",
              message: "We need your permission to use your camera",
              buttonPositive: "Ok",
              buttonNegative: "Cancel",
            }}
          />

         <View style={styles.buttonStyleContainer} elevation={18}>
         <TouchableOpacity onPress={this._handlePressCrop} style={{flex: 1, height: 40, marginTop: 10 }}>
    <Text style={{textAlign: "center", color: 'white', fontSize: 17, fontFamily: 'Maven Pro, sans-serif'}}>Edit</Text>
</TouchableOpacity>
<TouchableOpacity style={{flex: 1, height: 40, marginTop: 10 }}>
    <Text style={{textAlign: "center", color: 'white', fontSize: 17, fontFamily: 'Maven Pro, sans-serif'}}>Import</Text>
</TouchableOpacity>
<TouchableOpacity style={{flex: 1, height: 40, marginTop: 10 }}>
    <Text style={{textAlign: "center", color: 'white', fontSize: 17, fontFamily: 'Maven Pro, sans-serif'}}>Docs</Text>
</TouchableOpacity>
         </View>

          {/* Loading during capture */}
          {(isCapturing || isValidatingImageCropping) && (
            <ActivityIndicator style={styles.loading} animating />
          )}
        </View>
      );
    } else {
      return (
        <EditScreen
          style={styles.container}
          source={image}
          content={this.state.content}
          resizeMode="contain"
        />
      );
    }
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

AppRegistry.registerComponent("MainScreen", () => MainScreen);
