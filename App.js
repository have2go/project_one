import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';
import Dima from './src/components/Dima';

export default function App() {
  return (
    // <ScrollView>
    // <View style={styles.container}>
    //   <View>
    //     <Text>Дай имя этому коту</Text>
    //     <Image
    //       source={{
    //         uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
    //       }}
    //       style={{width: 200, height: 200}}
    //     />
    //   </View>
    //   <TextInput
    //     style={{
    //       height: 40,
    //       borderColor: 'gray',
    //       borderWidth: 1,
    //     }}
    //     defaultValue="Барсик"
    //   />
    //   <StatusBar style="auto" />
    // </View>
    // </ScrollView>
     <View style={styles.container}>
      <Dima />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
