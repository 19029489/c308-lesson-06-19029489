import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  greenBox: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    borderWidth: 1,
    borderColor: 'black',
  },
  boxText: {
    textAlign: 'center',
    color: 'white',
  },
  title: {
    fontWeight: 'bold',
  },
});

const Activity2 = () => {
  return (
    <View>
      <Text>{'\n'}</Text>
      <Text style={[styles.greenBox, styles.boxText, styles.title]}>
        Who We Are
      </Text>
      <Text>{'\n'}</Text>
      <Text style={[styles.greenBox, styles.boxText]}>Our People</Text>
      <Text>{'\n'}</Text>
      <Text style={[styles.greenBox, styles.boxText]}>Our Campus</Text>
    </View>
  );
};

export default Activity2;
