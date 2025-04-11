// import React from 'react';
// import { View, Text, StyleSheet, Image, FlatList, ScrollView, Linking, TouchableOpacity } from 'react-native';
// import { useLocalSearchParams } from 'expo-router';

// const DiplomeDetail = () => {
//   const { diplome } = useLocalSearchParams();
//   const diplomeData = JSON.parse(decodeURIComponent(diplome as string));

//   const renderModule = ({ item }: { item: string }) => (
//     <Text style={styles.moduleItem}>• {item}</Text>
//   );

//   const renderCell = (title: string, content: React.ReactNode) => (
//     <View style={styles.cell}>
//       <Text style={styles.cellTitle}>{title}</Text>
//       <View style={styles.cellContent}>{content}</View>
//     </View>
//   );

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {/* Image */}
//       {renderCell('Image', <Image source={{ uri: diplomeData.image }} style={styles.image} />)}

//       {/* Titre du diplôme */}
//       {renderCell(' ', <Text style={styles.title}>{diplomeData.titre}</Text>)}

//       {/* Bourse */}
//       {diplomeData.bourse && renderCell('Bourse', <Text style={styles.highlight}>{diplomeData.bourse}</Text>)}

//       {/* Compétences visées */}
//       {renderCell('Compétences visées', <Text style={styles.description}>{diplomeData.competences_visees}</Text>)}

//       {/* Programme de formation - 1ère Année */}
//       {diplomeData.modules["1ère Année"] && renderCell('1ère Année', (
//         <View style={styles.moduleBlock}>
//           <FlatList
//             data={diplomeData.modules["1ère Année"]}
//             renderItem={renderModule}
//             keyExtractor={(item, index) => index.toString()}
//             scrollEnabled={false}
//           />
//         </View>
//       ))}

//       {/* Programme de formation - 2ème Année */}
//       {diplomeData.modules["2ème Année"] && renderCell('2ème Année', (
//         <View style={styles.moduleBlock}>
//           <FlatList
//             data={diplomeData.modules["2ème Année"]}
//             renderItem={renderModule}
//             keyExtractor={(item, index) => index.toString()}
//             scrollEnabled={false}
//           />
//         </View>
//       ))}

//       {/* Condition d'accès */}
//       {diplomeData.condition_acces && renderCell('Condition d’accès', <Text style={styles.description}>{diplomeData.condition_acces}</Text>)}

//       {/* Métiers */}
//       {renderCell('Métiers', (
//         <View style={styles.listContent}>
//           {diplomeData.metiers.map((metier, index) => (
//             <Text key={index} style={styles.bulletItem}>• {metier}</Text>
//           ))}
//         </View>
//       ))}

//       {/* Pièces à fournir */}
//       {renderCell('Pièces à Fournir', (
//         <View style={styles.listContent}>
//           {diplomeData.pieces_a_fournir.map((piece, index) => (
//             <Text key={index} style={styles.bulletItem}>• {piece}</Text>
//           ))}
//         </View>
//       ))}

//       {/* Contact */}
//       {renderCell('Contact', (
//         <View>
//           <Text style={styles.description}>Responsable : {diplomeData.contacts.responsable}</Text>
//           <Text style={styles.description}>Email : {diplomeData.contacts.email}</Text>
//           <Text style={styles.description}>Téléphone : {diplomeData.contacts.telephone}</Text>
//           <TouchableOpacity onPress={() => Linking.openURL(diplomeData.contacts.whatsapp)}>
//             <Text style={styles.link}>📱 WhatsApp</Text>
//           </TouchableOpacity>
//         </View>
//       ))}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   image: {
//     width: '100%',
//     height: 220,
//     borderRadius: 12,
//     marginBottom: 15,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   highlight: {
//     fontSize: 16,
//     color: '#0a7',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   section: {
//     marginBottom: 20,
//     backgroundColor: '#f9f9f9',
//     padding: 15,
//     borderRadius: 10,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     marginBottom: 10,
//     color: '#444',
//   },
//   description: {
//     fontSize: 16,
//     color: '#555',
//     lineHeight: 22,
//   },
//   bulletItem: {
//     fontSize: 16,
//     color: '#666',
//     paddingVertical: 3,
//   },
//   tableContainer: {
//     flexDirection: 'row',
//     gap: 10,
//     marginBottom: 20,
//   },
//   tableColumn: {
//     flex: 1,
//     backgroundColor: '#f0f0f0',
//     padding: 10,
//     borderRadius: 10,
//   },
//   columnHeader: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: '#222',
//   },
//   listContent: {
//     marginLeft: 20,
//   },
//   moduleItem: {
//     fontSize: 14,
//     color: '#444',
//     lineHeight: 22,
//   },
//   link: {
//     color: '#0066cc',
//     fontSize: 16,
//     marginTop: 8,
//   },
//   cell: {
//     marginBottom: 20,
//     backgroundColor: '#f9f9f9',
//     padding: 15,
//     borderRadius: 10,
//   },
//   cellTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: '#333',
//   },
//   cellContent: {
//     fontSize: 16,
//     color: '#555',
//   },
//   moduleBlock: {
//     backgroundColor: '#f0f0f0',
//     padding: 10,
//     borderRadius: 10,
//     marginBottom: 20,
//   },
// });

