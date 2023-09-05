import { View, Text, StyleSheet } from "react-native";
import React from "react";
import PropTypes from "prop-types";
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
Count.propTypes = {
  count: PropTypes.number.isRequired,
};
// static propTypes = {
//     count: PropTypes.number.isRequired
// }
export const num = 50;

export default Count;
