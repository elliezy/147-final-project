import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import PreferencesScreen from "./PreferencesScreen";
import QuestionsScreen from "./QuestionsScreen";
import ResultsScreen from "./ResultsScreen";

const Stack = createStackNavigator();

const RecommendationStack = ({ currentUser }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="PreferencesScreen">
        {(props) => (
          <PreferencesScreen
            {...props}
            currentUser={currentUser}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="QuestionsScreen" component={QuestionsScreen} />
      <Stack.Screen name="ResultsScreen">
        {(props) => (
          <ResultsScreen
            {...props}
            currentUser={currentUser}
          />
        )}
      </Stack.Screen>
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
