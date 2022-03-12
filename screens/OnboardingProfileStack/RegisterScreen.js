import { StyleSheet, Text, View, Image, Pressable, TextInput, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";

const RegisterScreen = ({ setCurrentUser }) => {
  const navigation = useNavigation();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [alert, setAlert] = React.useState(false);

  const addUser = async () => {
    setCurrentUser(email);
    await setDoc(doc(db, "users", email), {
      name: name,
      email: email,
      diets: [],
      restrictions: [],
    });
  };

  return (
    <View style={styles.container}>

      <View style={styles.top}>
        <Pressable onPress={() => navigation.navigate('OnboardingSwiper')}>
          <Ionicons name='arrow-back-outline' size={30} color='black' />
        </Pressable>
      </View>

      <View style={styles.title}>
        <Image style={styles.logo} source={require('./../../assets/noms.png')} />
        <Text style={styles.subtitle}>Simplify dining - just for you</Text>
      </View>

      <View style={styles.fields}>
        <Text style={styles.header}>Create your account</Text>
        <View style={styles.field}>
          <Text style={styles.fieldTitle}>Full name</Text>
          <TextInput
            style={styles.input}
            onChangeText={(newName) => {setName(newName)}}
            value={name}
            placeholder="Enter your name"
          />
         </View>
        <View style={styles.field}>
          <Text style={styles.fieldTitle}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={(newEmail) => {setEmail(newEmail)}}
            value={email}
            autoCapitalize='none'
            placeholder="name@example.com"
          />
        </View>
        <View style={styles.field}>
          <Text style={styles.fieldTitle}>Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={(newPassword) => {setPassword(newPassword)}}
            value={password}
            placeholder="Enter your password"
            secureTextEntry={true}
          />
        </View>
      </View>

      <View style={styles.alertContainer}>
        {alert ? <Text style={styles.alert}>Please fill in all fields!</Text> : null}
      </View>
      <View style={styles.CTA}>
        <Button 
          title="Sign Up!" 
          buttonStyle={styles.button} 
          titleStyle={styles.buttonTitle} 
          containerStyle={styles.buttonContainer} 
          onPress={() => {
            if (email == "") {
              setAlert(true);
            } else if (name == "") {
              setAlert(true);
            } else {
              addUser();
              navigation.navigate('LocationScreen');
            } 
          }}
        />
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: 'white',
    paddingTop: '20%',
    paddingBottom: '8%',
    paddingHorizontal: '5%',
  },

  top: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: '10%',
  },

  title: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: '60%',
    resizeMode: 'contain',
  },
  subtitle: {
    fontSize: 22,
    fontStyle: 'italic',
    fontWeight: '300',
    paddingTop: '2%',
  },

  fields: {
    flex: 4,
    alignItems: "stretch",
    justifyContent: "center",
    paddingHorizontal: '2%',
    paddingHorizontal: '5%',
  },
  field: {
    paddingVertical: '5%',
  },
  header: {
    fontSize: 24,
    fontWeight: '800',
    paddingBottom: '8%',
  },
  fieldTitle: {
    fontSize: 20,
    fontWeight: '300', 
    paddingBottom: '2%',
  },
  input: {
    fontSize: 20,
    fontWeight: '300', 
    paddingVertical: '3%',
    paddingHorizontal: '4%',
    backgroundColor: '#F1EBEA',
    borderRadius: 10,
  },

  CTA: {
    height: '10%', 
    alignItems: "center",
    justifyContent: "center",
  },
  alertContainer: {
    height: '3%', 
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: '6%',
  },
  alert: {
    fontSize: 16,
    fontWeight: '500', 
    fontStyle: 'italic',
    color: 'red'
  },
  button: {
    backgroundColor: '#f8b432',
    borderRadius: 10,    
    height: 50,   
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: '800',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: '5%',
  },
});