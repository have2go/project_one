import { StatusBar } from 'expo-status-bar';
import {Text, View, Image, TextInput, ScrollView } from 'react-native';
import Week from './src/components/Week';

export default function App() {
  return (
     <View className="h-2/3 m-auto w-11/12">
      <Week className="w-full"/>
    </View>
  );
}