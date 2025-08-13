import {useState} from 'react';
import {StyleSheet,Text,View,Button} from 'react-native';


const CounterApp = ()=>{
  const [count,setCount] = useState(0);
  
  const Increment =()=>{
    setCount(count + 1);
  }
const Decrement =()=>{
    setCount(count - 1);
  }
  return(
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      
      <View style={styles.buttonAlign}>
      <Button style={styles.buttons} title='Increase' onPress={Increment}/>
<Button style={styles.buttons} title='Decrease' onPress={Decrement}/>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonAlign:{
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    gap:30
  },
  text:{
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
  buttons:{
    padding: 30,
    margin: 20,
  }
 });


export default CounterApp;