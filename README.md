# Clear-Scanner
![logo](https://camo.githubusercontent.com/4c64e0379b448981209cefc968c967242fee845f403a32f02dae6f94f01c27c3/68747470733a2f2f6261736963776562636861746170702e73332e61702d736f7574682d312e616d617a6f6e6177732e636f6d2f696d6167652e6a7067)\
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
### System Architecture
![System Architecture](https://basicwebchatapp.s3.ap-south-1.amazonaws.com/DEbate+Session.png)

---
### System Architecture
![Data Flow Diagram](https://basicwebchatapp.s3.ap-south-1.amazonaws.com/DEbate+Session.png)

---
### Team Tier-4
1. [Sanket Shevkar](https://github.com/sanketshevkar)
2. [Gatij Taranekar](https://github.com/gatij10)
3. [Aaryan Srivastava](https://github.com/aaryan11-hash)
4. [Pranav Pathare](https://github.com/Pranavpathare)
5. [Nishanth Bhat](https://github.com/nishanthbhat07)