import { View, Text, StyleSheet } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  text: { fontSize: 72 },
});
const Count = ({ count }) => {
  return (
    <View>
      <Text style={styles.text}>{count}</Text>
    </View>
  );
};

export const num = 50;

export default Count;
