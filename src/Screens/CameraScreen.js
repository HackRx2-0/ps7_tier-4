/* eslint-disable */
import React, { Component, useState } from "react";
import {
  AppRegistry,
  View,
  Text,
  Platform,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Toast, { DURATION } from "react-native-easy-toast";

import styles from "../Styles/Screens/CameraScreen";
import OpenCV from "../NativeModules/OpenCV";

export default class CameraScreen extends Component {
  constructor(props) {
    super(props);

    this.onContrast = 2;
    this.onBrightness = 10;
    this.angle = 75;
    this.photoAsBase64 = {
      content: this.props.content,
      isPhotoPreview: false,
      photoPath: this.props.source,
    };

    this.addContrastandBrightnessMethod =
      this.addContrastandBrightnessMethod.bind(this);
    this.proceedWithContrastandBrightnessMethod =
      this.proceedWithContrastandBrightnessMethod.bind(this);

    this.addSkew = this.addSkew.bind(this);
    this.proceedWithSkew = this.proceedWithSkew.bind(this);
    this.state = {
      cameraPermission: false,
      currentPhotoAsBase64: {
        content: this.props.content,
        isPhotoPreview: false,
        photoPath: this.props.source,
      },
      screenWidth: Dimensions.get("window").width,
      screenHeight: Dimensions.get("window").height,
    };
  }
  addContrastandBrightnessMethod = (content, onContrast, onBrightness) => {
    return new Promise((resolve, reject) => {
      if (Platform.OS === "android") {
        OpenCV.brightnessOrContrast(
          content,
          onContrast,
          onBrightness,
          (error) => {
            // error handling
            console.log("[BrightnessORContrast  FUNC ERR!]", error);
          },
          (s) => {
            resolve(s);
          }
        );
      } else {
        OpenCV.brightnessOrContrast(content, onBrival, (error, dataArray) => {
          resolve(dataArray[0]);
        });
      }
    });
  };
  proceedWithContrastandBrightnessMethod() {
    const { content } = this.photoAsBase64;
    this.addContrastandBrightnessMethod(
      content,
      this.onContrast,
      this.onBrightness
    )
      .then((blurryPhoto) => {
        this.setState({
          currentPhotoAsBase64: {
            ...this.state.currentPhotoAsBase64,
            content: blurryPhoto,
          },
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

  addSkew(content, angle) {
    return new Promise((resolve, reject) => {
      if (Platform.OS === "android") {
        OpenCV.skewByAngle(
          content,
          angle,
          (error) => {
            // error handling
            console.log("[Skew  FUNC ERR!]", error);
          },
          (s) => {
            resolve(s);
          }
        );
      } else {
        OpenCV.skewByAngle(content, angle, (error, dataArray) => {
          resolve(dataArray[0]);
        });
      }
    });
  }

  proceedWithSkew() {
    const { content } = this.state.currentPhotoAsBase64;
    this.addSkew(content, this.angle)
      .then((blurryPhoto) => {
        this.setState({
          currentPhotoAsBase64: {
            ...this.state.currentPhotoAsBase64,
            content: blurryPhoto,
          },
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

  proceedWithUndo() {
    this.setState({currentPhotoAsBase64: this.photoAsBase64})
  }

  proceedWithUpload() {
    
  }

  render() {
    const { source, content, resizeMode } = this.props;

    if (this.state.currentPhotoAsBase64) {
      return (
        <View style={styles.container}>
          <Toast ref="toast" position="center" />
          {/** PREVIEW */}
          <Image
            resizeMode={resizeMode}
            ref={`image`}
            resizeMethod={"scale"}
            source={{
              uri: `data:image/png;base64,${this.state.currentPhotoAsBase64.content}`,
            }}
            style={styles.imagePreview}
          />
          <View style={styles.usePhotoContainer}>
            <ScrollView horizontal={true}>
              <View>
                <TouchableOpacity
                  onPress={() => this.proceedWithContrastandBrightnessMethod()}
                >
                  <Text style={styles.photoPreviewUsePhotoText}>Contrast</Text>
                </TouchableOpacity>
              </View>

              {/* <View>
                <TouchableOpacity
                  onPress={() => this.proceedWithContrastandBrightnessMethod()}
                >
                  <Text style={styles.photoPreviewUsePhotoText}>
                    Brightness
                  </Text>
                </TouchableOpacity>
              </View> */}

              <View>
                <TouchableOpacity onPress={() => this.proceedWithSkew()}>
                  <Text style={styles.photoPreviewUsePhotoText}>Rotate</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity onPress={() => this.proceedWithUndo()}>
                  <Text style={styles.photoPreviewUsePhotoText}>Undo</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity onPress={() => this.proceedWithUpload()}>
                  <Text style={styles.photoPreviewUsePhotoText}>Upload</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      );
    }
  }
}

AppRegistry.registerComponent("CameraScreen", () => CameraScreen);