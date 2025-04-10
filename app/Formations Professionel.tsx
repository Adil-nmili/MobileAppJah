import React from 'react';
import * as Animatable from 'react-native-animatable';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  ImageBackground
} from 'react-native';
import { useRouter } from 'expo-router';
import data from '../data/formationData.json';
import { Dimensions } from 'react-native';
type Formation = {
  id: number;
  title: string;
  description: string;
  image: string;
};
const screenWidth = Dimensions.get('window').width;

const FormationPro = () => {
  const router = useRouter();
  const formationsPros: Formation[] = data.formationsPros;
  const handlePress = (formation: Formation) => {
    router.push({
      pathname: '/Detail Formation',
      params: {
        id: formation.id.toString(),
        title: formation.title,
        description: formation.description,
        image: formation.image,
      },
    });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} >
      <ImageBackground
        source={require('../assets/images/background (2).png')} // Remplacez par le chemin de votre image
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <FlatList
            data={formationsPros}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => (
              <Animatable.View
                animation="fadeInUp"
                delay={index * 150}
                duration={600}
                useNativeDriver
              >
                <TouchableOpacity style={styles.card} onPress={() => handlePress(item)}>
                  <Image source={{ uri: item.image }} style={styles.image} />
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.description} numberOfLines={2}>
                    {item.description}
                  </Text>
                </TouchableOpacity>
              </Animatable.View>
            )}
                 />
             </View>
          
     </ImageBackground>
  </ScrollView>
         );
       };
 export default FormationPro;
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Cela garantit que l'image occupe tout l'écran
    justifyContent: 'center', // Vous pouvez ajuster selon le placement du contenu
  },
  container: {
    flex: 1,
    padding: 16,

  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  card: {
    backgroundColor: 'rgba(223, 229, 227, 0.56)', // Couleur semi-transparente pour la carte
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },


  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
    color: '#222',
    textAlign: "center"
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});