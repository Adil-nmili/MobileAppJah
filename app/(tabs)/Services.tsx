import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import CardServices from '@/components/CardServices';
import SectionTitle from '@/components/SectionTitle';
import { useRouter } from 'expo-router';

// import FormationsQ form '@/components/FormationsQ';
const ServicesScreen: React.FC = () => {
  const router = useRouter();

  // Fonction pour gérer la navigation lors du clic sur les cartes
  const HandleFormationsQ = () => {
    router.push('/Formations Qualifiant');
  };
  const HandleFormationsPro = () => {
    router.push('/Formations Professionel');
  };
  const HandleDeplomePro = () => {
    router.push('/Diplôms Professionnelle');
  };
  const HandleDeplomeEurop = () => {
    router.push('/Diplôms Européenne');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}  contentContainerStyle={styles.container}>
      <SectionTitle title="Nos Formations" />
      {/* Carte pour Formations Qualifiantes */}
      <CardServices
        title="Formations Qualifiantes"
        image={require('@/assets/images/formationQ.png')}
        onPress={() => HandleFormationsQ()} // Route pour Formations Qualifiantes
      />
      {/* Carte pour Formations Professionnelles */}
      <CardServices
        title="Formations Professionnelles"
        image={require('@/assets/images/formationPro.png')}
        onPress={() => HandleFormationsPro()} // Route pour Formations Professionnelles
      />
      <SectionTitle title="Nos Diplôms" />
      <CardServices
        title=" Diplôme de la Formation Professionnelle Accrédité par l'Etat"
        image={require('@/assets/images/ImageD.png')}
        onPress={() => HandleDeplomePro()} 
        />

      <CardServices
        title=" Diplôme de la Fédération Européenne des Ecoles FEDE s"
        image={require('@/assets/images/jahimage.png')}
        onPress={() => HandleDeplomeEurop()} 
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
