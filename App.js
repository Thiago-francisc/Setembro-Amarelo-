import * as React from 'react';
import { Text, View, StyleSheet ,  ScrollView } from 'react-native';
import Constants from 'expo-constants';
import SCROLLVIEW from './components/SCROLLVIEW'

// You can import from local files
import AssetExample from './components/AssetExample';


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

import Cartilha from './components/Cartilha'






export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
       Setembro Amarelo 
      
      </Text>
      
      <Cartilha/>
      <SCROLLVIEW/>
    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
