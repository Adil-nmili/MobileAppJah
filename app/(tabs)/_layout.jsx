import { Tabs } from 'expo-router';
import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import FloatingContactButton from '@/components/FloatingContactButton'; // assure-toi que le chemin est correct

import { HapticTab } from '@/components/HapticTab'
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { ThemedText } from '@/components/ThemedText';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          tabBarLabelStyle: styles.tabBarLabel,
          headerShown: true,
          headerTitle: () => (
            <View style={styles.headerTitleContainer}>
              <Image source={require('@/assets/images/LOGO.jpg')} style={styles.headerLogo} />
              <ThemedText>JAH INFORMATIQUE</ThemedText>
            </View>
          ),
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
        }}
      >
        <Tabs.Screen name="index" options={{
          title: 'Accueil',
          tabBarIcon: ({ color }) => <IconSymbol size={20} name="house.fill" color={color} />,
        }} />
        <Tabs.Screen name="service" options={{
          title: 'Services',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }} />
        <Tabs.Screen name="about" options={{
          title: 'À propos',
          tabBarIcon: ({ color }) => <IconSymbol size={20} name="question-mark" color={color} />,
        }} />
      </Tabs>

      {/* Bouton flottant en dehors de Tabs, donc fixe */}
      <FloatingContactButton />
    </View>
  );
}

const styles = StyleSheet.create({
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerLogo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  tabBarLabel: {
    fontFamily: 'TimesNewRomanItalic',
    fontSize: 12,
  },
});
