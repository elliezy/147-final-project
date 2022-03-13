import { StyleSheet, Text, View, SafeAreaView, Image, FlatList, Button, Pressable, Dimensions, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import InstaStory from "../../react-native-insta-story/index";
import SelectDropdown from 'react-native-select-dropdown'
import Ionicons from 'react-native-vector-icons/Ionicons';

import Dish from "./Dish";
import Modal from "react-native-modal";
import FilterModal from "./FilterModal";
import SortModal from "./SortModal";

import { db } from "../../firebase";
import { doc, getDocs, getDoc, collection, onSnapshot } from "firebase/firestore";


const RestaurantPage = ({ navigation, route, currentUser }) => {
  const params = route.params;
  
  const categories = ["All Dishes", "Appetizers", "Mains", "Sides", "Desserts", "Drinks"]
  const [dishes, setDishes] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [allDishes, setAllDishes] = useState([]);
  const [category, setCategory] = useState("All Dishes");

  const [restrictions, setRestrictions] = useState([]);
  const [diets, setDiets] = useState([]);

  const [chosenRestrictions, setChosenRestrictions] = useState([]);
  const [chosenDiets, setChosenDiets] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [actionTriggered, setActionTriggered] = useState('');
  const [sortBy, setSortBy] = useState("Popularity");
  

  const getDishesInCat = async ( newCat ) => {
    let allDocs = await getDocs(collection(db, "restaurants", params.name, newCat));
    let updated = (allDocs.docs.map((document) => {
      return document.data();
    }))
    setDishes(updated);
    setAllDishes(updated);
  };

  const renderDishes = ({item, navigation}) => {
    return (
      <Dish
        imageUrl={item.imageUrl}
        name={item.name}
        price={item.price} />
    );
  }

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const applyFilters = () => {
    setModalVisible(!isModalVisible);
    let combinedRestrictions = chosenRestrictions
    let combinedDiets = chosenDiets
    if (toggle == true) {
      combinedRestrictions = [...new Set([...restrictions, ...chosenRestrictions])]
      combinedDiets = [...new Set([...diets, ...chosenDiets])]
    }

    let updated = allDishes.filter(dish => !combinedRestrictions.some(r => dish.restrictions.includes(r)));
    updated = updated.filter(dish => combinedDiets.every(val => dish.diets.includes(val)));
    setDishes(updated)
  };

  const applySort = () => {
    if (sortBy === "Popularity") {
      dishes.sort((a, b) => (a.popularity < b.popularity ? 1 : -1))   
    } else if (sortBy === "Wait time") {
      dishes.sort((a, b) => (a.wait > b.wait ? 1 : -1))   
    } else if (sortBy === "Price: low to high") {
      dishes.sort((a, b) => (parseFloat(a.price.slice(1)) > parseFloat(b.price.slice(1)) ? 1 : -1))
    } else if (sortBy === "Price: high to low") {
      dishes.sort((a, b) => (parseFloat(a.price.slice(1)) < parseFloat(b.price.slice(1)) ? 1 : -1))
    }
  };


  useEffect(() => {
    navigation.setOptions({ headerTitle: params.name, });
  })

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "users", currentUser), (doc) => { 
      setRestrictions(doc.data().restrictions);
      setDiets(doc.data().diets);
    });
    return unsub;
  }, []);

  useEffect(() => {
    getDishesInCat(category);
  }, [category]);

  useEffect(() => {
    applySort();
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>{params.category}</Text>
        <View style={styles.headerExtension}>
          <Text style={styles.text}>{params.distance} miles away</Text>
          <View style={styles.yelpView}>
            <Image source={require("../../assets/yelp.png")} style={styles.yelpIcon}/>
            <Text style={styles.yelpBoldText}>{params.yelp}</Text>
            <Text style={styles.yelpText}> / 5 </Text>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.body}>
        <View style={styles.walkthroughView}>
          <Pressable style={styles.restaurantInfo} onPress={() => navigation.navigate('MoreInfo', {name: params.name, category: params.category, distance: params.distance, yelp: params.yelp, walkthrough: params.walkthrough, operatingDays: params.operatingDays, operatingHours: params.operatingHours, address: params.address, phone: params.phone })}>
            <Text style={styles.restaurantInfoText}>MORE INFORMATION</Text>
          </Pressable>

          <View style={styles.walkthroughTitle}>
            <Text style={styles.sectionText}>WALKTHROUGH</Text>
            <Pressable style={styles.galleryView} onPress={() => navigation.navigate('Gallery', {name: params.name, walkthrough: params.walkthrough })}>
              <Ionicons name="grid-outline" size={18} style={styles.galleryIcon}></Ionicons>
              <Text style={styles.galleryText}>GALLERY</Text>
            </Pressable>
          </View>

          <View style={styles.walkthroughFlatlist}>
            <InstaStory data={params.walkthrough}
                duration={10}
                style={{marginTop: "2%"}}/>
          </View>
        </View>
        
        <View style={styles.menuView}>
          <Text style={styles.sectionText}>MENU</Text>
          <View style={styles.optionsBar}>
            <View style={styles.dropdownView}>
              <SelectDropdown
                data={categories}
                onSelect={(selectedItem, index) => {
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  setCategory(selectedItem);
                  return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                  return item
                }}
                defaultButtonText="All Dishes"
                buttonStyle={{width: "75%", height: "90%", backgroundColor: "white", left: '-7.5%'}}
                buttonTextStyle={styles.dishTypeText}
                rowStyle={{height: 28}}
                dropdownStyle={{paddingLeft: '5%'}}
                rowTextStyle={{textAlign: "left"}}
                renderDropdownIcon={() => <Ionicons name="chevron-down-outline" size={22}></Ionicons>}
              />
            </View>
            
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
                    <Ionicons name='close-outline' size={40} color='black' style={styles.closeButton} />
                  </Pressable>
                  <View style={styles.modalHeaderView}>
                    <Text style={styles.modalHeaderText}>Filter</Text>
                  </View>
                  <FilterModal 
                    isEnabled={toggle}
                    setIsEnabled={setToggle}
                    restrictions={restrictions} 
                    chosenRestrictions={chosenRestrictions}
                    setChosenRestrictions={setChosenRestrictions} 
                    diets={diets}
                    chosenDiets={chosenDiets}
                    setChosenDiets={setChosenDiets} 
                  />
                  <Pressable style={styles.button} onPress={applyFilters}>
                      <Text style={styles.buttonTitle}>APPLY FILTERS</Text>
                  </Pressable>
                </View> :

              actionTriggered === 'sort' ?
                <View style={styles.modalView}>
                  <Pressable onPress={toggleModal}>
                    <Ionicons name='close-outline' size={40} color='black' style={styles.closeButton} />
                  </Pressable>
                  <View style={styles.modalHeaderView}>
                    <Text style={styles.modalHeaderText}>Sort By</Text>
                  </View>
                  <SortModal changeSortBy={setSortBy} sortBy={sortBy} />
                  <Pressable style={styles.button} onPress={() => {applySort(); setModalVisible(false);}}>
                      <Text style={styles.buttonTitle}>APPLY SORT</Text>
                  </Pressable>
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

        <View style={styles.menuFlatlist}>
          <FlatList 
            data={dishes}
            renderItem={({item}) => renderDishes({item})}
            keyExtractor={(item) => item.name} 
            numColumns={2} />
        </View>
      </ScrollView>

    </SafeAreaView>
  );
};


