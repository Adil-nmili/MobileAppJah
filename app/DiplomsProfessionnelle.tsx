// // components/DiplomePro.tsx

import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import diplomesProfessionnelle from '../data/formationData.json';

const DiplomePro = () => {
  return (
 
    <View style={styles.container}>
      <Text style={styles.header}>Diplôme de la Formation Professionnelle Accrédité par l'État</Text>
      <Text style={styles.description}>
        Découvrez nos formations accréditées par l'État marocain. Chaque parcours est conçu pour offrir une
        expertise concrète et adaptée au marché du travail.
      </Text>

      <FlatList
        data={diplomesProfessionnelle}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
             <Image source={{ uri: item.image }} style={styles.image} resizeMode="cover" />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.category}>{item.category}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>En savoir plus</Text>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={styles.cardContainer}
      />
    </View>
  );
};

export default DiplomePro;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  },
  description: {
    fontSize: 16,
    marginBottom: 20
  },
  cardContainer: {
    paddingBottom: 30
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginBottom: 10
  },
  title: {
    fontSize: 18,
    fontWeight: '600'
  },
  category: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600'
  }
});
