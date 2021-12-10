import React from 'react';
import { View, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function SearchBar({ cityHandler }) {
  return (
    <View style={{ marginTop: 15, flexDirection: 'row' }}>
      <GooglePlacesAutocomplete
        query={{
          key: 'AIzaSyATiAqIXBARofRD2apZcPQ1eEWZPH4fPV4',
          // AIzaSyADUZh5qiEak2fr2q5bOR9Au29GOjWOoLw
          language: 'en',
        }}
        onPress={(data, details = null) => {
          console.log(data.description, details);
          const city = data.description.split(',')[0];
          cityHandler(city);
        }}
        placeholder='Search'
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 10,
          },
        }}
        renderLeftButton={() => {
          return (
            <View style={{ marginLeft: 10 }}>
              <Ionicons name='location-sharp' size={24} />
            </View>
          );
        }}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'white',
              marginRight: 8,
              padding: 9,
              borderRadius: 30,
              alignItems: 'center',
            }}
          >
            <AntDesign
              name='clockcircle'
              size={11}
              style={{ marginRight: 6 }}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}
