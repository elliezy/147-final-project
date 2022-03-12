import { StyleSheet, Text, View } from "react-native";
import React from "react";

import IconPillFilter from "./IconPillFilter";

const DietaryRestrictionsFilter = ({ isEnabled, restrictions, chosenRestrictions, setChosenRestrictions, diets, chosenDiets, setChosenDiets }) => {

  return (
    <View style={styles.container}>
      <IconPillFilter 
        itemName={"milk"} 
        type={"restriction"} 
        isEnabled={isEnabled}
        restrictions={restrictions}
        chosenRestrictions={chosenRestrictions}
        setChosenRestrictions={setChosenRestrictions} 
        diets={diets}
        chosenDiets={chosenDiets}
        setChosenDiets={setChosenDiets}
      />
      <IconPillFilter 
        itemName={"eggs"} 
        type={"restriction"}  
        isEnabled={isEnabled}
        restrictions={restrictions}
        chosenRestrictions={chosenRestrictions}
        setChosenRestrictions={setChosenRestrictions} 
        diets={diets}
        chosenDiets={chosenDiets}
        setChosenDiets={setChosenDiets}
      />
      <IconPillFilter 
        itemName={"lactose"} 
        type={"restriction"}  
        isEnabled={isEnabled}
        restrictions={restrictions}
        chosenRestrictions={chosenRestrictions}
        setChosenRestrictions={setChosenRestrictions} 
        diets={diets}
        chosenDiets={chosenDiets}
        setChosenDiets={setChosenDiets}
      />
      <IconPillFilter 
        itemName={"fish"} 
        type={"restriction"}  
        isEnabled={isEnabled}
        restrictions={restrictions}
        chosenRestrictions={chosenRestrictions}
        setChosenRestrictions={setChosenRestrictions} 
        diets={diets}
        chosenDiets={chosenDiets}
        setChosenDiets={setChosenDiets}
      />
      <IconPillFilter 
        itemName={"shellfish"} 
        type={"restriction"}  
        isEnabled={isEnabled}
        restrictions={restrictions}
        chosenRestrictions={chosenRestrictions}
        setChosenRestrictions={setChosenRestrictions}
        diets={diets} 
        chosenDiets={chosenDiets}
        setChosenDiets={setChosenDiets}
      />
      <IconPillFilter 
        itemName={"peanuts"} 
        type={"restriction"}  
        isEnabled={isEnabled}
        restrictions={restrictions}
        chosenRestrictions={chosenRestrictions}
        setChosenRestrictions={setChosenRestrictions} 
        diets={diets}
        chosenDiets={chosenDiets}
        setChosenDiets={setChosenDiets}
      />
      <IconPillFilter 
        itemName={"soy"} 
        type={"restriction"}  
        isEnabled={isEnabled}
        restrictions={restrictions}
        chosenRestrictions={chosenRestrictions}
        setChosenRestrictions={setChosenRestrictions} 
        diets={diets}
        chosenDiets={chosenDiets}
        setChosenDiets={setChosenDiets}
      />
      <IconPillFilter 
        itemName={"gluten"} 
        type={"restriction"}  
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
        type={"restriction"}  
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

export default DietaryRestrictionsFilter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    flexWrap: 'wrap',
  },
});