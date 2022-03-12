import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Button } from 'react-native-elements';

import { db } from "../../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const IconPillFilter = ({ itemName, type, isEnabled, restrictions, chosenRestrictions, setChosenRestrictions, diets, chosenDiets, setChosenDiets}) => {
  const [pressed, setPressed] = React.useState(false);

  useEffect (() => {
    if (type == "diet") {
      if (chosenDiets.includes(itemName)) {
        setPressed(true);
      } 
    } else if (type == "restriction") {
      if (chosenRestrictions.includes(itemName)) {
        setPressed(true);
      } 
    }
  }, []); 

  const handlePress = () => {
    if (!pressed) {
      if (type == "restriction" && !chosenRestrictions.includes(itemName) && itemName != "+ More") {
        let updated = [...[itemName], ...chosenRestrictions]
        setChosenRestrictions(updated)
      } else if (type == "diet" && !chosenDiets.includes(itemName) && itemName != "+ More") {
        let updated = [...[itemName], ...chosenDiets]
        setChosenDiets(updated)
      }
    } else {
      if (type == "restriction" && chosenRestrictions.includes(itemName) && itemName != "+ More") {
        chosenRestrictions.splice(chosenRestrictions.indexOf(itemName), 1)
        setChosenRestrictions(chosenRestrictions)
      } else if (type == "diet" && chosenDiets.includes(itemName) && itemName != "+ More") {
        chosenDiets.splice(chosenDiets.indexOf(itemName), 1)
        setChosenDiets(chosenDiets)
      }
    }
    setPressed(!pressed)
  }

  return (
    <View style={styles.container}>
      <Button 
        title={itemName}
        buttonStyle={
          type == "diet" ? (chosenDiets.includes(itemName) || (isEnabled && diets.includes(itemName))) ? styles.buttonPressed : styles.button : 
          type == "restriction" ? (chosenRestrictions.includes(itemName) || (isEnabled && restrictions.includes(itemName))) ? styles.buttonPressed : styles.button :
          null
        } 
        titleStyle={
          type == "diet" ? (chosenDiets.includes(itemName) || (isEnabled && diets.includes(itemName))) ? styles.textPressed : styles.text : 
          type == "restriction" ? (chosenRestrictions.includes(itemName) || (isEnabled && restrictions.includes(itemName))) ? styles.textPressed : styles.text :
          null
        } 
        containerStyle={styles.buttonContainer} 
        onPress={handlePress}
      />
    </View>
  );
};

export default IconPillFilter;

const styles = StyleSheet.create({
  container: {
  },

  button: {
    backgroundColor: 'white',
    borderColor: 'grey',  
    borderWidth: 2, 
    borderRadius: 50,  
  },
  buttonPressed: {
    backgroundColor: '#f8b432',
    borderColor: '#f8b432',  
    borderWidth: 2, 
    borderRadius: 50,  
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: 'grey',
    padding: '2%',
  },
  textPressed: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    padding: '2%',
  },
  buttonContainer: {
    padding: '4%',
  },

});