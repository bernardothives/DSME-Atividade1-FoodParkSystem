import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Carrega o carrinho armazenado no AsyncStorage ao iniciar o app
  useEffect(() => {
    const loadCart = async () => {
      try {
        const storedCart = await AsyncStorage.getItem('cart');
        if (storedCart) {
          setCartItems(JSON.parse(storedCart));
        }
      } catch (error) {
        console.log('Erro ao carregar o carrinho', error);
      }
    };

    loadCart();
  }, []);

  // Salva o carrinho sempre que ele for atualizado
  useEffect(() => {
    const saveCart = async () => {
      try {
        await AsyncStorage.setItem('cart', JSON.stringify(cartItems));
      } catch (error) {
        console.log('Erro ao salvar o carrinho', error);
      }
    };

    saveCart();
  }, [cartItems]);

  const addItem = (item, quantidade) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find(i => i.id === item.id);
      if (existing) {
        return prevItems.map(i =>
          i.id === item.id ? { ...i, quantidade: i.quantidade + quantidade } : i
        );
      } else {
        return [...prevItems, { ...item, quantidade }];
      }
    });
  };

  const removeItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== itemId));
  };

  const updateItemQuantity = (itemId, quantidade) => {
    setCartItems((prevItems) =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantidade } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, updateItemQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
