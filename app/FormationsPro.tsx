import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FormationsQ: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Page des Formations Proffesionnel</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FormationsQ;
