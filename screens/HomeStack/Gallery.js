import React, { useEffect, useState }  from 'react';
import {View, StyleSheet, Text} from 'react-native';
import GridImageView from 'react-native-grid-image-viewer';

const Gallery = ({ navigation, route }) => {
    const params = route.params
    useEffect(() => {
        navigation.setOptions({ headerTitle: params.name, });
    })
    // console.log(params.walkthrough)
    let images = []
    const walkthroughLen = params.walkthrough.length
    for (var i = 0; i < walkthroughLen; i++) {
        const newLen = params.walkthrough[i].stories.length
        for (var j = 0; j < newLen; j++) {
            images.push(params.walkthrough[i].stories[j].story_image)
        }
    }
    // console.log(images)
    return (
        <View style={styles.container}>
            <View style={styles.header}>
            </View>
            <View style={styles.background}>
                <Text style={styles.headingText}>Gallery View</Text>
                <Text style={styles.explore_text}>
                    Click on an image to view in full screen mode
                </Text>

                {/* Basic Usage */}
                <GridImageView data={images} />
            </View>
        </View>
        
    );
}

export default Gallery;


const styles = StyleSheet.create({
  container: {
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: '#f1ebea',    
    flex: 1,
  },
  background: {
    // backgroundColor: 'green',
    flex: 1,
    padding: "5%",
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
  headingText: {
    color: "black",
    textAlign: 'left',
    fontSize: 22,
    marginBottom: "2%",
    marginLeft: "1%",
    // flex: 1,
    fontWeight: "bold",
    // paddingLeft: "5%",
  }, 
  explore_text: {
    marginTop: 5,
    marginBottom: 10,
    marginLeft: "1%",
    color: 'black',
    // marginLeft: 20,
    fontSize: 12,
    // fontWeight: '600',
  },
});