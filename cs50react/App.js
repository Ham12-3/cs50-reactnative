import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
// import Count, { num } from "./Count";
// import * as Location from "expo-location";
// import * as Contacts from "expo-contacts";
// import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
// import { Magnetometer } from "expo-sensors";
import { Video, ResizeMode } from "expo-av";
import { Audio } from "expo-av";
export default function App() {
  const video = React.useRef(null);
  const [status, setStatus] = useState({});

  // const resetAsync = async () => {
  //   await video.stopAsync();
  //   await video.setPositionAsync(0);
  // };
  // const playAsync = async () => {
  //   await video.replayAsync();
  // };
  const setAudioModeAsync = async () => {
    await Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
      allowsRecordingIOS: true,
    });
  };
  useEffect(() => {
    setAudioModeAsync();
  }, []);

  // const [{ x, y, z }, setData] = useState({
  //   x: 0,
  //   y: 0,
  //   z: 0,
  // });
  // useEffect(() => {
  //   Magnetometer.addListener((result) => {
  //     setData(result);
  //   });
  // }, []);
  // let theta = "0rad";
  // if ({ x, y, z }) {
  //   theta = Math.atan(-x / y);
  // } else if (y > 0) {
  //   theta += Math.PI;
  // } else {
  //   theta += Math.PI * 2;
  // }
  // console.log(theta);
  // const [location, setLocation] = useState(null);
  // const [errorMsg, setErrorMsg] = useState(null);
  // const [contacts, setContacts] = useState(null);

  // const signUp = async () => {
  //   const { status } = await Contacts.requestPermissionsAsync();
  //   if (status === "granted") {
  //     const { data } = await Contacts.getContactsAsync({
  //       fields: [Contacts.Fields.PHONE_NUMBERS],
  //     });
  //     let n = Math.floor(Math.random() * data.length);
  //     if (data.length > n) {
  //       const contact = data[n];

  //       console.log(contact.name);
  //       setContacts(contact.name);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== "granted") {
  //       setErrorMsg("Permission to access location was denied");
  //       return;
  //     }

  //     let location = await Location.getCurrentPositionAsync({});
  //     setLocation(location);
  //     console.log(location);
  //   })();
  // }, []);
  return (
    <View style={styles.container}>
      <TouchableHighlight
      // onPress={() => {
      //   playAsync();
      // }}
      >
        <View>
          <Text
            style={{
              color: "yellow",
            }}
          >
            {" "}
            The Video
          </Text>
          <Video
            ref={video}
            style={{ width: 400, height: 400 }}
            source={{
              uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            }}
            isLooping
            useNativeControls
            resizeMode={ResizeMode.COVER}
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          />
        </View>
      </TouchableHighlight>

      <Button
        title={status.isPlaying ? "Pause" : "Play"}
        onPress={() =>
          status.isPlaying
            ? video.current.pauseAsync()
            : video.current.playAsync()
        }
      />

      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Text>{JSON.stringify(theta)}</Text> */}
      {/* <Image
        source={require("./images/compass-needle.png")}
        style={{
          height: 420,
          width: 420,
          opacity: 0.65,
          alignItems: "center",
          justifyContent: "center",
          transform: [{ rotate: theta.toString() + "rad" }],
        }}
      /> */}

      {/* <Button title="Pick a random number" onPress={() => signUp()} />
      <Text>{contacts}</Text> */}
      {/* <Expo.MapView
        style={{ flex: 1 }}
        provider={Expo.MapView.PROVIDER_GOOGLE}
      /> */}

      {/* {location ? (
        <MapView
          size={20}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          provider={PROVIDER_GOOGLE}
          style={{
            width: 500,
            height: 500,
          }}
          loadingEnabled={true}
        >
          <Marker coordinate={location.coords} title="You are here" />
        </MapView>
      ) : (
        <View />
      )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
});

// REDUX
// ACTION => REDUCER => UPDATE STORE

const logIn = (dispatch) => {};
