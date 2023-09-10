<script src="http://localhost:8097"></script>;
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import Count, { num } from "./Count";

import Expo from "expo";
export default function App() {
  console.log("Hello");
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Expo.MapView
        style={{ flex: 1 }}
        provider={Expo.MapView.PROVIDER_GOOGLE}
      />
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
