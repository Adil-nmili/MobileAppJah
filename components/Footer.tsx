import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';

import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

type RoutePath = '/' | '/diplomes' | '/formations' | '/albums' | '/contact';

export default function Footer(): JSX.Element {
  const router = useRouter();

  const handleEmailPress = (): void => {
    Linking.openURL('mailto:jah.informatique@gmail.com');
  };

  const handlePhonePress = (phone: string): void => {
    Linking.openURL(`tel:${phone}`);
  };

  const handleLocationPress = (): void => {
    Linking.openURL('https://maps.google.com/?q=Lo+Houssna+2+Mhamid+Marrakech');
  };

  const handleRoutePress = (route: string): void => {
    router.push(route as any);
  };

  return (
    <ThemedView style={styles.footer}>
      {/* Jah Informatiques Plus Section */}
      <ThemedView style={styles.section}>
        <ThemedView style={styles.titleContainer}>
          <FontAwesome name="map-marker" size={20} color="#0EB582" />
          <ThemedText style={styles.sectionTitle}>Jah Informatiques Plus</ThemedText>
        </ThemedView>
        <ThemedText style={styles.description}>
          JAH INFORMATIQUE PLUS est une école de formation professionnelle privée.
        </ThemedText>
        <ThemedView style={styles.socialLinks}>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="facebook" size={24} color="#0EB582" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="youtube-play" size={24} color="#0EB582" />
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>

      {/* Liens Rapides Section */}
      <ThemedView style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Liens Rapides</ThemedText>
        <TouchableOpacity onPress={() => handleRoutePress('/')}>
          <ThemedText style={styles.link}>Accueil</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleRoutePress('/diplomes')}>
          <ThemedText style={styles.link}>Diplomes</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleRoutePress('/formations')}>
          <ThemedText style={styles.link}>Formations</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleRoutePress('/albums')}>
          <ThemedText style={styles.link}>Albums</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleRoutePress('/contact')}>
          <ThemedText style={styles.link}>Contact</ThemedText>
        </TouchableOpacity>
      </ThemedView>

      {/* Contactez-Nous Section */}
      <ThemedView style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Contactez-Nous</ThemedText>
        <TouchableOpacity onPress={handleEmailPress} style={styles.contactItem}>
          <FontAwesome name="envelope" size={16} color="#0EB582" style={styles.contactIcon} />
          <ThemedText style={styles.contactText}>jah.informatique@gmail.com</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLocationPress} style={styles.contactItem}>
          <FontAwesome name="map-marker" size={16} color="#0EB582" style={styles.contactIcon} />
          <ThemedText style={styles.contactText}>Lo Houssna 2 Mhamid (coté de mosquée al mohcininie Marrakech)</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePhonePress('+212524371619')} style={styles.contactText}>
          <FontAwesome name="phone" size={16} color="#0EB582" style={styles.contactIcon} />
          <ThemedText style={styles.contactText}>+212 5 24 37 16 19</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePhonePress('+212661729887')} style={styles.contactItem}>
          <FontAwesome name="phone" size={16} color="#0EB582" style={styles.contactIcon} />
          <ThemedText style={styles.contactText}>+212 6 61 72 98 87</ThemedText>
        </TouchableOpacity>
      </ThemedView>

      {/* Liens Utiles Section */}
      <ThemedView style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Liens Utiles</ThemedText>
        <TouchableOpacity>
          <ThemedText style={styles.link}>Ecole Jah Marrakech</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity>
          <ThemedText style={styles.link}>Département Santé et Beauté</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity>
          <ThemedText style={styles.link}>Ecole JAH Marrakech Modélisme Stylisme</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity>
          <ThemedText style={styles.link}>Ecole JAH Education Physique et Sportive</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity>
          <ThemedText style={styles.link}>Ecole JAH des Métiers Marrakech</ThemedText>
        </TouchableOpacity>
      </ThemedView>

      {/* Copyright Section */}
      <ThemedView style={styles.copyright}>
        <ThemedText style={styles.copyright}>
          Copyright © {new Date().getFullYear()} Jah Informatique Plus -All Right Reserved
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#E8F5F1',
    padding: 20,
  },
  section: {
    marginBottom: 30,
    backgroundColor: 'transparent',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'transparent',
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#333333',
    marginBottom: 15,
    marginLeft: 8,
    backgroundColor: 'transparent',
  },
  description: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 15,
    fontFamily: 'Poppins-Regular',
    lineHeight: 20,
  },
  socialLinks: {
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: 'transparent',
  },
  socialButton: {
    marginRight: 15,
  },
  link: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 10,
    fontFamily: 'Poppins-Regular',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  contactIcon: {
    marginRight: 10,
    marginTop: 3,
  },
  contactText: {
    fontSize: 14,
    color: '#666666',
    fontFamily: 'Poppins-Regular',
    flex: 1,
  },
  copyright: {
    borderTopWidth: 1,
    borderTopColor: '#dddddd',
    paddingTop: 20,
    marginTop: 20,
    backgroundColor: 'transparent',
  },
  copyrightText: {
    fontSize: 12,
    color: '#666666',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    backgroundColor: 'transparent',
  },
}); 