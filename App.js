import CounterApp from './CounterApp';


import {SafeAreaView,StyleSheet} from 'react-native';
import ColorChangerApp from './ColorChangerApp.js';
import CounterApp from "./CounterApp.js";
export default function App() {

  return (
    
 <SafeAreaView style={styles.container}>
<CounterApp/>
 <ColorChangerApp />
 </SafeAreaView>
   )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});
