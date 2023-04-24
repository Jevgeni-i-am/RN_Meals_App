import { StyleSheet, Text, View } from 'react-native';

export default function Subtitle({children}) {
  return (

    <View style={styles.subTitleContainer} >
      <Text style={styles.subTitle}>{children}</Text>
    </View>

  );
}

const styles = StyleSheet.create({

  subTitleContainer: {
    marginVertical: 4,
    marginHorizontal: 12,
    padding: 6,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2
  },
  subTitle: {
    color: "#e2b497",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
