
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useRouter } from 'expo-router'; // ou 'next/router'
import data from '../data/formationData.json'; // adapte le chemin selon ton projet

type Formation = {
  id: number;
  titre: string;
  description: string;
};

const FormationsQ = () => {
  const router = useRouter();
  const formations: Formation[] = data.formations;

  const handlePress = (formation: Formation) => {
    router.push({
      pathname: '/Inscrire',
      params: {
        id: formation.id.toString(),
        titre: formation.titre,
        description: formation.description
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Formations Qualifiantes</Text>
      <FlatList
        data={formations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => handlePress(item)}>
            <Text style={styles.title}>{item.titre}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default FormationsQ;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#1e3a8a'
  },
  card: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0f172a',
  },
  description: {
    marginTop: 6,
    fontSize: 14,
    color: '#475569',
  },
});
