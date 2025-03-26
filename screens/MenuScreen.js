import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MenuScreen = ({ route }) => {
  const { store } = route.params;
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('MenuItemDetail', { item })}>
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <View style={styles.info}>
        <Text style={styles.itemName}>{item.nome}</Text>
        <Text style={styles.itemPrice}>R$ {item.preco.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={store.cardapio}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  menuItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  thumbnail: { width: 80, height: 80, borderRadius: 8 },
  info: { marginLeft: 16 },
  itemName: { fontSize: 18, fontWeight: 'bold' },
  itemPrice: { fontSize: 16, color: '#888' }
});

export default MenuScreen;
