import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import {
  SweetText,
  SweetTitle,
  SweetButton,
  SweetImage,
  watermelon,
  white,
} from 'sweet-company-styles';


const image1 = 'https://st.depositphotos.com/1801791/1399/i/950/depositphotos_13999421-stock-photo-colorful-spiral-lollipop-lolly-pop.jpg';
const image2 = require('./img/lollypop.png');

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <SweetTitle style={{ color: white }}>
          Sweetly Delicious Title
        </SweetTitle>
        <SweetText style={styles.text}>
          Tasty tasty text
        </SweetText>
        <SweetButton
          style={{ margin: 10 }}
          type="primary"
          onPress={() => {}}
          text="Drink me"
        />
        <SweetButton
          style={{ margin: 10 }}
          type="secondary"
          onPress={() => {}}
          text="Eat me"
        />
        <SweetImage image={image} description="It's a candy cane!" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: watermelon,
  },
  text: {
    textAlign: 'center',
    margin: 10,
    color: white,
  },
});
