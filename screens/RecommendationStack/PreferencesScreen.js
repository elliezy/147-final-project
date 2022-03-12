import { StyleSheet, Text, View, Pressable, ScrollView, Switch } from "react-native";
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import { Slider } from '@miblanchard/react-native-slider';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { db } from "../../firebase";
import { doc, getDoc, onSnapshot } from "firebase/firestore";

const PreferencesScreen = ({ currentUser }) => {
  const navigation = useNavigation();
  const [distance, setDistance] = React.useState(5);
  const [prices, setPrices] = React.useState([5, 25]);

  const [showRestrictions, setShowRestrictions] = useState(false);
  const [showDiets, setShowDiets] = useState(false);

  const [restrictions, setRestrictions] = useState("none");
  const [diets, setDiets] = useState("none");

  const renderDistanceMark = (index) => {
    const markDistance = (index + 1) * 5
    return (
      <View style={markDistance <= distance ? styles.markActive : styles.markInactive} />
    );
  }
  const renderPriceMark = (index) => {
    const markPrice = (index + 1) * 25
    return (
      <View style={(markPrice >= prices[0] && markPrice <= prices[1]) ? styles.markActive : styles.markInactive} />
    );
  }
  const renderDistanceValue = () => {
    return (
      <View style={styles.distanceValue}>
        <Text style={styles.value}>{distance}</Text>
      </View>
    );
  };
  const renderPriceValue = (index) => {
    return (
      <View style={styles.priceValue}>
        <Text style={styles.value}>{prices[index]}</Text>
      </View>
    );
  };

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "users", currentUser), (doc) => {
      const restrictionsList = doc.data().restrictions
      if (restrictionsList.length !== 0) {
        setRestrictions(restrictionsList.join(", "));
      } else {
        setRestrictions("none");
      }
      const dietsList = doc.data().diets;
      if (dietsList.length !== 0) {
        setDiets(dietsList.join(", "));
      } else {
        setDiets("none");
      }
    });
    return unsub;
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.top}>
          <Text style={styles.title}>Recommendation</Text>
          <Text style={styles.subtitle}>Share your cravings and get a personalized dish suggestion!</Text>
        </View>

        <Text style={styles.header}>Settings</Text>

        <View style={styles.section}>
          <Text style={styles.sliderText}>Distance</Text>
          <Slider
            value={distance}
            onValueChange={(value) => {setDistance(value)}}
            minimumValue={0}
            maximumValue={20}
            step={1}
            trackMarks={[5, 10, 15]}
            renderTrackMarkComponent={renderDistanceMark}
            renderAboveThumbComponent={renderDistanceValue}
            minimumTrackTintColor="#f8b432"
            maximumTrackTintColor='darkgrey'
            thumbTintColor="#f8b432"
            containerStyle={styles.sliderView}
          />
          <View style={styles.labelView}>
            <Text style={styles.label}>&lt;1 mi</Text>
            <Text style={styles.label}>20 mi</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sliderText}>Price per Person</Text>
          <Slider
            value={prices}
            onValueChange={(value) => {setPrices(value)}}
            minimumValue={0}
            maximumValue={100}
            step={1}
            trackMarks={[25, 50, 75]}
            renderTrackMarkComponent={renderPriceMark}
            renderAboveThumbComponent={renderPriceValue}
            minimumTrackTintColor="#f8b432"
            maximumTrackTintColor='darkgrey'
            thumbTintColor="#f8b432"
            containerStyle={styles.sliderView}
          />
          <View style={styles.labelView}>
            <Text style={styles.label}>$1</Text>
            <Text style={styles.label}>$100</Text>
          </View> 
        </View>

        <Text style={styles.header}>Apply Profile?</Text>

        <View style={styles.section}> 
          <View style={styles.row}>
            <Text style={styles.text}>Dietary Restrictions</Text>
            <Switch
              trackColor={{ false: 'grey', true: "#f8b432" }}
              thumbColor={showRestrictions ? 'white' : 'darkgrey'}
              value={showRestrictions}
              onValueChange={() => setShowRestrictions(!showRestrictions)}
              style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
            />
          </View>
          { showRestrictions ?
            <Text style={styles.subText}>{restrictions}</Text>
            : null
          }
          <View style={styles.row}>
            <Text style={styles.text}>Special Diets</Text>
            <Switch
              trackColor={{ false: 'grey', true: "#f8b432" }}
              thumbColor={showDiets ? 'white' : 'darkgrey'}
              value={showDiets}
              onValueChange={() => setShowDiets(!showDiets)}
              style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
            />
          </View>
          { showDiets ?
            <Text style={styles.subText}>{diets}</Text>
            : null
          }
          <Pressable onPress={() => {navigation.navigate("OnboardingProfileStack")}}>
            <View style={styles.editRow}>
            <Text style={styles.editChoice}>EDIT CHOICES</Text>
            <Ionicons name='chevron-forward' size={16} color='grey' />
            </View>
          </Pressable>
        </View>

        <View style={styles.bottom}> 
          <Button 
            title="Start quiz!" 
            buttonStyle={styles.button} 
            titleStyle={styles.buttonTitle} 
            containerStyle={styles.buttonContainer} 
            onPress={() => {navigation.navigate("QuestionsScreen")}}
          />
        </View>

      </ScrollView>
    </View>
  );
};

export default PreferencesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: 'white',
    paddingTop: '20%',
  },

  top: {
    alignItems: "center",
    paddingBottom: '2%',
    paddingHorizontal: '5%',
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    paddingBottom: '2%',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '300',
    fontStyle: 'italic',
    paddingBottom: '2%',
    textAlign: "center",
  },

  section: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingBottom: '6%',
    paddingHorizontal: '10%',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: '4%',
    paddingBottom: '4%',
    paddingHorizontal: '8%',
  },
  sliderText: {
    fontSize: 20,
    fontWeight: '300',
    paddingBottom: '12%',
  },
  labelView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 16,
    fontWeight: '300',
  },
  sliderView: {
    width: '100%', 
  },
  markInactive: {
    width: 4,
    height: 8,
    borderRadius: 10,
    backgroundColor: 'darkgrey',
  },
  markActive: {
    width: 4,
    height: 8,
    borderRadius: 10,
    backgroundColor: '#f8b432',
  },
  distanceValue: {
    width: 36,
    height: 30,
    right: 9,
    top: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    backgroundColor: '#f8b432',
  },
  priceValue: {
    width: 40,
    height: 30,
    right: 10,
    top: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    backgroundColor: '#f8b432',
  },
  value: {
    fontSize: 16,
    fontWeight: '800',
  },

  text: {
    fontSize: 20,
    fontWeight: '300',
    paddingBottom: '3%',
  },
  subText: {
    fontSize: 16,
    paddingBottom: '6%',
    paddingLeft: '2%',
    fontWeight: '500',
    fontStyle: 'italic',
    color: 'grey',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  editChoice: {
    fontSize: 16,
    fontWeight: '800',
    color: 'grey',
    paddingRight: '1%',
  },
  editRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '4%',
    paddingBottom: '2%',
  },

  bottom: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: '#F1EBEA',
    borderRadius: 10,    
    height: 50,   
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: '800', 
    color: 'black',
  },
  buttonContainer: {
    width: '84%',
    marginBottom: '6%',
  },
  

});