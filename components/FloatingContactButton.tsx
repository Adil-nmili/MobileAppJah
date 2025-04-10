import React, { useEffect, useState } from 'react';
import { TouchableOpacity, StyleSheet, Animated, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const FloatingContactButton = () => {
  const router = useRouter();
  const scale = new Animated.Value(1);

  const [position, setPosition] = useState({ x: 300, y: 550 }); // Position initiale
  const [dimensions, setDimensions] = useState({ width: 56, height: 56 }); // Dimensions initiales

  // Récupérer la taille de l'écran pour limiter les déplacements du bouton
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

  // Gérer l'animation de pression
  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.10,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 5,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const handlePress = () => {
    router.push('/Contact');
  };

 

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ scale }],
          left: position.x,
          top: position.y,
          width: dimensions.width,
          height: dimensions.height,
        },
      ]}
    >
      <TouchableOpacity
        style={[styles.button, { width: dimensions.width, height: dimensions.height }]} // Appliquer les dimensions
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={handlePress}
        activeOpacity={0.10}
      >
        <Ionicons name="chatbubbles-outline" size={24} color="#fff" />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 10,
    bottom:  200, // Position de départ du bouton, modifiable selon vos besoins
    right: 40,
    backgroundColor: 'transparent',
  },
  button: {
    backgroundColor: '#0000FF',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
});

export default FloatingContactButton;
