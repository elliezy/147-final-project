import { StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeStack from "./screens/HomeStack";
import RecommendationStack from "./screens/RecommendationStack";
import OnboardingProfileStack from "./screens/OnboardingProfileStack";

import { useNavigation, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { LogBox } from 'react-native';


const Tab = createBottomTabNavigator();
LogBox.ignoreAllLogs()

export default function App() {
  const [currentUser, setCurrentUser] = useState("");

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'HomeStack') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'RecommendationStack') {
              iconName = focused ? 'restaurant' : 'restaurant-outline';
            } else if (route.name === 'OnboardingProfileStack') {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },

          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'white',
          tabBarActiveBackgroundColor: '#f8b432',
          tabBarInactiveBackgroundColor: '#f8b432',
          tabBarStyle: {backgroundColor: "#f8b432", paddingBottom: "4%",},
          tabBarShowLabel: false,
          headerShown: false,
        })}
        initialRouteName="OnboardingProfileStack"
      >

        <Tab.Screen name="HomeStack"> 
          {(props) => (
            <HomeStack
              {...props}
              currentUser={currentUser}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="RecommendationStack"> 
          {(props) => (
            <RecommendationStack
              {...props}
              currentUser={currentUser}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="OnboardingProfileStack"> 
          {(props) => (
            <OnboardingProfileStack
              {...props}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          )}
        </Tab.Screen>

      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8b432",
    alignItems: "center",
    justifyContent: "center"
  }
});