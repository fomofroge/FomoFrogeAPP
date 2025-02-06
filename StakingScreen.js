import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StakingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Staking Dashboard</Text>
      <Text>Stake your FomoFroge tokens and earn rewards!</Text>
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

export default StakingScreen;