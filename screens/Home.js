import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
} from 'react-native';
import Categories from '../components/home/Categories';
import HeaderTabs from '../components/home/HeaderTabs';
import RestaurantItem, {
  localRestaurants,
} from '../components/home/RestaurantItem';
import SearchBar from '../components/home/SearchBar';
import { Divider } from 'react-native-elements';
import BottomTabs from '../components/home/BottomTabs';

export default function Home({ navigation }) {
  const [restaurantsData, setRestaurantsData] = useState(localRestaurants);
  const [city, setCity] = useState('San Francisco');
  const [activeTab, setActiveTab] = useState('Delivery');

  const YELP_API_KEY =
    'sGb2oI3S0Jn1WW8Wt_1AOIdsh8CMr3XL7J2AewxJw9u3VqxfoOm6ZwGsadzVi-GBXzTxYGH74mnAfbthZHQbdSHFvYEgs_SFtkvXJ91FG4mIejNrF1Ak16Y65VhqYXYx';

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((response) => response.json())
      .then((json) =>
        setRestaurantsData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={[styles.androidSafeArea, { backgroundColor: '#eee' }]}>
      <View style={{ backgroundColor: 'white', paddingBottom: 100 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            marginTop: 10,
            paddingHorizontal: 10,
          }}
        >
          <Categories />
          <RestaurantItem
            restaurantsData={restaurantsData}
            navigation={navigation}
          />
        </ScrollView>
        <Divider width={1} />
        <BottomTabs />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    marginBottom: Platform.OS === 'android' ? 75 : 0,
  },
});
