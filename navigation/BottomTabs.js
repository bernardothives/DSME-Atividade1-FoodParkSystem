import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import EventsScreen from '../screens/EventsScreen';
import StoresStack from './StoresStack';
import CartScreen from '../screens/CartScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Início" component={HomeScreen} />
      <Tab.Screen name="Eventos" component={EventsScreen} />
      <Tab.Screen name="Lojas" component={StoresStack} />
      <Tab.Screen name="Carrinho" component={CartScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
