import { StyleSheet, Text, View } from 'react-native';
import { MEALS } from '../data/dummy-data';

export default function MealsOverviewScreen() {
  return (
   
      <View style={styles.container}>
        <Text style={styles.text}>Meals Overview Screen</Text>
      </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:16,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:"#0400ff",
    fontSize:20,
    fontWeight:"bold"
  }
});
