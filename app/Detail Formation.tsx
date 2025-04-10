// DetailFormation.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

const DetailFormation = () => {
  const router = useRouter();
  const { id, title, description, image } = useLocalSearchParams();

  const handleInscription = () => {
    router.push({
      pathname: '/Inscrire',
      params: {
        id: id?.toString(),
        titre: title?.toString(),
        description: description?.toString(),
      },
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: image as string }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

      <TouchableOpacity style={styles.button} onPress={handleInscription}>
        <Text style={styles.buttonText}>S'inscrire</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  image: {
    width: '100%',
    height: 240,
    borderRadius: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 12,
    textAlign:"center",
  },
  description: {
    // fontSize: 16,
    // color: '#444',
    // lineHeight: 22,
    // marginBottom: 24,
    fontSize: 16,
    color: '#444',
    lineHeight: 22,
    marginBottom: 30,
    textAlign: 'right',  // Alignement à droite
   
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 'auto',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default DetailFormation;
// DetailFormation.tsx

// import React from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
// import { useLocalSearchParams, useRouter } from 'expo-router';

// const DetailFormation = () => {
//   const router = useRouter();
//   const { id, title, description, image } = useLocalSearchParams();

//   const handleInscription = () => {
//     router.push({
//       pathname: '/Inscrire',
//       params: {
//         id: id?.toString(),
//         titre: title?.toString(),
//         description: description?.toString(),
//       },
//     });
//   };

//   const formattedDescription = description?.split('\n').map((para, index) => (
//     <Text key={index} style={styles.paragraph}>
//       {para}
//     </Text>
//   ));

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Image source={{ uri: image as string }} style={styles.image} />
//       <Text style={styles.title}>{title}</Text>
//       {formattedDescription}

//       <TouchableOpacity style={styles.button} onPress={handleInscription}>
//         <Text style={styles.buttonText}>S'inscrire</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: '#fff',
//     flexGrow: 1,
//     justifyContent: 'flex-start',
//   },
//   image: {
//     width: '100%',
//     height: 240,
//     borderRadius: 12,
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     color: '#222',
//     marginBottom: 12,
//   },
//   paragraph: {
//     fontSize: 16,
//     color: '#444',
//     lineHeight: 22,
//     marginBottom: 10,  // Espacement entre chaque paragraphe
//     textAlign: 'right',
//   },
//   button: {
//     backgroundColor: '#007AFF',
//     paddingVertical: 14,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginTop: 'auto',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: '600',
//   },
// });

// export default DetailFormation;
