import { StyleSheet, Text, View } from "react-native";
import React from "react";

import IconPillFilter from "./IconPillFilter";

const SpecialDietsFilter = ({ isEnabled, restrictions, chosenRestrictions, setChosenRestrictions, diets, chosenDiets, setChosenDiets }) => {

  return (
    <View style={styles.container}>
      <IconPillFilter 
        itemName={"vegetarian"} 
        type={"diet"} 
        isEnabled={isEnabled}
        restrictions={restrictions}
        chosenRestrictions={chosenRestrictions}
        setChosenRestrictions={setChosenRestrictions} 
        diets={diets}
        chosenDiets={chosenDiets}
        setChosenDiets={setChosenDiets} 
      />
      <IconPillFilter 
        itemName={"pescatarian"} 
        type={"diet"} 
        isEnabled={isEnabled}
        restrictions={restrictions}
        chosenRestrictions={chosenRestrictions}
        setChosenRestrictions={setChosenRestrictions} 
        diets={diets}
        chosenDiets={chosenDiets}
        setChosenDiets={setChosenDiets} 
      />
      <IconPillFilter 
        itemName={"vegan"} 
        type={"diet"} 
        isEnabled={isEnabled}
        restrictions={restrictions}
        chosenRestrictions={chosenRestrictions}
        setChosenRestrictions={setChosenRestrictions} 
        diets={diets}
        chosenDiets={chosenDiets}
        setChosenDiets={setChosenDiets} 
      />
      <IconPillFilter 
        itemName={"kosher"} 
        type={"diet"} 
        isEnabled={isEnabled}
        restrictions={restrictions}
        chosenRestrictions={chosenRestrictions}
        setChosenRestrictions={setChosenRestrictions} 
        diets={diets}
        chosenDiets={chosenDiets}
        setChosenDiets={setChosenDiets}
      />
      <IconPillFilter 
        itemName={"low carb"} 
        type={"diet"} 
        isEnabled={isEnabled}
        restrictions={restrictions}
        chosenRestrictions={chosenRestrictions}
        setChosenRestrictions={setChosenRestrictions} 
        diets={diets}
        chosenDiets={chosenDiets}
        setChosenDiets={setChosenDiets}
      />
      <IconPillFilter 
        itemName={"dairy-free"}  
        type={"diet"} 
        isEnabled={isEnabled}
        restrictions={restrictions}
        chosenRestrictions={chosenRestrictions}
        setChosenRestrictions={setChosenRestrictions} 
        diets={diets}
        chosenDiets={chosenDiets}
        setChosenDiets={setChosenDiets}
      />
      <IconPillFilter 
        itemName={"+ More"} 
        type={"diet"} 
        isEnabled={isEnabled}
        restrictions={restrictions}
        chosenRestrictions={chosenRestrictions}
        setChosenRestrictions={setChosenRestrictions} 
        diets={diets}
        chosenDiets={chosenDiets}
        setChosenDiets={setChosenDiets}
      />
    </View>
  );
};

export default SpecialDietsFilter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    flexWrap: 'wrap',
  },

});