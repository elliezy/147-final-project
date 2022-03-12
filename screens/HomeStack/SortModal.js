import { StyleSheet, Text, View, Pressable, Button, Switch } from "react-native";
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import RadioButtonRN from 'radio-buttons-react-native';


const SortModal = ({changeSortBy, sortBy}) => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.getParent()?.setOptions({ tabBarStyle: {backgroundColor: "#f8b432", paddingBottom: "4%",},});
    return () => navigation.getParent()?.setOptions({ tabBarStyle: {backgroundColor: "#f8b432", paddingBottom: "4%",}, });
  }, [navigation]);

  const data = [
    {label: 'Popularity'},
    {label: 'Wait time'},
    {label: 'Price: low to high'},
    {label: 'Price: high to low'}
    ];

  return (
    <View style={styles.container}>
        <RadioButtonRN
            data={data}
            activeColor={'#f8b432'}
            deactiveColor={'gray'}
            box={false}
            textStyle={{fontSize: 22, fontWeight: '400', color: 'black', paddingLeft: '2%'}}
            circleSize={24}
            selectedBtn={(e) => changeSortBy(e.label)}
            initial={ sortBy == "Popularity" ? 1 : sortBy == "Wait time" ? 2 : sortBy == "Price: low to high" ? 3 : sortBy == "Price: high to low" ? 4 : 1}
        />      
    </View>
  );
};

export default SortModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: "stretch",
    justifyContent: "flex-start",
    backgroundColor: "#F1EBEA",
    paddingTop: "6%",
    paddingBottom: "20%",
    paddingHorizontal: '10%',
  },
});