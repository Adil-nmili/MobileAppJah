import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

type DiplomaCardProps = {
  category: string;
  title: string;
  subtitle?: string;
  image: any;
};

const DiplomaCard: React.FC<DiplomaCardProps> = ({ category, title, subtitle, image }) => {
  return (
    <View style={styles.card}>
      <View style={styles.category}>
        <Text style={styles.categoryText}>{category}</Text>
      </View>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>En Savoir Plus</Text>
        </TouchableOpacity>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Diplôme Reconnu Par L'État</Text>
          <Image
            source={require('../assets/state-recognized-badge.png')}
            style={styles.badge}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#28a745',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    flex: 1,
    margin: 8,
    elevation: 2,
  },
  category: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    zIndex: 1,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '600',
  },
  image: {
    width: '100%',
    height: 120,
  },
  content: {
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    color: '#083885',
    fontSize: 14,
  },
  subtitle: {
    fontSize: 12,
    color: '#444',
    marginVertical: 4,
  },
  button: {
    borderWidth: 1,
    borderColor: '#28a745',
    borderRadius: 5,
    paddingVertical: 6,
    alignItems: 'center',
    marginTop: 6,
  },
  buttonText: {
    color: '#28a745',
    fontWeight: '600',
  },
  footer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 11,
    color: '#333',
    flex: 1,
  },
  badge: {
    width: 30,
    height: 30,
  },
});

export default DiplomaCard;
