import { StyleSheet, Text, View, Pressable, Button, Switch } from "react-native";
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import DietaryRestrictionsFilter from "./DietaryRestrictionsFilter";
import SpecialDietsFilter from "./SpecialDietsFilter";


const FilterModal = ({isEnabled, setIsEnabled, restrictions, chosenRestrictions, setChosenRestrictions, diets, chosenDiets, setChosenDiets}) => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.getParent()?.setOptions({ tabBarStyle: {backgroundColor: "#f8b432", paddingBottom: "4%",},});
    return () => navigation.getParent()?.setOptions({ tabBarStyle: {backgroundColor: "#f8b432", paddingBottom: "4%",}, });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.text}>Apply dietary profile?</Text>
        <Switch
          trackColor={{ false: "gray", true: "#f8b432" }}
          thumbColor={isEnabled ? "white" : "lightgrey"}
          ios_backgroundColor="#3e3e3e"
          value={isEnabled}
          onValueChange={() => setIsEnabled(!isEnabled)}
          style={{ transform: [{ scaleX: .9 }, { scaleY: .9 }] }}
        />
      </View>
      
      <View style={styles.body}>
        <Text style={styles.header}>Dietary Restrictions</Text>
        <DietaryRestrictionsFilter 
          isEnabled={isEnabled}
          restrictions={restrictions}
          chosenRestrictions={chosenRestrictions}
          setChosenRestrictions={setChosenRestrictions} 
          diets={diets}
          chosenDiets={chosenDiets}
          setChosenDiets={setChosenDiets} 
        />
      </View>

      <View style={styles.body}>
        <Text style={styles.header}>Special Diets</Text>
        <SpecialDietsFilter 
          isEnabled={isEnabled}
          restrictions={restrictions}
          chosenRestrictions={chosenRestrictions}
          setChosenRestrictions={setChosenRestrictions} 
          diets={diets}
          chosenDiets={chosenDiets}
          setChosenDiets={setChosenDiets} 
        />
      </View>

      <View style={styles.bottom}>
      </View>
      
    </View>
  );
};

export default FilterModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: "#F1EBEA",
    paddingTop: "10%",
    paddingBottom: "20%",
    paddingHorizontal: '2%',
  },

  top: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: '6%',
  },
  text: {
    fontSize: 22,
  },

  body: {
    flex: 4,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: "6%",
    paddingBottom: '6%',
  },

  bottom: {
    flex: 2,
  },
});