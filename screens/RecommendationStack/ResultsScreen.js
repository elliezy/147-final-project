import { StyleSheet, Text, View, Pressable, ScrollView, Switch, Image } from "react-native";
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import { Slider } from '@miblanchard/react-native-slider';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { db } from "../../firebase";
import { doc, getDoc, onSnapshot } from "firebase/firestore";


const ResultsScreen = ({ route, navigation }) => {
  const { american, japanese, italian, chinese, noCuisine, sweet, salty, umami, spicy, noFlavor, crunchy, smooth, creamy, chewy, noTexture } = route.params;

  const [dishName, setDishName] = React.useState("");
  const [dishPrice, setDishPrice] = React.useState("");
  const [dishImage, setDishImage] = React.useState("");
  const [dishContains, setDishContains] = React.useState("");
  const [restaurantName, setRestaurantName] = React.useState("");
  const [restaurantCuisine, setRestaurantCuisine] = React.useState("");
  const [restaurantDistance, setRestaurantDistance] = React.useState("");
  const [restaurantImage, setRestaurantImage] = React.useState("");

  const [restaurant, setRestaurant] = useState([]);

  // Retrieiving a document from Firestore
  const getDocument = async ( restoName ) => {
    if (restoName != '') {
      const docRef = doc(db, "restaurants", restoName);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setRestaurant(docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }
  };

  useEffect(() => {
    if (american) {

      if (sweet) {
        setDishName("Oreo Shake");
        setDishPrice("$6.24");
        setDishImage(require("../.././assets/oreoshake.jpg"));
        setDishContains("Contains: oreo, milk, ice cream");
        setRestaurantName("Jack in the Box");
        setRestaurantCuisine("American, Fast Food");
        setRestaurantDistance("1.1");
        setRestaurantImage(require("../.././assets/jackinthebox.jpg"));
      } else if (salty || spicy) {
        setDishName("Chicken Fajita Pita");
        setDishPrice("$7.49");
        setDishImage(require("../.././assets/chickenpita.jpg"));
        setDishContains("Contains: tomato, chicken, egg");
        setRestaurantName("Jack in the Box");
        setRestaurantCuisine("American, Fast Food");
        setRestaurantDistance("1.1");
        setRestaurantImage(require("../.././assets/jackinthebox.jpg"));
      } else if (umami || noFlavor) {
        setDishName("Large Double Jack Combo");
        setDishPrice("$13.22");
        setDishImage(require("../.././assets/doublejack.jpg"));
        setDishContains("Contains: tomato, pickles, cheese");
        setRestaurantName("Jack in the Box");
        setRestaurantCuisine("American, Fast Food");
        setRestaurantDistance("1.1");
        setRestaurantImage(require("../.././assets/jackinthebox.jpg"));
      }

    } else if (japanese) {

      if (sweet) {
        setDishName("Green Tea Cheesecake");
        setDishPrice("$6.00");
        setDishImage(require("../.././assets/greentea.jpg"));
        setDishContains("Contains: green tea, cream cheese");
        setRestaurantName("Daigo");
        setRestaurantCuisine("Japanese, Sushi Bar");
        setRestaurantDistance("1.8");
        setRestaurantImage(require("../.././assets/daigo.jpg"));
      } else if (salty || spicy) {
        setDishName("Dragon Roll");
        setDishPrice("$22.00");
        setDishImage(require("../.././assets/dragonroll.jpg"));
        setDishContains("Contains: avocado, rice, shrimp, eel");
        setRestaurantName("Daigo");
        setRestaurantCuisine("Japanese, Sushi Bar");
        setRestaurantDistance("1.8");
        setRestaurantImage(require("../.././assets/daigo.jpg"));
      } else if (umami || noFlavor) {
        setDishName("Nigiri Dinner");
        setDishPrice("$62.00");
        setDishImage(require("../.././assets/nigiri.jpg"));
        setDishContains("Contains: tuna, salmon, rice");
        setRestaurantName("Daigo");
        setRestaurantCuisine("Japanese, Sushi Bar");
        setRestaurantDistance("1.8");
        setRestaurantImage(require("../.././assets/daigo.jpg"));
      }

    } else if (chinese) {

      if (sweet) {
        setDishName("Fried Sweet Rice Cake");
        setDishPrice("$6.00");
        setDishImage(require("../.././assets/ricecake.jpg"));
        setDishContains("Contains: glutinous rice, egg");
        setRestaurantName("Bao Bei");
        setRestaurantCuisine("Chinese, Fusion");
        setRestaurantDistance("5.5");
        setRestaurantImage(require("../.././assets/baobei.jpg"));
      } else if (spicy || noFlavor) {
        setDishName("Dan Dan Mian");
        setDishPrice("$15.00");
        setDishImage(require("../.././assets/dandanmian.jpg"));
        setDishContains("Contains: noodles, pepper, scallions");
        setRestaurantName("Bao Bei");
        setRestaurantCuisine("Chinese, Fusion");
        setRestaurantDistance("5.5");
        setRestaurantImage(require("../.././assets/baobei.jpg"));
      } else if (salty || umami) {
        setDishName("Smoked Mushroom Bao");
        setDishPrice("$9.50");
        setDishImage(require("../.././assets/mushroombao.png"));
        setDishContains("Contains: mushroom, peanut, flour");
        setRestaurantName("Bao Bei");
        setRestaurantCuisine("Chinese, Fusion");
        setRestaurantDistance("5.5");
        setRestaurantImage(require("../.././assets/baobei.jpg"));
      }

    } else if (italian) {

      if (sweet) {
        setDishName("Bread Pudding");
        setDishPrice("$20.00");
        setDishImage(require("../.././assets/breadpudding.jpg"));
        setDishContains("Contains: flour, sugar, egg");
        setRestaurantName("Terun");
        setRestaurantCuisine("Italian, Pizza");
        setRestaurantDistance("1.7");
        setRestaurantImage(require("../.././assets/terun.jpg"));
      } else if (spicy || umami) {
        setDishName("Rigatoni");
        setDishPrice("$23.00");
        setDishImage(require("../.././assets/rigatoni.jpg"));
        setDishContains("Contains: tomato, beef, pasta");
        setRestaurantName("Terun");
        setRestaurantCuisine("Italian, Pizza");
        setRestaurantDistance("1.7");
        setRestaurantImage(require("../.././assets/terun.jpg"));
      } else if (salty || noFlavor) {
        setDishName("Calzone");
        setDishPrice("$20.00");
        setDishImage(require("../.././assets/calzone.jpg"));
        setDishContains("Contains: ricotta, tomato, mozzarella");
        setRestaurantName("Terun");
        setRestaurantCuisine("Italian, Pizza");
        setRestaurantDistance("1.7");
        setRestaurantImage(require("../.././assets/terun.jpg"));
      }

    } else if (noCuisine) {

      if (sweet) {
        setDishName("Tiramisu");
        setDishPrice("$11.00");
        setDishImage(require("../.././assets/tiramisu.jpg"));
        setDishContains("Contains: coffee, chocolate, egg");
        setRestaurantName("Osteria Toscana");
        setRestaurantCuisine("Italian");
        setRestaurantDistance("1.6");
        setRestaurantImage(require("../.././assets/osteria.jpg"));
      } else if (spicy || noFlavor) {
        setDishName("Red King");
        setDishPrice("$15.90");
        setDishImage(require("../.././assets/redking.jpg"));
        setDishContains("Contains: noodles, beansprout, egg");
        setRestaurantName("Ramen Nagi");
        setRestaurantCuisine("Japanese, Ramen");
        setRestaurantDistance("1.6");
        setRestaurantImage(require("../.././assets/ramennagi.jpg"));
      } else if (salty || umami) {
        setDishName("BBQ Mix");
        setDishPrice("$25.99");
        setDishImage(require("../.././assets/bbq_mix.jpg"));
        setDishContains("Contains: beef, short ribs, cabbage, rice");
        setRestaurantName("L&L Hawaiian BBQ");
        setRestaurantCuisine("Hawaiian, American");
        setRestaurantDistance("2");
        setRestaurantImage(require("../.././assets/lnl.jpg"));
      }

    }
  }, []);

  useEffect(() => {
    getDocument(restaurantName);
  }, [restaurantName]);
  
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.top}>
          <Pressable onPress={() => navigation.navigate('QuestionsScreen')}>
            <Ionicons name='arrow-back-outline' size={30} color='black' />
          </Pressable>
          <Text style={styles.title}>Results</Text>
          <Ionicons name='arrow-forward-outline' size={30} color='white' />
        </View>
        <Text style={styles.subtitle}>Try this out for your next noms!</Text>

        <View style={styles.section}>
          <View style={styles.row}>
            <Text style={styles.header}>{dishName}</Text>
            <Text style={styles.subHeader}>{dishPrice}</Text>
          </View>
          <Image source={dishImage} style={styles.image}/>
          <View style={styles.horizontal}>
            <Ionicons name='checkmark-circle' size={20} color='green' />
            <Text style={styles.info}>meets your restrictions & diets</Text>
          </View>
          <Text style={styles.subInfo}>{dishContains}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.italicsText}>from...</Text>
          <Text style={styles.header}>{restaurantName}</Text>
          <View style={styles.row}>
            <Text style={styles.text}>{restaurantCuisine}</Text>
            <Text style={styles.text}>{restaurantDistance} miles away</Text>
          </View>
          <Image source={restaurantImage} style={styles.image}/>
        </View>

        <View style={styles.bottom}> 
          <Button 
            title="See full menu" 
            buttonStyle={styles.buttonMain} 
            titleStyle={styles.buttonTitle} 
            containerStyle={styles.buttonContainer} 
            onPress={() => navigation.navigate('RestaurantPage', {name: restaurant.name, category: restaurant.category, distance: restaurant.distance, yelp: restaurant.yelp, walkthrough: restaurant.walkthrough, operatingDays: restaurant.operatingDays, operatingHours: restaurant.operatingHours, address: restaurant.address, phone: restaurant.phone })}
          />
          <Button 
            title="More information" 
            buttonStyle={styles.button} 
            titleStyle={styles.buttonTitle} 
            containerStyle={styles.buttonContainer} 
            onPress={() => navigation.navigate('MoreInfo', {name: restaurant.name, category: restaurant.category, distance: restaurant.distance, yelp: restaurant.yelp, walkthrough: restaurant.walkthrough, operatingDays: restaurant.operatingDays, operatingHours: restaurant.operatingHours, address: restaurant.address, phone: restaurant.phone })}
          />
          <Pressable onPress={() => navigation.navigate('PreferencesScreen')}>
            <Text style={styles.action}>Try again!</Text>
          </Pressable>
        </View>

      </ScrollView>
    </View>
  );
};

