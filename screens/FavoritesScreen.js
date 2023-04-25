import { StyleSheet, Text, View } from 'react-native';
import MealsList from '../components/MealsList/MealsList';
import { useContext } from 'react';
import { FavoritesContext } from './store/context/favorites-context';
import { MEALS } from '../data/dummy-data';

export default function FavoritesScreen() {
  //Using FAVORITE CONTEXT to get favorite meals 
  const favoritesMealsCtx = useContext(FavoritesContext)

  // looking for all id's. If ID is equal to ID in FavMealsCtx list - we wanna keep it
  const favoriteMeals = MEALS.filter(meal => favoritesMealsCtx.ids.includes(meal.id))


  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You have no favorite meals yet. </Text>
      </View>
    )
  }
  return (

    <MealsList
      items={favoriteMeals}

    />


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white"
  }
});
