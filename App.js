import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import BooksListScreen from './screens/BooksListScreen';
import BookScreen from './screens/BookScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='home'
        screenOptions=
          {{
            headerStyle: {
            backgroundColor: "#fa4e4e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: 'bold',
              }
          } 
        }>
        <Stack.Screen 
          name="Accueil" 
          component={HomeScreen}
          options={
            {title: "Bienvenue"}
          }
        />
        <Stack.Screen 
          name="Library" 
          component={BooksListScreen} 
          options={
            {title: "Bibliothèque"}
          }
        />
        <Stack.Screen
          name="Livre"
          component={BookScreen}
          options={
            {title: "En savoir plus :"}
          }
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}
