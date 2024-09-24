
import React from 'react';
import { View, StyleSheet } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';

import store from './src/redux/store';
import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BookmarkScreen from './src/screens/BookmarkScreen';
import { BookmarkProvider } from '../OMDBMovieApp/src/providers/BookmarkProvider';

const Stack = createStackNavigator();
const MainView = () => {
  return (
    <Provider store={store}>

      <BookmarkProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Welcome"
              component={WelcomeScreen}
              // options={{ headerShown: false }}  // Hide header on the WelcomeScreen
            />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Bookmarks" component={BookmarkScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </BookmarkProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default MainView;
