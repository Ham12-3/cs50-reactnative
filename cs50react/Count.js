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

// //react-navigation
// createStackNavigator ({
//   route: ''
// })

// const AppNavigator = createSwitchNavigator({
//   AddContact:AddCcontactScreen,
//   ContactList:ContactListScreen,

// {
//   tabBarOPtions {
//     activeTintColor:
//   }
// }
// // tabnavigator
// createBottomNavigstor
// atb
// headerTintCololr
// // })
// push
// createNativeStackNavigator
// screenProps
{
  /* <AppNavigator screenProps={{ contact: "name" }} />; */
}

// this.props.navigation.navigate('Ádd contacts')

// this.props.navigation.getparam();
// stackNaviagtor
// headerTitle
// header
// static navigationOptions {
//   headerTitle:
//   headerRight:

// }
// this.props.naviagtion.goBack
// static navigationOptions =({navigation })=> {
//   return {
//     headerttitle: ""
// headerRight:''
// headerLeft:''
//   }
// }
