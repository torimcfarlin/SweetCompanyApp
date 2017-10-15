import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import {
  SweetText,
  SweetTitle,
  SweetButton,
  watermelon,
  white,
} from 'sweet-company-styles';

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
