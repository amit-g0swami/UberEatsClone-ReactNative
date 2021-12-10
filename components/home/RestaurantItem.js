import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MaterialCommuityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const localRestaurants = [
  {
    name: 'Beachside Bar',
    image_url: 'https://tinyurl.com/6xtvswea',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: 'Benihana',
    image_url: 'https://tinyurl.com/6xtvswea',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url: 'https://tinyurl.com/6xtvswea',
    categories: ['Indian', 'Bar'],
    price: '$$',
    reviews: 1244,
    rating: 4.9,
  },
];

const RestaurantItem = ({ navigation, restaurantsData }) => {
  return restaurantsData.map((restaurant, index) => (
    <TouchableOpacity
      key={index}
      style={{ marginBottom: 30 }}
      activeOpacity={1}
      onPress={() => {
        navigation.navigate('RestaurantDetail', {
          name: restaurant.name,
          image: restaurant.image_url,
          price: restaurant.price,
          reviews: restaurant.review_count,
          rating: restaurant.rating,
          categories: restaurant.categories,
        });
      }}
    >
      <View style={{ marginTop: 15, backgroundColor: 'white' }}>
        <RestaurantImage image={restaurant.image_url} />
        <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
      </View>
    </TouchableOpacity>
  ));
};

const RestaurantImage = ({ image }) => {
  return (
    <>
      <Image source={{ uri: image }} style={{ width: '100%', height: 180 }} />
      <TouchableOpacity style={{ position: 'absolute', top: 20, right: 20 }}>
        <MaterialCommuityIcons name='heart-outline' size={24} color='#fff' />
      </TouchableOpacity>
    </>
  );
};

const RestaurantInfo = ({ name, rating }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
      }}
    >
      <View>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{name}</Text>
        <Text style={{ fontSize: 13, color: 'gray' }}>30-45 min</Text>
      </View>
      <View
        style={{
          backgroundColor: '#eee',
          height: 30,
          width: 30,
          borderRadius: 15,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>{rating}</Text>
      </View>
    </View>
  );
};

export default RestaurantItem;
