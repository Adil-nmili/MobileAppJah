// import React from 'react';
// import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions,  } from 'react-native';
// import * as Animatable from 'react-native-animatable';

// interface DiplomaCardProps {
//   title: string;
//   image: string;
//   onPress: () => void;
// }

// const DiplomaCard: React.FC<DiplomaCardProps> = ({ title, image, onPress }) => {

//     console.log(image)
//   return (
//     <Animatable.View animation="fadeInUp" style={styles.container}>
//       <TouchableOpacity onPress={onPress} style={styles.card}>
//             <Image source={{uri: image as string}} style={styles.image} resizeMode="cover" />
//         <View style={styles.textContainer}>
//           <Text style={styles.title}>{title}</Text>
//         </View>
//       </TouchableOpacity>
//     </Animatable.View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     width: '100%',
//     marginVertical: 10,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     overflow: 'hidden',
//   },
//   image: {
//     width: '100%',
//     height: 200,
//     borderRadius: 15,
//     backgroundColor: '#f0f0f0',
//   },
//   textContainer: {
//     padding: 15,
//     backgroundColor: 'rgba(255, 255, 255, 0.9)',
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: '#333',
//   },
// });

// export default DiplomaCard;
