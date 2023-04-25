import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, Text, View, Image, Platform } from 'react-native';
import MealDetails from '../MealDetails';

export default function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {

  const navigation = useNavigation()
  function selectMealItemlHandler() {
    navigation.navigate('MealDetails', {
      mealId: id
    })
  }

  return (


    <View style={styles.mealItemContainer}>
      <Pressable android_ripple={{ color: "#ccc" }}
        style={({ pressed }) =>
          (pressed ? styles.buttonPressed : null)}
        onPress={selectMealItemlHandler}>

        <View style={styles.innerContainer}>
          <View>
            <Image
              style={styles.image}
              source={{ uri: imageUrl }}
            />
            <Text style={styles.title}>{title}</Text>
          </View>
       
                  <MealDetails duration={duration} complexity={complexity} affordability={affordability}/>


        </View>
      </Pressable>
    </View>


  );
}


const styles = StyleSheet.create({
  mealItemContainer: {
    flex: 1,
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor:"#9b4f08e3"
  },

  buttonPressed: {
    opacity: 0.55
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
    margin: 8
  },


});
