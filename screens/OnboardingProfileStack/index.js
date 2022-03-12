import { StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProfileScreen from "./ProfileScreen";
import OnboardingSwiper from "./OnboardingSwiper";
import RegisterScreen from "./RegisterScreen";
import LocationScreen from "./LocationScreen";
import SettingsScreen from "./SettingsScreen";

const Stack = createStackNavigator();

const OnboardingProfileStack = ({ currentUser, setCurrentUser }) => {
  const [finishedOnboarding, setFinishedOnboarding] = useState(false);

  // Onboarding Screens
  if (!finishedOnboarding) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="OnboardingSwiper" component={OnboardingSwiper} />
        <Stack.Screen name="RegisterScreen">
          {(props) => (
            <RegisterScreen
              {...props}
              setCurrentUser={setCurrentUser}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="LocationScreen">
          {(props) => (
            <LocationScreen
              {...props}
              setFinishedOnboarding={setFinishedOnboarding}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    );
  }

  // Profile Screens
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="ProfileScreen">
        {(props) => (
          <ProfileScreen
            {...props}
            currentUser={currentUser}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default OnboardingProfileStack;

const styles = StyleSheet.create({});