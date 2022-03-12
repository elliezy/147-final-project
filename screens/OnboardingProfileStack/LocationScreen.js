import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LocationScreen = ({ setFinishedOnboarding }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Pressable onPress={() => navigation.navigate('RegisterScreen')}>
          <Ionicons name='arrow-back-outline' size={30} color='black' />
        </Pressable>
      </View>

      <View style={styles.header}>
        <Ionicons name='location-outline' size={80} style={styles.icon} />
        <Text style={styles.title}>Set Your Location!</Text>
        <Text style={styles.subtitle}>noms simplifies dining options in your area</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.bodyText}>Your location will be used to locate establishments nearby.</Text>
        <Button 
          title="OK, I UNDERSTAND" 
          buttonStyle={styles.button} 
          titleStyle={styles.buttonTitle} 
          containerStyle={styles.buttonContainer} 
          onPress={() => setFinishedOnboarding(true)}
        />
      </View>

      <View style={styles.bottom}>
        <Text style={styles.bottomText}>You can adjust your location settings at any time.</Text>
      </View>

    </View>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: "stretch",
    justifyContent: "center",
    paddingTop: '20%',
    paddingBottom: '8%',
    paddingHorizontal: '5%',
    backgroundColor: '#f8b432',
  },

  top: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: '10%',
  },

  header: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: '5%',
  },
  icon: {
    color: 'black',
    paddingBottom: '4%',
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    paddingBottom: '4%',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '300',
    textAlign: 'center',
  },

  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: '10%',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 25,    
    height: 50,   
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: '800', 
    color: 'black',
  },
  buttonContainer: {
    width: '80%',
    marginVertical: '8%',
  },
  bodyText: {
    fontSize: 20,
    fontWeight: '300',
    textAlign: 'center',
  },

  bottom: {
    height: '10%', 
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: '10%',
  },
  bottomText: {
    fontSize: 18,
    fontWeight: '300',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
