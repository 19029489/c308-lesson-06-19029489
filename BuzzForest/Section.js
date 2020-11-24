import React from 'react';
import {View, Text, Button, StyleSheet, Alert} from 'react-native';

const styles = StyleSheet.create({
  textStyle: {
    backgroundColor: '#557622',
    color: '#F4F3E4',
  },
});

class Section extends React.Component {
  render() {
    return (
      <View
        style={{
          marginRight: 20,
          marginLeft: 20,
          marginBottom: 20,
        }}>
        <Button
          onPress={() => {
            Alert.alert(this.props.title + ' button pressed!');
          }}
          color="#BF4216"
          title={this.props.title}
        />
        <Text style={[styles.textStyle]}>{this.props.description}</Text>
      </View>
    );
  }
}

const SECTION_DATA = [
  {
    title: 'Animals',
    description:
      'See the animal exhibits, discover the secrets about the animals we love and how they are cared for daily. Seize the opportunity to interact with some of the animal.',
  },
  {
    title: 'Acivities',
    description:
      'You, not only get to see animals, but all visitors can satisfy their curiosity, feed the animals and get up-close with the animals and have fun.',
  },
  {
    title: 'Find Us',
    description:
      'Making your way to BuzzForest is easy. No matter where you are, there are many quick and convenient ways to find us.',
  },
];

const ButtonList = () => {
  return SECTION_DATA.map((section) => {
    return <Section title={section.title} description={section.description} />;
  });
};

export {ButtonList};
