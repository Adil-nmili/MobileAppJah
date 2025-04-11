import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import * as Animatable from 'react-native-animatable';
import data from '../data/formationData.json';
import SectionTitle from '@/components/SectionTitle';

type Formation = {
  id: number;
  titre: string;
  description: string;
  
};

const screenWidth = Dimensions.get('window').width;

const FormationsQ = () => {
  const router = useRouter();
  const formations: Formation[] = data.formations;

  const handlePress = (formation: Formation) => {
    router.push({
      pathname: '/Inscrire',
      params: {
        id: formation.id.toString(),
        titre: formation.titre,
        description: formation.description,
      },
    });
  };

  return (
    <ImageBackground
      source={require('@/assets/images/background (2).png')} // Remplacez par le chemin de votre image
      style={styles.backgroundImage}
      >
    <ScrollView showsVerticalScrollIndicator={false} >
      <View style={styles.container}>
        <SectionTitle  title={"Formations Qualifiantes"}/> 
        <FlatList
         showsVerticalScrollIndicator={false}
         data={formations}
         keyExtractor={(item) => item.id.toString()}
         contentContainerStyle={{ paddingBottom: 20 }}
          renderItem={({ item, index }) => (
            <Animatable.View
            animation="fadeInUp"
              delay={index * 150}
              duration={600}
              useNativeDriver
              >
              <TouchableOpacity style={styles.card} onPress={() => handlePress(item)}>
                <Text style={styles.title}>{item.titre}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </TouchableOpacity>
            </Animatable.View>
          )}
          />
      </View>
    </ScrollView>
    </ImageBackground>
  );
};

export default FormationsQ;
const styles = StyleSheet.create({
 
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Cela garantit que l'image occupe tout l'écran
    justifyContent: 'center', // Vous pouvez ajuster selon le placement du contenu
  },
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    
    
  },
  card: {
    backgroundColor: 'rgba(223, 229, 227, 0.56)', // Couleur semi-transparente pour la carte
    borderRadius: 16,
    padding: 10,
    marginBottom: 16,
    width: screenWidth * 0.9,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1.5,
    shadowRadius: 6,
    
  },
  
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0f172a',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#475569',
    textAlign: 'center',
  },
 
});
