import React, {useState, useEffect} from "react";
import {View, Image, TouchableOpacity, Text, StyleSheet, Platform, ImageBackground} from "react-native";
import {usePrevious} from "./helpers/StateHelpers";

import DEFAULT_AVATAR from "./assets/images/no_avatar.png";

const StoryCircleListItem = (props) => {

    const {
        item,
        unPressedBorderColor,
        pressedBorderColor,
        avatarSize,
        showText,
        textStyle
    } = props;

    const [isPressed, setIsPressed] = useState(props?.item?.seen);

    const prevSeen = usePrevious(props?.item?.seen);

    useEffect(() => {
        if (prevSeen != props?.item?.seen) {
            setIsPressed(props?.item?.seen);
        }

    }, [props?.item?.seen]);

    const _handleItemPress = item => {
        const {handleStoryItemPress} = props;

        if (handleStoryItemPress) handleStoryItemPress(item);

        setIsPressed(true);
    };

    const size = avatarSize ?? 90;

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => _handleItemPress(item)}
                style={[
                    styles.avatarWrapper,
                    {
                        height: avatarSize ?? 115 + 4,
                        width: size + 4,
                    },
                    // !isPressed
                    //     ? {
                    //         borderColor: unPressedBorderColor
                    //             ? unPressedBorderColor
                    //             : '#f8b432'
                    //     }
                    //     : {
                    //         borderColor: pressedBorderColor
                    //             ? pressedBorderColor
                    //             : 'grey'
                    //     }
                ]}
            >
                <ImageBackground
                    style={{
                        height: avatarSize ?? 115,
                        width: size,
                        borderRadius: 18,
                    }}
                    imageStyle={{ borderRadius: 14, }}
                    source={{uri: item.user_image}}
                    defaultSource={Platform.OS === 'ios' ? DEFAULT_AVATAR : null}>
                    <Text
                        numberOfLines={1}
                        ellipsizeMode={'tail'}
                        style={{
                            width: size + 4,
                            color: "white",
                            ...styles.picBotText,
                            ...textStyle
                        }}>{item.user_name}
                    </Text>
                </ImageBackground>
            </TouchableOpacity>
            {/* {showText &&
                <Text
                    numberOfLines={1}
                    ellipsizeMode={'tail'}
                    style={{
                        width: size + 4,
                        ...styles.text,
                        ...textStyle
                    }}>{item.user_name}</Text>} */}
        </View>
    );
}

export default StoryCircleListItem;

const styles = StyleSheet.create({
    container: {
        // marginVertical: 2,
        marginRight: 10,
        // display: "flex"
        // backgroundColor: "yellow",
    },
    avatarWrapper: {
        // borderWidth: 40,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        // borderColor: 'purple',
        borderRadius: 20,
        height: 80,
        width: 64
    },
    text: {
        marginTop: 2,
        textAlign: "center",
        alignItems: "center",
        fontSize: 18
    },
    picBotText: {
        position: "absolute",
        bottom: "4%",
        left: "5%",
        fontSize: Platform.isPad ? 24 : 18,
        color: "white",
        fontWeight: "bold",
    },
});
