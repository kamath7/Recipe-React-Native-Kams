import React from 'react'
import { StyleSheet, Text, View , Platform} from 'react-native'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator, defaultNavigationOptions} from 'react-navigation-stack';
import {Ionicons} from '@expo/vector-icons';

import RecipeCategoriesScreen from '../screens/RecipeCategoriesScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';

const RecipeNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryRecipes:{
        screen: RecipeCategoriesScreen
    },
    RecipeDetail:RecipeDetailScreen
})

export default createAppContainer(RecipeNavigator) ;

