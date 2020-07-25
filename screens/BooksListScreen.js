import React, {useState} from 'react';
import {StyleSheet, View, FlatList, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {ListItem, Input, Button} from 'react-native-elements';
import { Octicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import axios from 'axios';


const BooksListScreen = ({navigation, route}) => {

  const [listBooks, setListBooks] = useState([]);
  const [search, setSearch] = useState("");

  function handleChange(text){
    setSearch(text);
  }
  
  function handleSubmit(){
    axios.get(`https://www.googleapis.com/books/v1/volumes?q="+${search}`)
    .then(res => {
      setListBooks(res.data.items);
  })}

  function closeKeyboard() {
    Keyboard.dismiss();
  }

    return ( 
      <TouchableWithoutFeedback onPress={closeKeyboard}>
        <View style={styles.container}>
          <Input placeholder="search a book..." value={search} onChangeText={text => handleChange(text)}/>
          <Button buttonStyle={styles.button} titleStyle={styles.buttonTitle} title="Search" type="outline" onPress={handleSubmit}/>
          <View style={styles.flatlist}>
            <FlatList
                data={listBooks}
                renderItem={({item}) => 
                    <ListItem
                        key={item.id}
                        title={item.volumeInfo.title}
                        subtitle={(item.volumeInfo.authors) ? (item.volumeInfo.authors[0]) : " "}
                        titleStyle={{fontSize: 17}}
                        onPress={() => navigation.navigate("Livre", item)}
                        leftIcon={<Octicons name="book" size={24} color="black" />}
                        rightIcon={<Entypo name="chevron-small-right" size={24} color="black" />}
                    />
                }
                keyExtractor={item => item.id.toString()}
              />
            </View>
            
        </View>
      </TouchableWithoutFeedback>
     );
}
 
export default BooksListScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 50
    },

    title: {
      fontSize: 10
    },

    button: {
      backgroundColor: '#fa4e4e',
      width: 150
    },
    buttonTitle: {
      color: '#fff'
    },
    flatlist: {
      marginTop: 30,
      width: '95%'
    }
  });
  