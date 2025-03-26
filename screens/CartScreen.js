import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useCart } from '../context/CartContext';

const CartScreen = () => {
  const { cartItems, removeItem, clearCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Text style={styles.itemName}>{item.nome}</Text>
      <Text style={styles.itemDetails}>
        Quantidade: {item.quantidade} | Preço: R$ {item.preco.toFixed(2)}
      </Text>
      <TouchableOpacity style={styles.removeButton} onPress={() => removeItem(item.id)}>
        <Text style={styles.removeButtonText}>Remover</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyText}>Seu carrinho está vazio.</Text>
      ) : (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
          />
          <Text style={styles.total}>Total: R$ {total.toFixed(2)}</Text>
          <TouchableOpacity style={styles.clearButton} onPress={clearCart}>
            <Text style={styles.clearButtonText}>Esvaziar Carrinho</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  cartItem: { marginBottom: 16, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 8 },
  itemName: { fontSize: 18, fontWeight: 'bold' },
  itemDetails: { fontSize: 16, marginVertical: 4 },
  removeButton: { backgroundColor: '#dc3545', padding: 8, borderRadius: 4, alignSelf: 'flex-start' },
  removeButtonText: { color: '#fff' },
  total: { fontSize: 20, fontWeight: 'bold', marginVertical: 16 },
  clearButton: { backgroundColor: '#6c757d', padding: 12, borderRadius: 8, alignItems: 'center' },
  clearButtonText: { color: '#fff', fontSize: 16 },
  emptyText: { fontSize: 18, textAlign: 'center', marginTop: 50 }
});

export default CartScreen;
