/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, ScrollView, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class TallView extends Component {
  render() {
    return <Text style={{flex: 1, padding: 40}}>This is a tall View </Text>
  }
}

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <Text style={styles.instructions}>{instructions}</Text>
          <TallView />
          <TallView />
          <TallView />
          <TallView />
          <TallView />
          <TallView />
          <TallView />
          <TallView />
          <TallView />
          <TallView />
          <TallView />
          <TallView />
          <TallView />
          <TallView />
          <TallView />
          <TallView />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
