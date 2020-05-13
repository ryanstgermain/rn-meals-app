import React from 'react';
import { Platform } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen.js';
import CategoryMealsScreen from '../screens/CategoryMealsScreen.js';
import MealDetailScreen from '../screens/MealDetailScreen.js';
import FavoritesScreen from '../screens/FavoritesScreen.js';
import FiltersScreen from '../screens/FiltersScreen.js';
import colors from '../constants/colors.js';

const defaultStackOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? colors.primaryColor : ''
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : colors.primaryColor
};

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
    defaultNavigationOptions: defaultStackOptions
  }
);

const FavNavigator = createStackNavigator({
  Favorites: FavoritesScreen,
  MealDetail: MealDetailScreen
}, {
  defaultNavigationOptions: defaultStackOptions
});

const tabScreenConfig = {
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
      },
      tabBarColor: colors.primaryColor
    }
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons
            name='ios-star'
            size={25}
            color={tabInfo.tintColor}
          />
        );
      },
      tabBarColor: colors.accentColor
    }
  }
};

const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: 'white',
        shifting: true,
        barStyle: {
          backgroundColor: colors.primaryColor
        }
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: colors.accentColor
        }   
      });

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen
  },
  {
    defaultNavigationOptions: defaultStackOptions
  }
);

const MainNavigator = createDrawerNavigator({
  MealsFavs: {
    screen: MealsFavTabNavigator,
    navigationOptions: {
      drawerLabel: 'Meals'
    }
  },
  Filters: FiltersNavigator
}, {
  contentOptions: {
    activeTintColor: colors.accentColor,
    labelStyle: {
      fontFamily: 'open-sans-bold'
    }
  }
});

export default createAppContainer(MainNavigator);
