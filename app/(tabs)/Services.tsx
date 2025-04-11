import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import CardServices from '@/components/CardServices';
import SectionTitle from '@/components/SectionTitle';
import { useRouter } from 'expo-router';
import DiplomaCard from '@/components/DiplomaCard';

// import FormationsQ form '@/components/FormationsQ';
const ServicesScreen: React.FC = () => {
  const router = useRouter();

  // Fonction pour gérer la navigation lors du clic sur les cartes
  const HandleFormationsQ = () => {
    router.push('/formationsQualifiant');
  };
  const HandleFormationsPro = () => {
    router.push('/formationsProfessionel');
  };
  const HandleDeplomePro = () => {
    const diplomeData = {
      title: "Diplôme de la Formation Professionnelle Accrédité par l'Etat",
      image: require('@/assets/images/diplome.png'),
      description: "Description du diplôme...",
      modules: {
        "1ère Année": ["Module 1", "Module 2", "Module 3", "Module 4", "Module 5"],
        "2ème Année": ["Module 6", "Module 7", "Module 8", "Module 9", "Module 10"]
      }
    };
    router.push({
      pathname: '/DiplomsProfessionnelle',
      params: { diplome: JSON.stringify(diplomeData) }
    });
  };
  // const HandleDeplomeEurop = () => {
  //   router.push('/Diplôms Européenne');
  // };

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
      <DiplomaCard
      title="Diplôme de la Formation Professionnelle Accrédité par l'Etat"
      image={require('@/assets/images/diplome.png')}
      onPress={()=>HandleDeplomePro()}
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
