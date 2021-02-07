/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createStore} from 'redux';
import { Provider } from 'react-redux'
import PostsScreen from './src/components/PostsScreen';
import UserScreen from './src/components/UserScreen';
import ViewPostScreen from './src/components/ViewPostScreen';
import rootReducer from './src/reducers/index';

const Stack = createStackNavigator();
const store = createStore(rootReducer);


const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Posts" component={PostsScreen} />
          <Stack.Screen name="User" component={UserScreen} />
          <Stack.Screen name="ViewPost" component={ViewPostScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};


export default App;
