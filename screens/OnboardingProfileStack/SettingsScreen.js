import { StyleSheet, Text, View, Pressable, Switch } from "react-native";
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SettingsScreen = ({ }) => {
  const navigation = useNavigation();

  const [push, setPush] = useState(false);
  const [email, setEmail] = useState(false);
  const [location, setLocation] = useState(true);

  useEffect(() => {
    navigation.getParent()?.setOptions({ tabBarStyle: { display: "none" }});
  });

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Pressable onPress={() => navigation.navigate('ProfileScreen')}>
          <Ionicons name='close-outline' size={40} color='black' />
        </Pressable>
      </View>

      <Text style={styles.header}>Settings</Text>      

      <View style={styles.body}>      
        <View style={styles.section}>
          <View style={styles.titleContainer}>
            <Ionicons name='person' size={24} color='#f8b432' />
            <Text style={styles.title}>Account</Text>
          </View>
          <View style={styles.option}>
            <Text style={styles.subtitle}>Edit information</Text>
            <Ionicons name='chevron-forward' size={20} color='grey' />
          </View>
          <View style={styles.option}>
            <Text style={styles.subtitle}>Change password</Text>
            <Ionicons name='chevron-forward' size={20} color='grey' />
          </View>
          <View style={styles.option}>
            <Text style={styles.subtitle}>Language</Text>
            <Ionicons name='chevron-forward' size={20} color='grey' />
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.titleContainer}>
            <Ionicons name='notifications' size={24} color='#f8b432' />
            <Text style={styles.title}>Notifications</Text>
          </View>
          <View style={styles.option}>
            <Text style={styles.subtitle}>Push notifications</Text>
            <Switch
              trackColor={{ false: 'grey', true: "#f8b432" }}
              thumbColor={push ? 'white' : 'darkgrey'}
              value={push}
              onValueChange={() => setPush(!push)}
              style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
            />
          </View>
          <View style={styles.option}>
            <Text style={styles.subtitle}>Email notifications</Text>
            <Switch
              trackColor={{ false: 'grey', true: "#f8b432" }}
              thumbColor={email ? 'white' : 'darkgrey'}
              value={email}
              onValueChange={() => setEmail(!email)}
              style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
            />
          </View>
        </View>
        
        <View style={styles.section}>
          <View style={styles.titleContainer}>
            <Ionicons name='lock-closed' size={24} color='#f8b432' />
            <Text style={styles.title}>Privacy</Text>
          </View>
          <View style={styles.option}>
            <Text style={styles.subtitle}>Location access</Text>
            <Switch
              trackColor={{ false: 'grey', true: "#f8b432" }}
              thumbColor={location ? 'white' : 'darkgrey'}
              value={location}
              onValueChange={() => setLocation(!location)}
              style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
            />
          </View>
        </View>
      </View>

      <View style={styles.bottom}>
        <Button 
          title="Log out" 
          buttonStyle={styles.button} 
          titleStyle={styles.buttonTitle} 
          containerStyle={styles.buttonContainer} 
        />
      </View>

    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: '#F1EBEA',
    paddingTop: '20%',
    paddingBottom: '8%',
    paddingHorizontal: '6%',
  },

  top: {
    flex: 1,
    alignItems: "flex-start",
  },
  header: {
    fontSize: 32,
    fontWeight: '800',
    paddingBottom: '10%',
    paddingHorizontal: '4%',
  },

  body: {
    flex: 8,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: '4%',
  },
  section: {
    paddingBottom: '15%',
    width: '100%',
  },
  
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'darkgrey',
    borderBottomWidth: 1,
    paddingBottom: '3%',
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    paddingLeft: '2%',
  },

  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '6%',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '500',
    color: 'gray',
  },

  bottom: {
    height: '10%',
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 10,    
    height: 50,   
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: 'grey',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: '2%',
  },

});