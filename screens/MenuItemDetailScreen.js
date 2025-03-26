import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useCart } from '../context/CartContext';

const MenuItemDetailScreen = ({ route }) => {
  const { item } = route.params;
  const [quantidade] = useState(1);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(item, quantidade);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.thumbnail }} style={styles.image} />
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.descricao}>{item.descricao}</Text>
      <Text style={styles.quantidade}>Quantidade: {item.quantidade}</Text>
      <Text style={styles.preco}>Preço: R$ {item.preco.toFixed(2)}</Text>
      <Text style={styles.ingredientesTitle}>Ingredientes:</Text>
      {item.ingredientes.map((ing, index) => (
        <Text key={index} style={styles.ingrediente}>- {ing}</Text>
      ))}
      <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
        <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, alignItems: 'center' },
  image: { width: '100%', height: 200, borderRadius: 8 },
  nome: { fontSize: 24, fontWeight: 'bold', marginVertical: 16 },
  descricao: { fontSize: 16, textAlign: 'center', marginBottom: 8 },
  quantidade: { fontSize: 16, marginBottom: 8 },
  preco: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  ingredientesTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 16 },
  ingrediente: { fontSize: 16 },
  button: { backgroundColor: '#28a745', padding: 12, borderRadius: 8, marginTop: 16 },
  buttonText: { color: '#fff', fontSize: 16 }
});

export default MenuItemDetailScreen;
