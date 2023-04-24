import { NavigationContainer } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, ImageBackground } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle: { backgroundColor: "#351401" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1"

      }}>
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All categoties",
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="list" color={color} size={size} />
          )
        }}

      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="star" color={color} size={size} />
          )
        }}
      />

    </Drawer.Navigator>
  )
}

const HeaderGradient = () => {
  return (
    <LinearGradient
      colors={["#ecfc0e", "#f30bb9", "#1ec008"]}
      style={styles.container} />

  )
}


export default function App() {
  return (<>
    <StatusBar style="light" />
    <ImageBackground source={require('./assets/images/food.jpg')}
      resizeMode="cover"
      style={styles.container}
      imageStyle={styles.backgroundImage}
    >

      <NavigationContainer>

        <Stack.Navigator
          initialRouteName="MealsCategories"
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" }
          }}
        >

          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false
            }}
          />

          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
          />

          <Stack.Screen
            name="MealDetails"
            component={MealDetailsScreen}
            options={{ title: "About the Meal" }}
          />

        </Stack.Navigator>

      </NavigationContainer>

    </ImageBackground>

  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.5
  }
});