export default RestaurantPage;

const styles = StyleSheet.create({
  container: {
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: "white",
    flex: 1,
  },


  header: {
    backgroundColor: '#f8b432',
    width: "100%",
    height: "9%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingLeft: "11%",
    paddingRight: "11%",
    paddingVertical: "1%",
  },
  headerExtension: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "black",
    fontSize: 16,
    fontWeight: '300',
    textAlign: 'left',
  },
  yelpView: {
    display: "flex",
    flexDirection: "row",
  },
  yelpIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  yelpBoldText: {
    color: "#c41200",
    fontSize: 16,
    fontWeight: "800",
    textAlign: 'left',
  },
  yelpText: {
    color: "#c41200",
    fontSize: 16,
    fontWeight: "300",
    textAlign: 'left',
  },


  body: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: "5%",
    paddingBottom: "3%",
  },
  walkthroughView: {
    flex: 4,
    width: "100%",
    marginTop: "3%",
    marginBottom: "4%",
  },
  restaurantInfo: {
    width: "100%",
    height: "20%",
    backgroundColor: "#F1EBEA",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: '1%',
    marginBottom: "6%",
  },
  restaurantInfoText: {
    color: "black",
    fontSize: 16,
    fontWeight: "800",
    textAlign: 'center',
  },


  walkthroughTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  galleryView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  galleryIcon: {
    marginRight: "4%",
  },
  galleryText: {
    fontSize: 16,
    fontWeight: '300',
    textDecorationLine: 'underline',
  },
  walkthroughFlatlist: {
    flex: 10,
    width: "100%",
    paddingBottom: "10%",
  },


  menuView: {
    flex: 1,
    width: "100%",
  },
  sectionText: {
    color: "black",
    textAlign: 'left',
    fontSize: 26,
    fontWeight: "bold",
  }, 
  optionsBar: {
    display: "flex",
    flexDirection: "row",
    marginTop: '3%',
  },
  dropdownView: {
    flex: 4,
    display: "flex",
    flexDirection: "row",
  },
  dishTypeText: {
    color: "black",
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  filterSortViews: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginLeft: '5%',
  },
  filterSortText: {
    color: "black",
    textAlign: 'left',
    fontSize: 18,
    marginRight: 2,
    marginLeft: 3,
  },


  modalView: {
    height: "100%",
    width: "100%",
    backgroundColor: "#F1EBEA",
    marginTop: "28%",
    borderRadius: 20,
  },
  modalHeaderText: {
    color: "black",
    fontSize: 24,
    fontWeight: "500",
    paddingTop: '2%',
  }, 
  modalHeaderView: {
    position: 'absolute',
    top: "2.5%",
    justifyContent: 'center', 
    alignItems: 'center',
    alignSelf: 'center',
  }, 
  closeButton: {
    marginLeft: "5%",
    marginTop: "5%",
  },  
  button: {
    backgroundColor: '#f8b432',
    borderRadius: 10,    
    height: 40,   
    width: Dimensions.get('window').width * 0.8,
    marginHorizontal: "10%",
    justifyContent: "center",
    alignItems: "center",
    position: 'absolute',
    bottom: 100,
  },
  buttonTitle: {
    fontSize: 18,
    fontWeight: '800', 
    color: "black",
  },

  menuFlatlist: {
    flex: 1,
    width: "100%",
    marginTop: "4%",
  },
});