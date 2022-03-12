import { StyleSheet, Text, View, SafeAreaView, Image, FlatList, Button, Pressable, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';


const MoreInfo = ({ navigation, route }) => {
  const params = route.params
  useEffect(() => {
    navigation.setOptions({ headerTitle: params.name, });
  })

//   console.log(params.operatingDays)
  const numDays = params.operatingDays.length;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      </View>
      <View style={styles.containerMiddle}>
        <Text style={styles.headingText}>More Information</Text>
        <View style={{marginBottom: "8%"}}>
            <Text style={styles.sectionText}>Address:</Text>
            <Text style={styles.addressText}>{params.address[0]}</Text>
            <Text style={styles.addressText}>{params.address[1]}</Text>
        </View>
        
        <Text style={styles.sectionText}>Hours:</Text>
        <View style={styles.hoursView}>
            <View>
                { numDays >= 1 ? <Text style={styles.text}>{params.operatingDays[0]}</Text> : null}
                { numDays >= 2 ? <Text style={styles.text}>{params.operatingDays[1]}</Text> : null}
                { numDays >= 3 ? <Text style={styles.text}>{params.operatingDays[2]}</Text> : null}
                { numDays >= 4 ? <Text style={styles.text}>{params.operatingDays[3]}</Text> : null}
            </View>
            <View style={{alignItems: "flex-start"}}>
                { numDays >= 1 ? <Text style={styles.text}>{params.operatingHours[0]}</Text> : null}
                { numDays >= 2 ? <Text style={styles.text}>{params.operatingHours[1]}</Text> : null}
                { numDays >= 3 ? <Text style={styles.text}>{params.operatingHours[2]}</Text> : null}
                { numDays >= 4 ? <Text style={styles.text}>{params.operatingHours[3]}</Text> : null}
            </View>

        </View>

        <View style={{marginBottom: "8%"}}>
            <Text style={styles.sectionText}>Contact:</Text>
            <View style={styles.numberView}>
                <Ionicons name='call-outline' size={16} />
                <Text style={styles.phoneText}>{params.phone}</Text>
            </View>
            
            {/* <Text style={styles.text}>sdkfjlsdjfkslfjldks</Text> */}
        </View>
        
      </View>


    </SafeAreaView>
  );
};


export default MoreInfo;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
    // paddingHorizontal: "5%",
  },
  header: {
    backgroundColor: '#f8b432',
    // flex: 1,
    height: "2%",
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    width: "100%",
    // paddingLeft: "14%",
    // paddingRight: "10%",
    // paddingTop: "1%",
    // paddingBottom: "4%",
  },
  containerMiddle: {
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "yellow",
    flex: 1,
    width: "100%",
    // paddingHorizontal: "5%",
    // paddingBottom: "3%",
    padding: "5%",
  },
  text: {
    color: "black",
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 1,
    // fontFamily: "Avenir",
  },
  headingText: {
    color: "black",
    textAlign: 'left',
    fontSize: 22,
    marginBottom: "8%",
    // flex: 1,
    fontWeight: "bold",
    // paddingLeft: "5%",
  }, 
  sectionText: {
    color: "black",
    textAlign: 'left',
    fontSize: 16,
    marginBottom: "3%",
    // flex: 1,
    // fontFamily: "Avenir",
    fontWeight: "600"
  }, 
  hoursView: {
    // flex: 1,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    // backgroundColor: "red",
    width: "100%",
    marginBottom: "8%",
  },
  addressText: {
    color: "black",
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 1,
    textDecorationLine: 'underline',
    color: "#007aff",
  },
  phoneText: {
    color: "black",
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 1,
    textDecorationLine: 'underline',
    marginLeft: 6,
  },
  numberView: {
      display: "flex",
      flexDirection: "row",
  }

});
