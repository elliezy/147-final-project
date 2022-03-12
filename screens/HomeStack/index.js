import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./Home";
import RestaurantPage from "./RestaurantPage";
import MoreInfo from "./MoreInfo";
import Gallery from "./Gallery";

const Stack = createStackNavigator();

const HomeStack = ({ currentUser }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Stack.Screen name="RestaurantPage" options={{
        headerStyle: {
          backgroundColor: '#f8b432',
        },
        headerTitleStyle: {
          fontWeight: '800',
          fontSize: 28,
          left: -26,
        },
        headerLeftContainerStyle: {
          paddingLeft: '2%',
        },
        headerBackTitleVisible: false,
        headerTintColor: 'black',
        headerTitleAlign: 'left',
      }}>
        {(props) => (
          <RestaurantPage
            {...props}
            currentUser={currentUser}
          />
        )}
      </Stack.Screen>

      <Stack.Screen name="MoreInfo" component={MoreInfo} options={{
        headerStyle: {
          backgroundColor: '#f8b432',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 28,
        },
        headerBackTitleVisible: false,
        headerTintColor: 'black',
        headerTitleAlign: 'left',
      }} />
      <Stack.Screen name="Gallery" component={Gallery}  options={{
        headerStyle: {
          backgroundColor: '#f8b432',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 28,
        },
        headerBackTitleVisible: false,
        headerTintColor: 'black',
        headerTitleAlign: 'left',
      }} />
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
