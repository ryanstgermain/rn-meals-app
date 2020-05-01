import React from 'react';
import { Platform } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen.js';
import CategoryMealsScreen from '../screens/CategoryMealsScreen.js';
import MealDetailScreen from '../screens/MealDetailScreen.js';
import FavoritesScreen from '../screens/FavoritesScreen.js';
import colors from '../constants/colors.js';

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen
  },
  {
    defaultNavigationOptions: {
      headStyle: {
        backgroundColor: Platform.OS === 'android' ? colors.primaryColor: ''    
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : colors.primaryColor
    }
  }
);

const MealsFavTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name='ios-restaurant'
              size={25}
              color={tabInfo.tintColor}
            />
          );
        }
      }
    },
    Favorites: {
      screen: FavoritesScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name='ios-star'
              size={25}
              color={tabInfo.tintColor}
            />
          );
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: colors.accentColor
    }
  }
);

export default createAppContainer(MealsFavTabNavigator);
