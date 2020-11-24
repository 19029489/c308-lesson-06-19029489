import React from 'react';
import {ImageBackground, View, StyleSheet, Text, Image} from 'react-native';
import {ButtonList} from './Section';

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#E1DDAA',
    color: '#3F300E',
    fontSize: 20,
    padding: 20,
  },
  footerStyle: {
    backgroundColor: 'white',
    color: 'black',
    marginTop: 35,
  },
});

const BuzzForestApp = () => {
  return (
    <View>
      <ImageBackground
        source={require('./imgs/rainforest.jpg')}
        style={{width: '100%', height: '100%'}}>
        <View>
          <Text style={[styles.headerStyle]}>BuzzForest</Text>
        </View>
        <View>
          <Image
            source={require('./imgs/orangutan.jpg')}
            style={{
              height: 150,
              width: 330,
              marginTop: 20,
              marginRight: 20,
              marginLeft: 20,
              marginBottom: 20,
            }}
          />
        </View>
        <View>
          <ButtonList />
        </View>
        <View>
          <Text style={[styles.footerStyle]}>Copyright</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default BuzzForestApp;
