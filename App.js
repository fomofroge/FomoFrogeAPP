// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import StakingScreen from './screens/StakingScreen';
import WalletScreen from './screens/WalletScreen';
import NFTScreen from './screens/NFTScreen';
import GamesScreen from './screens/GamesScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Staking" component={StakingScreen} />
        <Stack.Screen name="Wallet" component={WalletScreen} />
        <Stack.Screen name="NFTs" component={NFTScreen} />
        <Stack.Screen name="Games" component={GamesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}