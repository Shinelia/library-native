import React from 'react';
import {StyleSheet,Text, View, Modal} from 'react-native';
import {Image, Button} from 'react-native-elements';

const HomeScreen = ({navigation, route}) => {

    // const [modalVisible, setModalVisible ] = useState(false);

    function navigateToDetails() {
        navigation.reset({
            index: 0,
            routes: [
                {name: "Library"}
            ]
        })

    }
    return ( 
        <View style={styles.container}>
            <Image style={styles.img} source={require("../img/book-pile.png")}/>
            <Button buttonStyle={styles.button} title="Accèder à la bibliothèque" onPress={navigateToDetails} />

            {/* <Modal visible={modalVisible}>
                <Text>
                    Coucou!
                </Text>
            </Modal> */}
        </View>
     );
}
 
export default HomeScreen;



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop: 50
    },
    
    img: {
        width: 160,
        height: 150,
        marginBottom: 55
    },

    button: {
        backgroundColor: '#fa4e4e',
        marginTop: 120
    }
  });
  