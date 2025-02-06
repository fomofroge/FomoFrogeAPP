import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to FomoFroge!</Text>
      <Button title="Staking" onPress={() => navigation.navigate('Staking')} />
      <Button title="Wallet" onPress={() => navigation.navigate('Wallet')} />
      <Button title="NFTs" onPress={() => navigation.navigate('NFTs')} />
      <Button title="Games" onPress={() => navigation.navigate('Games')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
  },
  title: {
    fontSize: 24,
    color: '#FFEB3B',
    marginBottom: 20,
  },
});

export default HomeScreen;