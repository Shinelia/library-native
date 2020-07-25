import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { Image, Card} from 'react-native-elements';
import {AirbnbRating} from 'react-native-ratings';


const BookScreen = ({ navigation, route }) => {

  
  return (
    <ScrollView style={styles.container}>
        <Card 
          title={route.params.volumeInfo.title} titleStyle={styles.title} containerStyle={styles.card}>
          <Text style={styles.section}>Author: {(route.params.volumeInfo.authors) ? (route.params.volumeInfo.authors[0]) : " "}</Text>
          <Text style={styles.section}>Categories: {route.params.volumeInfo.categories}</Text>
          <Text style={styles.section}>Published Date: {route.params.volumeInfo.publishedDate}</Text>
          <Text style={styles.section}>Publisher: {route.params.volumeInfo.publisher}</Text>
          <Image 
          style={styles.img}
          source={{ uri: route.params.volumeInfo.imageLinks.thumbnail}}
          transition={true}/>
          <Text style={styles.description}>{route.params.volumeInfo.description}</Text>  

          <AirbnbRating
            count={5}
            reviews={["Terrible", "Bad", "OK", "Very Good", "Jesus"]}
            defaultRating={3}
            size={20}
            reviewColor='#fa4e4e'
            selectedColor='#fa4e4e'
          />

        </Card>
    </ScrollView>
  );
}

export default BookScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },

  card: {
    borderColor: "#fa4e4e",
    borderRadius: 10,
    marginBottom: 20

  },

  title: {
    fontSize: 20,
    color: '#fa4e4e'
  },

  section: {
    fontSize: 16,
    marginBottom: 5
  },

  img: {
    width: 180,
    height: 250,
    margin: 50
  },

  description: {
    fontSize: 16,
    color: 'black',
    paddingBottom: 30
  },
});
