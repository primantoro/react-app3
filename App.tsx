import React, {Component} from 'react';

import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import mie from './src/assets/mie.jpg';

const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      <View style={MyStyle.MyBackground}>
        <Image source={mie} style={MyStyle.Img} />
        <Text style={MyStyle.MyText}>Mie Goreng</Text>
        <Text style={{fontSize: 14, color: 'red', marginTop: 10}}>
          Rp. 12.000,00
        </Text>
        <Text>Warmindo</Text>
        <View>
          <Text
            style={{
              backgroundColor: 'green',
              borderRadius: 5,
              textAlign: 'center',
              color: 'white',
            }}>
            beli
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const MyStyle = StyleSheet.create({
  Img: {
    width: 188,
    height: 107,
    borderRadius: 8,
  },
  MyBackground: {
    padding: 12,
    backgroundColor: '#95a5a6',
    width: 212,
    borderRadius: 8,
  },
  MyText: {
    marginTop: 20,
    fontWeight: 'bold',
    color: 'black',
    fontSize: 14,
  },
});

const StylingReactNaviteComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View
        style={{
          marginTop: 20,
          marginLeft: 50,
          width: 100,
          height: 100,
          borderWidth: 10,
          backgroundColor: '#c0392b',
          borderRadius: 50,
          borderColor: '#1abc9c',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: 'black',
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: 50,
  },
  background: {
    flex: 1,
    backgroundColor: '#9b59b6',
  },
});

const SampleComponent = () => {
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
          style={{borderRadius: 150}}
        />
        <Text style={{textAlign: 'center'}}>ini Gambar</Text>
      </View>
    );
  }
}

export default App;
