import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

const ColorChangerApp = () => {
  const [bgColor, setBgColor] = useState('#FFFFFF'); // default white

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <View style={styles.buttonContainer}>
        <Button title="White" onPress={() => setBgColor('#FFFFFF')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Light Blue" onPress={() => setBgColor('#ADD8E6')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Light Green" onPress={() => setBgColor('#90EE90')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginVertical: 10,
    width: 200
  }
});

export default ColorChangerApp;