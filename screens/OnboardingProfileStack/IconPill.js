import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Button } from 'react-native-elements';

import { db } from "../../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const IconPill = ({ itemName, itemType, currentUser, disabled=false }) => {
  const [pressed, setPressed] = React.useState(false);

  const toggleRestriction = async () => {
    try {
      const docRef = doc(db, "users", currentUser);
      const docSnap = await getDoc(docRef);
      const previous = docSnap.data().restrictions;
      if (!previous.includes(itemName)) {
        previous.push(itemName);
        await updateDoc(docRef, {
          restrictions: previous
        });
      } else {
        var filtered = previous.filter(e => e !== itemName)
        await updateDoc(docRef, {
          restrictions: filtered
        });
      }
    } catch (err) {
      console.log(err);
    }
  }
  const toggleDiet = async () => {
    try {
      const docRef = doc(db, "users", currentUser);
      const docSnap = await getDoc(docRef);
      const previous = docSnap.data().diets;
      if (!previous.includes(itemName)) {
        previous.push(itemName);
        await updateDoc(docRef, {
          diets: previous
        });
      } else {
        var filtered = previous.filter(e => e !== itemName)
        await updateDoc(docRef, {
          diets: filtered
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <View>
      <Button 
        title={itemName}
        buttonStyle={(pressed && !disabled) ? styles.buttonPressed : styles.button} 
        titleStyle={(pressed && !disabled) ? styles.textPressed : styles.text} 
        containerStyle={styles.buttonContainer} 
        onPress={() => {
          setPressed(!pressed);
          if (itemType == "restrictions" && !disabled) {
            toggleRestriction();
          } else if (itemType == "diets" && !disabled) {
            toggleDiet();
          }
        }}
      />
    </View>
  );
};

export default IconPill;

const styles = StyleSheet.create({
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
    padding: '1.5%',
  },
  textPressed: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    padding: '1.5%',
  },
  buttonContainer: {
    padding: '4%',
  },

});