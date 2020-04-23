import { Platform } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen.js';
import CategoryMealsScreen from '../screens/CategoryMealsScreen.js';
import MealDetailScreen from '../screens/MealDetailScreen.js';
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

export default createAppContainer(MealsNavigator);
