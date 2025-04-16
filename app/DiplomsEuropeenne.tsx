import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useRouter } from 'expo-router';
import diplomesEurop from '@/data/formationData.json';

const DiplomeEurop = () => {
  const router = useRouter();
  const diplomes = diplomesEurop.diplomesEurop;

  const handlePress = (categorie: any) => {
    router.push({
      pathname: '/DiplomeParCategorie',
      params: {
        data: JSON.stringify(categorie), // On passe toute la catégorie avec les diplômes
      },
    });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} >

    <View style={styles.container}>
      <Text style={styles.header}>✓ Diplôme de la Fédération Européenne des Ecoles FEDE</Text>
      <Text style={styles.description}>
        La FEDE est un réseau de 500 établissements privés d'enseignement supérieur et de formation professionnelle partageant un projet commun d'exigence, de qualité et d'ambition : celui de mettre l'étudiant au cœur de son projet pédagogique.
      </Text>
      <Text style={[styles.description, { textAlign: 'right', writingDirection: 'rtl' }]}>
        FEDE عبارة عن شبكة من 500 مؤسسة خاصة للتعليم العالي والتدريب المهني تشترك في مشروع مشترك ذي معايير عالية وجودة وطموح: وهو وضع الطالب في قلب مشروعها التعليمي.
      </Text>
      <Text style={styles.subTitle}>📌 Les diplômes :</Text>

      <FlatList
        data={diplomes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Animatable.View
            animation="fadeInUp"
            delay={index * 150}
            duration={600}
            useNativeDriver
          >
            <TouchableOpacity style={styles.card} onPress={() => handlePress(item)}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.title}>{item.categorie}</Text>
  
            </TouchableOpacity>
          </Animatable.View>
        )}
      />
    </View>
  </ScrollView>
  );
};

export default DiplomeEurop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    marginTop: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
});
