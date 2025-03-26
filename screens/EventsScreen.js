import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const eventsData = require('../assets/events.json');

const EventsScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.eventItem}>
      <Text style={styles.eventTitle}>{item.titulo}</Text>
      <Text style={styles.eventDescription}>{item.descricao}</Text>
      {item.videoUrl && (
        <TouchableOpacity onPress={() => Linking.openURL(item.videoUrl)}>
          <Text style={styles.link}>Assistir vídeo</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={eventsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  eventItem: { marginBottom: 20, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 10 },
  eventTitle: { fontSize: 18, fontWeight: 'bold' },
  eventDescription: { fontSize: 16, marginVertical: 8 },
  link: { color: '#4088ad', fontSize: 16 }
});

export default EventsScreen;
