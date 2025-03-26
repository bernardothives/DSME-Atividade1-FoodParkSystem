import React, { useEffect, useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import BottomTabs from './navigation/BottomTabs';
import SplashScreen from './screens/SpashScreen';
import { CartProvider } from './context/CartContext';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

const MyTheme = {
  ...DefaultTheme,
  dark: true, 
  colors: {
    ...DefaultTheme.colors,
    primary: '#4088ad',
    background: '#0a0a09',
    text: '#fff',
    card: 'black',
    border: '#fff',
  },
};

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <CartProvider>
      <NavigationContainer theme={MyTheme}>
        <BottomTabs />
      </NavigationContainer>
    </CartProvider>
  );
}