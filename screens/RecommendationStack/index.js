import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import PreferencesScreen from "./PreferencesScreen";
import QuestionsScreen from "./QuestionsScreen";
import ResultsScreen from "./ResultsScreen";
import RestaurantPage from "../HomeStack/RestaurantPage";
import MoreInfo from "../HomeStack/MoreInfo";


const Stack = createStackNavigator();

const RecommendationStack = ({ currentUser }) => {
  return (
    <Stack.Navigator
      // screenOptions={{
      //   headerShown: false
      // }}
    >
      <Stack.Screen name="PreferencesScreen" options={{headerShown: false}}>
        {(props) => (
          <PreferencesScreen
            {...props}
            currentUser={currentUser}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="QuestionsScreen" component={QuestionsScreen} options={{headerShown: false}}/>
      <Stack.Screen name="ResultsScreen" options={{headerShown: false}}>
        {(props) => (
          <ResultsScreen
            {...props}
            currentUser={currentUser}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="RestaurantPage" options={{
        headerStyle: {
          backgroundColor: '#f8b432',
          // backgroundColor: 'yellow',
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
    </Stack.Navigator>
  );
};

export default RecommendationStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
