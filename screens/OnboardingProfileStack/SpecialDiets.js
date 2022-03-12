import { StyleSheet, Text, View } from "react-native";
import React from "react";

import IconPill from "./IconPill";

const SpecialDiets = ({ currentUser }) => {
  return (
    <View style={styles.container}>
      <IconPill itemName={"vegetarian"} itemType={"diets"} currentUser={currentUser} />
      <IconPill itemName={"pescatarian"} itemType={"diets"} currentUser={currentUser} />
      <IconPill itemName={"vegan"} itemType={"diets"} currentUser={currentUser} />
      <IconPill itemName={"kosher"} itemType={"diets"} currentUser={currentUser} />
      <IconPill itemName={"low carb"} itemType={"diets"} currentUser={currentUser} />
      <IconPill itemName={"dairy-free"} itemType={"diets"} currentUser={currentUser} />
      <IconPill itemName={"+ More"} disabled={true} />
    </View>
  );
};

export default SpecialDiets;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    flexWrap: 'wrap',
  },

});