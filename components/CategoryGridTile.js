import { Pressable, StyleSheet, Text, View, Platform } from 'react-native';

export default function CategoryGridTile({ title, color, onPress }) {
  return (

    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.buttonStyle,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={ onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}> {title}</Text>
        </View>

      </Pressable>
    </View>


  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 12,
    height: 150,
    borderRadius: 12,
    // Android
    elevation: 5,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    // IOs
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,

  },
  buttonStyle: {
    flex: 1
  },
  buttonPressed: {
    opacity: 0.25
  },

  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: 'center',
  },

  title: {
    fontWeight: "bold",
    fontSize: 18
  }





});
