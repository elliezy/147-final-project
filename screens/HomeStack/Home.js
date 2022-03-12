import { StyleSheet, Text, View, Button, SafeAreaView, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import MapView from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { db } from "../../firebase";
import { doc, onSnapshot, collection, getDocs } from "firebase/firestore";

import Restaurant from './Restaurant'


const Home = () => {
  const navigation = useNavigation();
  const [restaurants, setRestaurants] = useState([]);

  const getAllDocuments = async () => {
    let allDocs = await getDocs(collection(db, "restaurants"));
    let updated = (allDocs.docs.map((document) => {
      return document.data();
    }))
    setRestaurants(updated);
  };

  useEffect(() => {
    getAllDocuments();
  }, []);

  const renderRestaurant = ({item, navigation}) => {
    return (
      <Restaurant
        imageUrl={item.imageUrl}
        name={item.name}
        distance={item.distance}
        category={item.category}
        yelp={item.yelp}
        walkthrough={item.walkthrough}
        operatingDays={item.operatingDays}
        operatingHours={item.operatingHours}
        address={item.address}
        phone={item.phone} />
    );
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.mapView}>
        <MapView
          style={{...StyleSheet.absoluteFillObject}}
          initialRegion={{
          latitude: 37.4275,
          longitude: -122.1697,
          latitudeDelta: 0.0122,
          longitudeDelta: 0.0121,
          }}
        />
      </View>

      <View style={styles.locationView}>
        <Ionicons name="location-outline" size={25}></Ionicons>
        <Text style={styles.locationText}> Stanford, CA 94305</Text>
      </View>

      <View style={styles.menuBar}>
        <View style={{flex: 2, flexDirection: "row" }}>
          <Text style={styles.filterText}>Recommended For You </Text>
          <Ionicons name="chevron-down-outline" size={25}></Ionicons>
        </View>
        <Ionicons name="search-outline" size={25}></Ionicons>
      </View>

      <View style={styles.flatlistView}>
        <FlatList 
          data={restaurants}
          renderItem={({item}) => renderRestaurant({item})}
          keyExtractor={(item) => item.name} 
        />
      </View>
      
    </View>
    
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: 'white',
  },

  mapView: {
    flex: 3,
    width: "100%",
    height: "20%",
  },
  locationView: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: "1%",
  },
  locationText: {
    fontSize: 18,
    textDecorationLine: 'underline'
  },

  menuBar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: '6%',
    paddingBottom: "1%",
  },
  filterText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  flatlistView: {
    flex: 12,
    paddingHorizontal: "5%",
  },

});
