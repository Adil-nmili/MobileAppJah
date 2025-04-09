import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';

const ContactMaps: React.FC = () => {
  const initialRegion: Region = {
    latitude: 31.59278,
    longitude: -8.05200,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        scrollEnabled={true}
        zoomEnabled={true}
      >
        <Marker
          coordinate={{ latitude: 31.59278, longitude: -8.05200 }}
          title="Ecole JAH INFORMATIQUE"
          description="Lot al Houssna 2 N°697 Mhamid, Marrakech"
        />
      </MapView>
    </View>
  );
};

export default ContactMaps;

const styles = StyleSheet.create({
  mapContainer: {
    height: 300,
    borderRadius: 12,
    overflow: 'hidden',
    marginTop: 20,
    marginBottom: 40,
  },
  map: {
    flex: 1,
  },
});
