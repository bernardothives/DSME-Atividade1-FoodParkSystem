import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StoresScreen from '../screens/StoresScreen';
import StoreDetailScreen from '../screens/StoreDetailScreen';
import MenuScreen from '../screens/MenuScreen';
import MenuItemDetailScreen from '../screens/MenuItemDetailScreen';

const Stack = createStackNavigator();

const StoresStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="StoresList" component={StoresScreen}/>
      <Stack.Screen name="StoreDetail" component={StoreDetailScreen} options={{ title: 'Detalhes da Loja' }} />
      <Stack.Screen name="MenuScreen" component={MenuScreen} options={{ title: 'Cardápio' }} />
      <Stack.Screen name="MenuItemDetail" component={MenuItemDetailScreen} options={{ title: 'Detalhes do Produto' }} />
    </Stack.Navigator>
  );
};

export default StoresStack;
