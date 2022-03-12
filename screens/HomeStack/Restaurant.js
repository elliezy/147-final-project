import { StyleSheet, Text, View, SafeAreaView, Pressable, Image, Dimensions, Platform } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

export default function Restaurant({ imageUrl, name, distance, category, yelp, walkthrough, operatingDays, operatingHours, address, phone }) {
    const navigation = useNavigation();

    return (
        <Pressable onPress={() => navigation.navigate('RestaurantPage', {name: name, category: category, distance: distance, yelp: yelp, walkthrough: walkthrough, operatingDays: operatingDays, operatingHours: operatingHours, address: address, phone: phone })} style={styles.item}>
            <View style={styles.imageView}>
                <Image style={styles.image} source={{uri: imageUrl}}/>
            </View>
            <View style={styles.textView}>
                <Text style={styles.nameText}>{name}</Text>
                <Text style={styles.text}>{category}</Text>
                <Text style={styles.text}>{distance} miles away</Text>
                <View style={styles.yelpView}>
                    <Image source={require("../.././assets/yelp.png")} style={styles.yelpIcon}/>
                    <Text style={styles.yelpBoldText}>{yelp}</Text>
                    <Text style={styles.yelpText}> / 5 </Text>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    item: {
        display: "flex",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: Dimensions.get('window').width * 0.9,
        backgroundColor: "#F1EBEA",
        borderRadius: 15,
        marginBottom: '4%',
    },
    text: {
        color: "black",
        textAlign: 'left',
        fontSize: 16,
        fontWeight: '300',
        marginBottom: '1%',
    },
    imageView: {
        flex: 4,
        display: "flex",
        justifyContent: "flex-start",
        paddingHorizontal: "1%"
    },
    image: {
        width: Dimensions.get('window').width * 0.28,
        height: Dimensions.get('window').height * 0.13,
        resizeMode: "cover",
        marginVertical: '6%',
        marginHorizontal: "4%",
        borderRadius: 12,
    },

    textView: {
        display: "flex",
        flex: 7,
    },
    nameText: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: "3%",
    },
    yelpView: {
        display: "flex",
        flexDirection: "row",
        marginTop: "2%",
    },
    yelpIcon: {
        width: 18,
        height: 18,
        marginRight: 5,
    },
    yelpBoldText: {
        color: "#c41200",
        textAlign: 'left',
        fontSize: 16,
        fontWeight: "bold",
    },
    yelpText: {
        color: "#c41200",
        textAlign: 'left',
        fontSize: 16,
        fontWeight: "300",
    },
});