export default ResultsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: 'white',
    paddingTop: '20%',
  },

  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    paddingBottom: '2%',
    paddingHorizontal: '5%',
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '300',
    fontStyle: 'italic',
    paddingBottom: '8%',
    textAlign: "center",
  },

  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: '4%',
  },
  header: {
    fontSize: 20,
    fontWeight: '800',
  },
  subHeader: {
    fontSize: 18,
    fontWeight: '300',
  },
  image: {
    height: 180,
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },

  horizontal: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: '4%',
  },
  info: {
    fontSize: 16,
    fontWeight: '800',
    color: 'green',
    paddingLeft: '2%',
  },
  subInfo: {
    fontSize: 16,
    fontWeight: '300',
    paddingVertical: '3%',
  },

  italicsText: {
    fontSize: 16,
    fontWeight: '300',
    fontStyle: 'italic',
    paddingBottom: '3%',
  },
  text: {
    fontSize: 16,
    fontWeight: '300',
    paddingTop: '2%',
  },
  

  section: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingBottom: '6%',
    paddingLeft: '10%',
    paddingRight: '10%',
  },
 
  bottom: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonMain: {
    backgroundColor: '#F8B432',
    borderRadius: 10,    
    height: 50,   
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
    width: '80%',
    marginTop: '4%',
  },
  buttonStyle: {
    backgroundColor: '#F1EBEA',
    borderRadius: 10,    
    height: 50, 
    width: '80%',
    marginTop: '4%',
    justifyContent: "center",
    alignItems: "center",
  },
  action: {
    fontSize: 16,
    fontWeight: '500', 
    color: 'grey',
    textDecorationLine: 'underline',
    paddingTop: '5%',
    paddingBottom: '10%',
  }

});