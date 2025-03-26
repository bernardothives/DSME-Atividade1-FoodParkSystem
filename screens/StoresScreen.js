import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const storesData = require('../assets/stores.json');

const StoresScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.storeItem}
      onPress={() => navigation.navigate('StoreDetail', { store: item })}
    >
      <Image source={{ uri: item.banner }} style={styles.banner} />
      <Text style={styles.storeName}>{item.nome}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={storesData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  storeItem: { marginBottom: 20, alignItems: 'center' },
  banner: { width: '100%', height: 120, borderRadius: 8 },
  storeName: { marginTop: 8, fontSize: 18, fontWeight: 'bold' }
});

export default StoresScreen;
