import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import CardServices from '@/components/CardServices';
import SectionTitle from '@/components/SectionTitle';
import { useRouter } from 'expo-router';

const ServicesScreen: React.FC = () => {
  const router = useRouter();

  // Fonction pour gérer la navigation lors du clic sur les cartes
  const HandleFormationsQ = () => {
    router.push('/FormationsQ');  // Utilisation correcte de router.push pour naviguer
  };
  const HandleFormationsPro = () => {
    router.push('/FormationsPro');  // Utilisation correcte de router.push pour naviguer
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SectionTitle title="Nos Formations" />
      {/* Carte pour Formations Qualifiantes */}
      <CardServices
        title="Formations Qualifiantes"
        image={require('@/assets/images/formation.png')}
        onPress={() => HandleFormationsQ()} // Route pour Formations Qualifiantes
      />
      {/* Carte pour Formations Professionnelles */}
      <CardServices
        title="Formations Professionnelles"
        image={require('@/assets/images/diplome.png')}
        onPress={() => HandleFormationsPro()} // Route pour Formations Professionnelles
      />
    </ScrollView>
  );
};

export default ServicesScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
});
