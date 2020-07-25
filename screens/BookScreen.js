import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Image, Card} from 'react-native-elements';


const BookScreen = ({ navigation, route }) => {

  return (
    <View style={styles.container}>
      <Card
        title={route.params.title}>
        <Text>{route.params.author}</Text>

        <Image 
        style={styles.img}
        source={{ uri: route.params.image }}/>
        <Text style={styles.description}>
          {route.params.description}
        </Text>     
      </Card>

    </View>
  );
}

export default BookScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10
  },

  img: {
    width: 100,
    height: 150
  },
  
  title: {

  },

  description: {
    fontSize: 12,
    color: 'gray'

  }
});