// export default DiplomeDetail;
import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const DiplomeDetail = () => {
  const { diplome } = useLocalSearchParams();
  const diplomeData = JSON.parse(decodeURIComponent(diplome as string));

  const renderModule = ({ item }: { item: string }) => (
    <Text style={styles.moduleItem}>• {item}</Text>
  );

  const renderCell = (title: string, content: React.ReactNode) => (
    <View style={styles.cell}>
      <Text style={styles.cellTitle}>{title}</Text>
      <View style={styles.cellContent}>{content}</View>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Image */}
      {renderCell('Image', <Image source={{ uri: diplomeData.image }} style={styles.image} />)}

      {/* Titre du diplôme */}
      {renderCell(' ', <Text style={styles.title}>{diplomeData.titre}</Text>)}

      {/* Bourse */}
      {diplomeData.bourse && renderCell('Bourse', <Text style={styles.highlight}>{diplomeData.bourse}</Text>)}

      {/* Compétences visées */}
      {renderCell('Compétences visées', <Text style={styles.description}>{diplomeData.competences_visees}</Text>)}

      {/* Programme de formation - 1ère Année */}
      {diplomeData.modules["1ère Année"] && renderCell('1ère Année', (
        <View style={styles.moduleBlock}>
          <FlatList
            data={diplomeData.modules["1ère Année"]}
            renderItem={renderModule}
            keyExtractor={(item, index) => index.toString()}
            scrollEnabled={false}
          />
        </View>
      ))}

      {/* Programme de formation - 2ème Année */}
      {diplomeData.modules["2ème Année"] && renderCell('2ème Année', (
        <View style={styles.moduleBlock}>
          <FlatList
            data={diplomeData.modules["2ème Année"]}
            renderItem={renderModule}
            keyExtractor={(item, index) => index.toString()}
            scrollEnabled={false}
          />
        </View>
      ))}

      {/* Condition d'accès */}
      {diplomeData.condition_acces && renderCell('Condition d’accès', <Text style={styles.description}>{diplomeData.condition_acces}</Text>)}

      {/* Métiers */}
      {diplomeData.metiers && Array.isArray(diplomeData.metiers) && renderCell('Métiers', (
        <View style={styles.listContent}>
          {diplomeData.metiers.map((metier , index) => (
            <Text key={index as number} style={styles.bulletItem}>• {metier}</Text>
          ))}
        </View>
      ))}

      {/* Pièces à fournir */}
      {diplomeData.pieces_a_fournir && Array.isArray(diplomeData.pieces_a_fournir) && renderCell('Pièces à Fournir', (
        <View style={styles.listContent}>
          {diplomeData.pieces_a_fournir.map((piece, index) => (
            <Text key={index} style={styles.bulletItem}>• {piece}</Text>
          ))}
        </View>
      ))}

      {/* Contact */}
      {renderCell('Contact', (
        <View>
          <Text style={styles.description}>Responsable : {diplomeData.contacts.responsable}</Text>
          <Text style={styles.description}>Email : {diplomeData.contacts.email}</Text>
          <Text style={styles.description}>Téléphone : {diplomeData.contacts.telephone}</Text>
          <TouchableOpacity onPress={() => Linking.openURL(diplomeData.contacts.whatsapp)}>
            <Text style={styles.link}>📱 WhatsApp</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 12,
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  highlight: {
    fontSize: 16,
    color: '#0a7',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#444',
  },
  description: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
  },
  bulletItem: {
    fontSize: 16,
    color: '#666',
    paddingVertical: 3,
  },
  tableContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  tableColumn: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
  },
  columnHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#222',
  },
  listContent: {
    marginLeft: 20,
  },
  moduleItem: {
    fontSize: 14,
    color: '#444',
    lineHeight: 22,
  },
  link: {
    color: '#0066cc',
    fontSize: 16,
    marginTop: 8,
  },
  cell: {
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
  },
  cellTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  cellContent: {
    fontSize: 16,
    color: '#555',
  },
  moduleBlock: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
});

export default DiplomeDetail;
