import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data.js';

const CategoryMealScreen = props => {
  const renderMealItem = itemData => {
    return (
      <View>
        <Text>
          {itemData.item.title}
        </Text>
      </View>
    )  
  };

  const categoryId = props.navigation.getParam('categoryId');

  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        //keyExtractor={(item, index) => item.id}
        data={displayedMeals}
        renderItem={renderMealItem}
      />
    </View>
  );
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(category => category.id === categoryId);

  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealScreen;
