import { StyleSheet, Text, View } from "react-native";
import React from "react";

import IconPill from "./IconPill";

const DietaryRestrictions = ({ currentUser }) => {
  return (
    <View style={styles.container}>
      <IconPill itemName={"milk"} itemType={"restrictions"} currentUser={currentUser} />
      <IconPill itemName={"eggs"} itemType={"restrictions"} currentUser={currentUser} />
      <IconPill itemName={"lactose"} itemType={"restrictions"} currentUser={currentUser} />
      <IconPill itemName={"fish"} itemType={"restrictions"} currentUser={currentUser} />
      <IconPill itemName={"shellfish"} itemType={"restrictions"} currentUser={currentUser} />
      <IconPill itemName={"peanuts"} itemType={"restrictions"} currentUser={currentUser} />
      <IconPill itemName={"soy"} itemType={"restrictions"} currentUser={currentUser} />  
      <IconPill itemName={"gluten"} itemType={"restrictions"} currentUser={currentUser} />
      <IconPill itemName={"+ More"} disabled={true} />
    </View>
  );
};

export default DietaryRestrictions;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    flexWrap: 'wrap',
  },
});