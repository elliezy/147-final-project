import { StyleSheet, Text, View, SafeAreaView, Image, FlatList, Button, Pressable, Dimensions, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";

import InstaStory from "../../react-native-insta-story/index";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { db } from "../../firebase";
import { collection, doc, getDocs, getDoc } from "firebase/firestore";
import Dish from "./Dish";
import Modal from "react-native-modal";
import FilterModal from "./FilterModal";
import SortModal from "./SortModal";
import SelectDropdown from 'react-native-select-dropdown'

const RestoMiddle = ({ navigation, route }) => {
    return (
        <View style={styles.containerMiddle}>
            <View style={styles.walkthroughView}>
            <Pressable style={styles.restaurantInfoView} onPress={() => navigation.navigate('MoreInfo', {name: params.name, category: params.category, distance: params.distance, yelp: params.yelp, walkthrough: params.walkthrough, operatingDays: params.operatingDays, operatingHours: params.operatingHours, address: params.address, phone: params.phone })}>
                <Text style={styles.restaurantInfoText}>MORE INFORMATION</Text>
            </Pressable>
            <View style={styles.walkthroughTitleView}>
                <Text style={styles.sectionText}>WALKTHROUGH</Text>
                <Pressable style={styles.galleryView}  onPress={() => navigation.navigate('Gallery', {name: params.name, walkthrough: params.walkthrough })}>
                <Ionicons name="grid-outline" size={18} style={styles.galleryIcon}></Ionicons>
                <Text style={styles.galleryText}>GALLERY</Text>
                </Pressable>
            </View>
            <View style={styles.walkthroughFlatlistView}>
                <InstaStory data={params.walkthrough}
                    duration={10}
                    // onStart={item => console.log(item)}
                    // onClose={item => console.log('close: ', item)}
                    // customSwipeUpComponent={<View></View>}
                    style={{marginTop: "2%"}}/>
            </View>
            </View>
            
            <View style={styles.menuView}>
            <Text style={styles.sectionText}>MENU</Text>
            <View style={styles.subtitlesView}>
                {/* <View style={styles.dropdownView}>
                <Text style={styles.dishTypeText}>{category.charAt(0).toUpperCase() + category.slice(1)}</Text>
                <Ionicons name="chevron-down-outline" size={22}></Ionicons>
                </View> */}
                <View style={styles.dropdownView}>
                <SelectDropdown
                    data={categories}
                    onSelect={(selectedItem, index) => {
                    // setCategory(selectedItem);
                    // console.log(selectedItem, category)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    // useEffect(() => {
                    //   setCategory(selectedItem);
                    // }, []);
                    setCategory(selectedItem);
                    console.log("after", selectedItem, category)
                    
                    return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                    }}
                    buttonStyle={{width: "80%", height: "90%", backgroundColor: "white", left: -16}}
                    buttonTextStyle={styles.dishTypeText}
                    defaultButtonText="All Dishes"
                    rowStyle={{height: 28}}
                    rowTextStyle={{textAlign: "left"}}
                    renderDropdownIcon={() => <Ionicons name="chevron-down-outline" size={22}></Ionicons>}
                />
                </View>
                {/* <SelectDropdown
                data={categories}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                }}
                buttonStyle={{width: "40%", height: "90%"}}
                defaultButtonText="All"
                /> */}
                <View style={styles.filterSortViews}>
                <Text style={styles.filterSortText}>Filter</Text>
                <Pressable onPress={() => {
                    setModalVisible(true);
                    setActionTriggered('filter');
                    }}>
                    <Ionicons name="add-outline" size={22}></Ionicons>
                </Pressable>
                </View>
                <View style={styles.filterSortViews}>
                <Text style={styles.filterSortText}>Sort</Text>
                <Pressable onPress={() => {
                    setModalVisible(true);
                    setActionTriggered('sort');
                    }}>
                    <Ionicons name="add-outline" size={22}></Ionicons>
                </Pressable>
                </View>

                <Modal isVisible={isModalVisible} style={{ margin: 0 }}>
                <>{actionTriggered === 'filter' ?
                    <View style={styles.modalView}>
                    <Pressable onPress={toggleModal}>
                        <Text style={styles.xOut}> x </Text>
                    </Pressable>
                    <View style={styles.filterSortHeaderView}>
                        <Text style={styles.filterSortHeaderText}>Filter</Text>
                    </View>
                    <FilterModal isEnabled={toggle}
                                setIsEnabled={setToggle} 
                                chosenRestrictions={chosenRestrictions}
                                setChosenRestrictions={setChosenRestrictions} 
                                chosenDiets={chosenDiets}
                                setChosenDiets={setChosenDiets} />
                    <Pressable onPress={applyFilters}>
                        <View style={styles.button}>
                        <Text style={styles.buttonTitle}>APPLY FILTERS</Text>
                        </View>
                    </Pressable>
                    </View> :
                actionTriggered === 'sort' ?
                    <View style={styles.modalView}>
                    <Pressable onPress={toggleModal}>
                        <Text style={styles.xOut} > x </Text>
                    </Pressable>
                    <View style={styles.filterSortHeaderView}>
                        <Text style={styles.filterSortHeaderText}>Sort By</Text>
                    </View>
                    <SortModal changeSortBy={setSortBy} sortBy={sortBy} />
                    <Pressable onPress={applySort}>
                        <View style={styles.button}>
                        <Text style={styles.buttonTitle}>APPLY SORT</Text>
                        </View>
                    </Pressable>
                    {/* <FilterModal/> */}
                </View> :
                null}</>
                </Modal>

            </View>
            {/* <FlatList 
                data={dishes}
                renderItem={({item}) => renderDishes({item})}
                keyExtractor={(item) => item.name} 
                numColumns={2} /> */}
            </View>
        </View>
    );
}

export default RestoMiddle;

