import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text variant="displayLarge" style={styles.title}>🎮 Game On</Text>
      <Text variant="headlineSmall" style={styles.subtitle}>Competitive Gaming Platform</Text>
      
      <View style={styles.buttons}>
        <Button mode="contained" style={styles.button}>1v1 Games</Button>
        <Button mode="contained" style={styles.button}>Tournaments</Button>
        <Button mode="contained" style={styles.button}>4v4 Teams</Button>
        <Button mode="outlined" style={styles.button}>Profile</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    padding: 20,
  },
  title: {
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    color: '#aaa',
    marginBottom: 40,
    textAlign: 'center',
  },
  buttons: {
    width: '100%',
    gap: 15,
  },
  button: {
    marginVertical: 8,
  },
});

export default HomeScreen;
