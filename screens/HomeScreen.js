import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';

const patioData = require('../assets/patio.json');

const HomeScreen = () => {
  const { nome, fotos, endereco, telefone, whatsapp, redesSociais, site, email } = patioData;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{nome}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.photosContainer}>
        {fotos.map((foto, index) => (
          <Image key={index} source={{ uri: foto }} style={styles.photo} />
        ))}
      </ScrollView>
      <Text style={styles.text}>{endereco}</Text>
      <TouchableOpacity onPress={() => Linking.openURL(`tel:${telefone}`)}>
        <Text style={styles.link}>Telefone: {telefone}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL(`https://wa.me/${whatsapp}`)}>
        <Text style={styles.link}>WhatsApp</Text>
      </TouchableOpacity>
      {redesSociais.map((rede, index) => (
        <TouchableOpacity key={index} onPress={() => Linking.openURL(rede.url)}>
          <Text style={styles.link}>{rede.nome}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity onPress={() => Linking.openURL(site)}>
        <Text style={styles.link}>Site</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL(`mailto:${email}`)}>
        <Text style={styles.link}>E-mail</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16, alignItems: 'center' },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 16, color: '#4088ad' },
  photosContainer: { flexDirection: 'row', marginBottom: 16 },
  photo: { width: 200, height: 120, marginRight: 8, borderRadius: 8 },
  text: { fontSize: 16, marginBottom: 8 },
  link: { fontSize: 16, color: '#4088ad', marginBottom: 8 }
});

export default HomeScreen;
