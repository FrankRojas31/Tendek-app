import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Botoncitos = () => {
  const handleButtonPress = (buttonName) => {
    console.log(`Button ${buttonName} pressed`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonPress("1")}
      >
        <Text style={styles.buttonText}>Botón 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonPress("2")}
      >
        <Text style={styles.buttonText}>Botón 2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonPress("3")}
      >
        <Text style={styles.buttonText}>Botón 3</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default MyComponent;
