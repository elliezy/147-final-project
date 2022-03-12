import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Onboarding from 'react-native-onboarding-swiper';
import { Image, useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Done = () => (
    <Button title={'Get Started'} buttonStyle={styles.button} titleStyle={styles.buttonTitle} containerStyle={styles.buttonContainer} />
  );

const OnboardingSwiper = ({ setFinishedOnboarding }) => {
  const navigation = useNavigation();
  const [CTA, setCTA] = useState(false);

  useEffect(() => {
    navigation.getParent()?.setOptions({ tabBarStyle: { display: "none" }});
    return () => navigation.getParent()?.setOptions({ tabBarStyle: undefined });
  }, [navigation]);

  return (
    <Onboarding
      titleStyles={styles.title}
      subTitleStyles={styles.subtitle}
      bottomBarHighlight={false}

      onSkip={() => {
        navigation.navigate("RegisterScreen");
      }}
      pageIndexCallback={(pageIndex) => {(pageIndex == 2) ? setCTA(true) : setCTA(false)}}
      showPagination={!CTA}

      pages={[
        {
          backgroundColor: '#f8b432',
          image: <Ionicons name='map' size={100} color='black' />,
          title: 'Restaurant Walkthroughs',
          subtitle: 'See the "step by step" dining experience at restaurants.',
        },
        {
          backgroundColor: '#f8b432',
          image: <Ionicons name='book' size={100} color='black' />,
          title: 'Filter & Sort Menus',
          subtitle: 'Easily pick out dishes that fit your personal dietary profile.',
        },
        {
          backgroundColor: '#f8b432',
          image: <Ionicons name='restaurant' size={100} color='black' />,
          title: 'Personalized Noms',
          subtitle: ( 
            <View style={styles.container}>
              <Text style={styles.subtitle}>Get recommendations tailored to your taste and restrictions!</Text>
              <Button 
                title={'Get Started'} 
                onPress={() => {navigation.navigate("RegisterScreen")}} 
                buttonStyle={styles.button} titleStyle={styles.buttonTitle} 
                containerStyle={styles.buttonContainer} 
              />
            </View>
          ),
        },
      ]}
    />
  );
}

export default OnboardingSwiper;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: '10%',
  },

  title: {
    fontSize: 40,
    fontWeight: '800', 
    paddingHorizontal: '5%',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '300',
    color: 'black',
    textAlign: 'center', 
    paddingHorizontal: '5%', 
  },

  button: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 50,  
  },
  buttonTitle: {
    fontSize: 16,
    color: 'black',
    fontWeight: '800',
  },
  buttonContainer: {
    justifyContent: "flex-end",
    position: 'absolute',
    top: '420%',
    width: '100%',  
  }
});