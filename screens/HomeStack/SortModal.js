import { StyleSheet, Text, View, Pressable, Button, Switch } from "react-native";
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
// import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import RadioButtonRN from 'radio-buttons-react-native';


const SortModal = ({changeSortBy}) => {
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
            textStyle={{fontSize: 22}}
            circleSize={24}
            // boxActiveBgColor={'#F1EBEA'}
            // boxDeactiveBgColor={'#F1EBEA'}
            selectedBtn={(e) => changeSortBy(e.label)}
        />
        {/* <RadioForm
            radio_props={radio_props}
            initial={0}
            buttonColor={'#f8b432'}
            selectedButtonColor={'#f8b432'}
            onPress={value => {this.setState({value}) } }
        /> */}
        {/* <RadioForm
            radio_props={radio_props}
            initial={0}
            formHorizontal={false}
            labelHorizontal={true}
            buttonColor={'#f8b432'}
            animation={true}
            onPress={(value) => {this.setState({value:value})}}
        /> */}

        {/* <View style={styles.top}>
            <Text style={styles.subtitle}>Apply dietary profile?</Text>
            <Switch
                trackColor={{ false: "gray", true: "#f8b432" }}
                thumbColor={isEnabled ? "white" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>

        <View style={styles.body}>
            <Text style={styles.header}>Dietary Restrictions</Text>
            <DietaryRestrictions />
        </View>

        <View style={styles.body}>
            <Text style={styles.header}>Special Diets</Text>
            <SpecialDiets />
        </View>

        <View style={styles.bottom}>
        </View> */}

        {/* <View style={styles.bottom}>
            <Button 
            title="APPLY FILTERS" 
            buttonStyle={styles.button} 
            titleStyle={styles.buttonTitle} 
            containerStyle={styles.buttonContainer} 
            onPress={toggleModal}
            />
        </View> */}

      
    </View>
  );
};

export default SortModal;

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    flex: 1,
    // top: 0,
    // height: "70%",
    alignItems: "stretch",
    justifyContent: "flex-start",
    // backgroundColor: 'white',
    paddingTop: "8%",
    paddingHorizontal: '12%',
    // flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#F1EBEA",
    borderRadius: 36,
    // marginLeft: 0,
    // marginTop: "24%",
    marginBottom: "24%",
  },
  xOut: {
    fontSize: 24,
    marginLeft: "4%",
    marginTop: "4%",
  },

});