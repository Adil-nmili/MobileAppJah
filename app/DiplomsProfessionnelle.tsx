// // components/DiplomePro.tsx

import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import diplomesProfessionnelle from '@/data/formationData.json';
import * as Animatable from 'react-native-animatable';
import { useRouter } from 'expo-router';

const DiplomePro = () => {
  const router = useRouter();
  const diplomes = diplomesProfessionnelle.diplomesProfessionnelle;
  
  const handlePress = (diplome: any) => {
    router.push({
      pathname: '/diplomeDetail',
      params: {
        diplome: JSON.stringify(diplome),
      },
    });
  };
  return (
 
    <View style={styles.container}>
      <Text style={styles.header}>Diplôme de la Formation Professionnelle Accrédité par l'État</Text>
      <Text style={styles.description}>
        Découvrez nos formations accréditées par l'État marocain. Chaque parcours est conçu pour offrir une
        expertise concrète et adaptée au marché du travail.
      </Text>
      <FlatList
            data={diplomes}
            
            renderItem={({ item, index }) => (
              <Animatable.View
                animation="fadeInUp"
                delay={index * 150}
                duration={600}
                useNativeDriver
              >
                <TouchableOpacity style={styles.card} onPress={() => handlePress(item)}>
                  <Image source={{ uri: item.image }} style={styles.image} />
                  <Text style={styles.title}>{item.titre}</Text>
                  <Text style={styles.description} numberOfLines={2}>
                    {item.competences_visees}
                  </Text>
                </TouchableOpacity>
              </Animatable.View>
            )}
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
