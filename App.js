

import {View,Text,StyleSheet} from 'react-native';
import CounterApp from './CounterApp.js';
export default function App() {
  

  
  return (
   <View style={styles.container}>
   <CounterApp/>
   </View>
   )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});
