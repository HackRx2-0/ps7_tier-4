/* eslint-disable */
import React, { Component } from "react";
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

    this.state = {
      cameraPermission: false,
      photoAsBase64: {
        content: "",
        isPhotoPreview: false,
        photoPath: "",
      },
      currentPhotoAsBase64: {
        content: "",
        isPhotoPreview: false,
        photoPath: "",
      },
    };
  }

  render() {
    const { source, resizeMode, style, content } = this.props;
    // console.log("Camera Screen 417", content);
    return (
      <View style={styles.container}>
        <Toast ref="toast" position="center" />
        {/** PREVIEW */}
        <Image
          resizeMode={resizeMode}
          ref={`image`}
          source={{
            uri: `data:image/png;base64,${content}`,
          }}
          style={styles.imagePreview}
        />
        <View style={styles.usePhotoContainer}>
          <ScrollView horizontal={true}>
            <View>
              <TouchableOpacity>
                <Text style={styles.photoPreviewRepeatPhotoText}>
                  Retake photo
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Text style={styles.photoPreviewUsePhotoText}>Blur</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity>
                <Text style={styles.photoPreviewUsePhotoText}>Contrast</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity>
                <Text style={styles.photoPreviewUsePhotoText}>Brightness</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Text style={styles.photoPreviewUsePhotoText}>Upload</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Text style={styles.photoPreviewUsePhotoText}>Undo</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Text style={styles.photoPreviewUsePhotoText}>Redo</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent("CameraScreen", () => CameraScreen);
