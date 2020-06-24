import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RecipeNavigator from './navigation/RecipeNavigator';

export default function App() {
  return (
    // <RecipeNavigator/>
    <View style={styles.container}>
      <Text>Welcome to Recipes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
