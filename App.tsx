import React from 'react';
import {Image, Text, TextInput, View} from 'react-native';

const App = () => {
  return (
    <View style={{backgroundColor: '#bdc3c7'}}>
      <View style={{height: 80, backgroundColor: '#1abc9c'}} />
      {/* Komponen primantoro itu komponen buatan */}
      <Primantoro />
      <Text>Yogo</Text>
      <ImageProfile />
      <TextInput style={{borderWidth: 1}} />
    </View>
  );
};

const Primantoro = () => {
  return <Text>Primantoro Dwi</Text>;
};

const ImageProfile = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/100/100/people'}}
      style={{width: 100, height: 100}}
    />
  );
};

export default App;
