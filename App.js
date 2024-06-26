import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        My name is <Text style={styles.boldText}>Desmond Adarkwa</Text>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
const name = 'Desmond Adarkwa'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#98FB98',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24, // Increase the font size to 24
  },
  boldText: {
    fontWeight: 'bold',
  },
});
