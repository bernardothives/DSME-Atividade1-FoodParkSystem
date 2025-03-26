import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

const StoreDetailScreen = ({ route, navigation }) => {
  const { store } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: store.banner }} style={styles.banner} />
      <Text style={styles.name}>{store.nome}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.photosContainer}>
        {store.fotos.map((foto, index) => (
          <Image key={index} source={{ uri: foto }} style={styles.photo} />
        ))}
      </ScrollView>
      <Text style={styles.description}>{store.descricao}</Text>
      <TouchableOpacity onPress={() => Linking.openURL(`tel:${store.telefone}`)}>
        <Text style={styles.link}>Telefone: {store.telefone}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL(`https://wa.me/${store.whatsapp}`)}>
        <Text style={styles.link}>WhatsApp</Text>
      </TouchableOpacity>
      {store.redesSociais.map((rede, index) => (
        <TouchableOpacity key={index} onPress={() => Linking.openURL(rede.url)}>
          <Text style={styles.link}>{rede.nome}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity onPress={() => Linking.openURL(`mailto:${store.email}`)}>
        <Text style={styles.link}>E-mail</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MenuScreen', { store })}>
        <Text style={styles.buttonText}>Ver Cardápio</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(store.deliveryUrl)}>
        <Text style={styles.buttonText}>Delivery</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16, alignItems: 'center' },
  banner: { width: '100%', height: 150, borderRadius: 8 },
  name: { color: '#fff', fontSize: 24, fontWeight: 'bold', marginVertical: 16 },
  photosContainer: { flexDirection: 'row', marginBottom: 16 },
  photo: { width: 150, height: 100, marginRight: 8, borderRadius: 8 },
  description: { fontSize: 16, marginBottom: 16 },
  link: { fontSize: 16, color: '#4088ad', marginBottom: 8 },
  button: { backgroundColor: '#007BFF', padding: 10, borderRadius: 8, marginVertical: 8, width: '80%', alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16 }
});

export default StoreDetailScreen;
