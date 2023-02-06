import React, {Component} from 'react';
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
      <BoxGreen />
      <Profile />
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

class BoxGreen extends Component {
  render() {
    return <Text>ini komponen dari class BoxGreen</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{
            uri: 'https://img.freepik.com/free-vector/illustration-character-civil-servants-indonesia-wearing-work-uniforms_10045-683.jpg?size=338&ext=jpg',
            width: 300,
            height: 300,
          }}
          style={{borderRadius:150}}
        />
        <Text style={{textAlign: 'center'}}>ini Gambar</Text>
      </View>
    );
  }
}

export default App;
