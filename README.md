# Clear-Scanner
![logo](https://hackrx.s3.ap-south-1.amazonaws.com/logo.png)\
Clear Scanner is an IN-APP document scanner built using OPEN-CV and React Native. Users can Scan, Crop the documents. Its also has skew-tilt corrrection in-built. Edit and enhance the quality of the documents by changing brightness, 360 degree rotation, undo changes etc.
Using the nodejs server and the OCR API, text and important information can be extracted from the documents.
An organisation using this can set up a dashboard using which these scanned documents can be used for process like KYC.

### Prerequisites
1. [NodeJs](https://nodejs.org/en/download/)
2. [Android SDK](https://developer.android.com/studio)
3. [React Native](https://reactnative.dev/)
3. [OpenCV](https://opencv.org/android/)


---
### Local Dev Setup

#### Install node modules
```sh
yarn
```

#### Setup android build code
```sh
cd android
chmod +x gradlew
./gradlew clean
cd ..
```
---

### Open blacklist.js
```sh
cd node_modules/metro-config/defaults/blacklist.js
```

### Change the following part

From
```sh

var sharedBlacklist = [
  /node_modules[/\\]react[/\\]dist[/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
```

To
```sh
 var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
```
#### Note: Change this whenever you install a new node module or do `yarn install` or `npm install`

### Start the project on your Android device

From the project root run
```sh
npx react-native run-android
```

---
### Algorithms Used
[Skew and Tilt](https://gist.github.com/nishanthbhat07/ee06c232c0f1d052b382315afaf37802)
[Contrast](https://gist.github.com/nishanthbhat07/8910cfebd9f5d7ca3c817803f57ee3a3)
[Crop](https://gist.github.com/nishanthbhat07/41a528c274ec69d511617fd0ac4025b7)
[Rotation](https://gist.github.com/nishanthbhat07/9d87ab7a4bb779b7fb8e4ffdd0b6d5b4)
[Border detection and correction](https://gist.github.com/nishanthbhat07/4ce3206f784734282ac5e817dd6366af)

---
### Demo
![Demo](https://hackrx.s3.ap-south-1.amazonaws.com/WhatsApp+Video+2021-07-24+at+08.26.38.gif)

---
### System Architecture
![System Architecture](https://hackrx.s3.ap-south-1.amazonaws.com/Archi.png)

---
### Data Flow Diagram
![Data Flow Diagram](https://hackrx.s3.ap-south-1.amazonaws.com/DFD.png)

---
### Team Tier-4
1. [Sanket Shevkar](https://github.com/sanketshevkar)
2. [Gatij Taranekar](https://github.com/gatij10)
3. [Aaryan Srivastava](https://github.com/aaryan11-hash)
4. [Pranav Pathare](https://github.com/Pranavpathare)
5. [Nishanth Bhat](https://github.com/nishanthbhat07)
