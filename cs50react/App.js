import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
// import Count, { num } from "./Count";
import * as Location from "expo-location";
import * as Contacts from "expo-contacts";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

export default function App() {
  console.log("Hello");
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [contacts, setContacts] = useState(null);

  const signUp = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === "granted") {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.PHONE_NUMBERS],
      });
      let n = Math.floor(Math.random() * data.length);
      if (data.length > n) {
        const contact = data[n];

        console.log(contact.name);
        setContacts(contact.name);
      }
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location);
    })();
  }, []);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <Button title="Pick a random number" onPress={() => signUp()} />
      <Text>{contacts}</Text>
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
