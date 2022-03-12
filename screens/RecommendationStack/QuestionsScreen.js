import { StyleSheet, Text, View, Pressable, ScrollView, Switch, Image } from "react-native";
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import { Slider } from '@miblanchard/react-native-slider';
import Ionicons from 'react-native-vector-icons/Ionicons';

const QuestionsScreen = () => {
  const navigation = useNavigation();

  const [american, setAmerican] = React.useState(false);
  const [japanese, setJapanese] = React.useState(false);
  const [chinese, setChinese] = React.useState(false);
  const [italian, setItalian] = React.useState(false);
  const [noCuisine, setNoCuisine] = React.useState(false);

  const [sweet, setSweet] = React.useState(false);
  const [salty, setSalty] = React.useState(false);
  const [umami, setUmami] = React.useState(false);
  const [spicy, setSpicy] = React.useState(false);
  const [noFlavor, setNoFlavor] = React.useState(false);

  const [crunchy, setCrunchy] = React.useState(false);
  const [smooth, setSmooth] = React.useState(false);
  const [creamy, setCreamy] = React.useState(false);
  const [chewy, setChewy] = React.useState(false);
  const [noTexture, setNoTexture] = React.useState(false);
  

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.top}>
          <Pressable onPress={() => navigation.navigate('PreferencesScreen')}>
            <Ionicons name='arrow-back-outline' size={30} color='black' />
          </Pressable>
          <Text style={styles.title}>Quiz</Text>
          <Ionicons name='arrow-forward-outline' size={30} color='white' />
        </View>

        <View style={styles.section}>
          <Text style={styles.text}>What cuisine are you craving?</Text>
          <View style={styles.row}>
            <View style={styles.option}>
              <Pressable onPress={() => {setAmerican(true); setJapanese(false); setChinese(false); setItalian(false); setNoCuisine(false)}}>
                <Image source={require("../.././assets/american.jpg")} style={american ? styles.selectImage : styles.optionImage} />
              </Pressable>
              <Text style={styles.optionText}>American</Text>
            </View>
            <View style={styles.option}>
              <Pressable onPress={() => {setAmerican(false); setJapanese(true); setChinese(false); setItalian(false); setNoCuisine(false)}}>
                <Image source={require("../.././assets/japanese.jpg")} style={japanese ? styles.selectImage : styles.optionImage} />
              </Pressable>
              <Text style={styles.optionText}>Japanese</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.option}>
              <Pressable onPress={() => {setAmerican(false); setJapanese(false); setChinese(true); setItalian(false); setNoCuisine(false)}}>
                <Image source={require("../.././assets/chinese.jpg")} style={chinese ? styles.selectImage : styles.optionImage} />
              </Pressable>
              <Text style={styles.optionText}>Chinese</Text>
            </View>
            <View style={styles.option}>
              <Pressable onPress={() => {setAmerican(false); setJapanese(false); setChinese(false); setItalian(true); setNoCuisine(false)}}>
                <Image source={require("../.././assets/italian.jpg")} style={italian ? styles.selectImage : styles.optionImage} />
              </Pressable>
              <Text style={styles.optionText}>Italian</Text>
            </View>
          </View>
          <View style={styles.none}>
            <Button 
              title="none of these" 
              buttonStyle={noCuisine ? styles.selectButton : styles.optionButton} 
              titleStyle={styles.optionText} 
              containerStyle={styles.optionContainer} 
              onPress={() => {setAmerican(false); setJapanese(false); setChinese(false); setItalian(false); setNoCuisine(true)}}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.text}>Which flavor is tempting?</Text>
          <View style={styles.row}>
            <View style={styles.option}>
              <Pressable onPress={() => {setSweet(true); setSalty(false); setUmami(false); setSpicy(false); setNoFlavor(false)}}>
                <Image source={require("../.././assets/sweet.jpg")} style={sweet ? styles.selectImage : styles.optionImage}/>
              </Pressable>
              <Text style={styles.optionText}>Sweet</Text>
            </View>
            <View style={styles.option}>
              <Pressable onPress={() => {setSweet(false); setSalty(true); setUmami(false); setSpicy(false); setNoFlavor(false)}}>
                <Image source={require("../.././assets/salty.jpg")} style={salty ? styles.selectImage : styles.optionImage}/>
              </Pressable>
              <Text style={styles.optionText}>Salty</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.option}>
              <Pressable onPress={() => {setSweet(false); setSalty(false); setUmami(true); setSpicy(false); setNoFlavor(false)}}>
                <Image source={require("../.././assets/umami.jpg")} style={umami ? styles.selectImage : styles.optionImage}/>
              </Pressable>
              <Text style={styles.optionText}>Umami</Text>
            </View>
            <View style={styles.option}>
              <Pressable onPress={() => {setSweet(false); setSalty(false); setUmami(false); setSpicy(true); setNoFlavor(false)}}>
                <Image source={require("../.././assets/spicy.jpg")} style={spicy ? styles.selectImage : styles.optionImage}/>
              </Pressable>
              <Text style={styles.optionText}>Spicy</Text>
            </View>
          </View>
          <View style={styles.none}>
            <Button 
              title="none of these" 
              buttonStyle={noFlavor ? styles.selectButton : styles.optionButton} 
              titleStyle={styles.optionText} 
              containerStyle={styles.optionContainer} 
              onPress={() => {setSweet(false); setSalty(false); setUmami(false); setSpicy(false); setNoFlavor(true)}}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.text}>Which texture sounds good?</Text>
          <View style={styles.row}>
            <View style={styles.option}>
              <Pressable onPress={() => {setCrunchy(true); setSmooth(false); setCreamy(false); setChewy(false); setNoTexture(false)}}>
                <Image source={require("../.././assets/crunchy.jpg")} style={crunchy ? styles.selectImage : styles.optionImage}/>
              </Pressable>
              <Text style={styles.optionText}>Crunchy</Text>
            </View>
            <View style={styles.option}>
              <Pressable onPress={() => {setCrunchy(false); setSmooth(true); setCreamy(false); setChewy(false); setNoTexture(false)}}>
                <Image source={require("../.././assets/smooth.jpg")} style={smooth ? styles.selectImage : styles.optionImage}/>
              </Pressable>
              <Text style={styles.optionText}>Smooth</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.option}>
              <Pressable onPress={() => {setCrunchy(false); setSmooth(false); setCreamy(true); setChewy(false); setNoTexture(false)}}>
                <Image source={require("../.././assets/creamy.jpg")} style={creamy ? styles.selectImage : styles.optionImage}/>
              </Pressable>
              <Text style={styles.optionText}>Creamy</Text>
            </View>
            <View style={styles.option}>
              <Pressable onPress={() => {setCrunchy(false); setSmooth(false); setCreamy(false); setChewy(true); setNoTexture(false)}}>
                <Image source={require("../.././assets/chewy.jpg")} style={chewy ? styles.selectImage : styles.optionImage}/>
              </Pressable>
              <Text style={styles.optionText}>Chewy</Text>
            </View>
          </View>
          <View style={styles.none}>
            <Button 
              title="none of these" 
              buttonStyle={noTexture ? styles.selectButton : styles.optionButton} 
              titleStyle={styles.optionText} 
              containerStyle={styles.optionContainer} 
              onPress={() => {setCrunchy(false); setSmooth(false); setCreamy(false); setChewy(false); setNoTexture(true)}}
            />
          </View>
        </View>  

        <View style={styles.bottom}> 
          <Button 
            title="GET RESULTS!" 
            buttonStyle={styles.button} 
            titleStyle={styles.buttonTitle} 
            containerStyle={styles.buttonContainer} 
            onPress={() => {navigation.navigate("ResultsScreen", {
              american: american,
              japanese: japanese,
              italian: italian,
              chinese: chinese,
              noCuisine: noCuisine
            })}}
          />
        </View>

      </ScrollView>
    </View>
  );
};

export default QuestionsScreen;

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

  section: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: '10%',
    paddingRight: '10%',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: '3%',
  },
  
  option: {
    width: '46%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  none: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '2%',
    paddingBottom: '5%',
  },
  text: {
    fontSize: 20,
    fontWeight: '800',
    paddingVertical: '6%',
  },
  optionText: {
    fontSize: 18,
    fontWeight: '300',
    paddingTop: '5%',
    paddingBottom: '15%',
    color: 'black',
  },
  optionImage: {
    height: 130,
    width: 130,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  selectImage: {
    height: 130,
    width: 130,
    resizeMode: 'cover',
    borderRadius: 10,
    borderColor: '#F8B432',
    borderWidth: 6,
  },
  optionButton: {
    backgroundColor: '#F1EBEA',
    borderRadius: 10,    
    height: 50,   
  },
  selectButton: {
    backgroundColor: '#F8B432',
    borderRadius: 10,    
    height: 50, 
  },
  optionContainer: {
    width: '100%',
  },

 
  bottom: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: '#F8B432',
    borderRadius: 10,    
    height: 50,   
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: '800', 
    color: 'black',
  },
  buttonContainer: {
    width: '90%',
    marginBottom: '6%',
    paddingTop: '10%',
  },
  

});