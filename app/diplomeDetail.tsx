import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const DiplomeDetail = () => {
  const { diplome } = useLocalSearchParams();
  const diplomeData = JSON.parse(decodeURIComponent(diplome as string));

  const renderItem = ({ item }: { item: string }) => (
    <Text style={styles.moduleItem}>{item}</Text>
  );

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={[1]} // Dummy data to render once
      renderItem={() => (
        <>
          <Image source={diplomeData.image} style={styles.image} />
          <Text style={styles.title}>{diplomeData.title}</Text>
          <View style={styles.descriptionContainer}>
            <Text style={styles.sectionTitle}>Compétences visées :</Text>
            <Text style={styles.description}>{diplomeData.description}</Text>
            <Text style={styles.sectionTitle}>Programme de formation :</Text>
            <View style={styles.tableContainer}>
              <View style={styles.tableColumn}>
                <Text style={styles.columnHeader}>Première Année</Text>
                <View style={styles.moduleList}>
                  <FlatList
                    data={diplomeData.modules["1ère Année"]}
                    renderItem={renderItem}
                    scrollEnabled={false}
                  />
                </View>
              </View>
              <View style={styles.tableColumn}>
                <Text style={styles.columnHeader}>Deuxième Année</Text>
                <View style={styles.moduleList}>
                  <FlatList
                    data={diplomeData.modules["2ème Année"]}
                    renderItem={renderItem}
                    scrollEnabled={false}
                  />
                </View>
              </View>
            </View>
          </View>
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  image: {
    width: '100%',
    height: 240,
    borderRadius: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 20,
    textAlign: 'center',
  },
  descriptionContainer: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  tableContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    flexDirection: 'row',
  },
  tableColumn: {
    flex: 1,
    padding: 15,
  },
  columnHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
    marginBottom: 10,
  },
  moduleList: {
    marginLeft: 20,
  },
  moduleItem: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  
});

export default DiplomeDetail;
