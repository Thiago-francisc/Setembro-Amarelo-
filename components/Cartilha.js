import React from 'react';
//importando os componentes View e Text
import { View, Text, StyleSheet,  Image , ScrollView  } from 'react-native';



// função
export default function Cartilha() {
  return (
    <View style={styles.container}>
    <Image source={require('../assets/sa4.jpg')} style={{ width: 250, height: 250 }}/>
      <Text>
      

      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
container: {
flex: 2,
padding: 20,
backgroundColor:"#FFD700",
paddingTop: 10,
alignItems: "center",
justifyContent: "center",
},
});


