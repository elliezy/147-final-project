import { StyleSheet, Text, View, SafeAreaView, Pressable, Image, Dimensions, Platform } from "react-native";

import { Ionicons } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

export default function Dish({ imageUrl, name, price }) {
    const navigation = useNavigation();
    // console.log("in dish")
    return (
        // Pressable onPress={() => navigation.navigate('PreviewScreen', {previewUrl: previewUrl})}
        <View style={styles.item}>
            <View style={styles.imageView}>
                <Image style={styles.image} source={{uri: imageUrl}}/>
            </View>
            <View style={styles.textView}>
                <Text style={styles.dishName}>{name}</Text>
                <Text style={styles.text}>{price}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        display: "flex",
        flex: 1,
        // flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        width: Dimensions.get('window').width * 0.4,
        // backgroundColor: "#F1EBEA",
        borderRadius: 20,
        marginBottom: 12,
        marginLeft: "1.5%",
        // padding: 10,
        // margin: 8,
    },
    dishName: {
        color: "black",
        // textAlign: 'center',
        fontSize: 16,
        marginBottom: 1,
        fontWeight: "500",
    },
    text: {
        color: "black",
        // textAlign: 'center',
        fontSize: 16,
        marginBottom: 1,
    },
    imageView: {
        // borderRadius: 20,
        flex: 4,
        display: "flex",
        justifyContent: "flex-start",
        // paddingLeft: "1%"
    },
    image: {
        // width: Platform.isPad ? 140 : 120,
        // height: Platform.isPad ? 140 : 120,
        // width: "86%",
        width: Dimensions.get('window').width * 0.42,
        height: Dimensions.get('window').height * 0.2,
        marginBottom: 10,
        // margin: 8,
        resizeMode: "cover",
        flex: 3,
        // marginLeft: "3%",
        // marginRight: "3%",
        flex: 1,
        borderRadius: 16,
        // marginLeft: "7%"
    },
    textView: {
        display: "flex",
        flex: 1,
        // justifyContent: "flex-start",
        // alignItems: "flex-start",
        // backgroundColor: "yellow",
        // textAlign: 'left',
        // backgroundColor: "yellow",
    },
    nameText: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: "4%",
    },
});