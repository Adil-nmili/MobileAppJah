import React from "react";
import {
  StyleSheet,
  Platform,
  ScrollView,
  Touchable,
  Image,
  TouchableOpacity,
} from "react-native";
import { ImageSlider } from "@/components/ImageSlider";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import SectionTitle from "@/components/SectionTitle";
import NosDiplomes from "@/components/NosDiplomes";
import ObjectifCard from "@/components/ObjectifCard";
import Caracteres from "@/components/Caracteres";
import Partenairs from "@/components/Partenairs";
import Footer from "@/components/Footer";

export default function HomeScreen(): JSX.Element {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ImageSlider />
      <ThemedView style={styles.contentContainer}>
        <ThemedView style={styles.titleContainer}>
          <SectionTitle title="JAH Formation Professionnelle" />
          <ThemedText style={{ textAlign: "center" }}>
            Découvrez nos formations en informatique, gestion, stylisme,
            pâtisserie, et bien plus encore !
          </ThemedText>
        </ThemedView>
        {/* ///End of Hero section/// */}
        <ThemedView style={styles.stepContainer}>
          <TouchableOpacity style={styles.btnPlus}>
            <ThemedText style={styles.btnPlusText}>Plus</ThemedText>
          </TouchableOpacity>
        </ThemedView>

      {/* Diplome section  */}

        <ThemedView style={styles.stepContainer}>
          <SectionTitle title="NOS DIPLÔMES"/>
          <NosDiplomes />
        </ThemedView>

        {/* Object section */}

        <ThemedView style={styles.stepContainer}>
          <SectionTitle title="Objectif de l'école"/>
          <ThemedText style={{textAlign:"center"}}>
          Dispenser une formation de qualité aux participants motivés par une volonté d'évoluer dans leur carrière professionnelle.
          Assurer des formations dans des filières sélectives et répondant aux besoins des entreprises
          </ThemedText>
          <Image source={require('@/assets/images/image3.jpg')} resizeMode="contain" alt="Nos Objectif" style={styles.objectifImage}/>
          <ObjectifCard />
        </ThemedView>
        <ThemedView>
          <SectionTitle title="CE QUI NOUS CARACTÉRISE ?" />
          <Caracteres /> 
           </ThemedView>
           <ThemedView>
            <SectionTitle title="NOS PARTENAIRES"/>
            <Partenairs />
           </ThemedView>
      </ThemedView>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  contentContainer: {
    padding: 20,
  },
  titleContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginBottom: 20,
  },
  btnPlus : {
    backgroundColor: '#0000FF',
    color:'#fff',
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 10,
    width: 100,
    marginHorizontal:"auto"
  },
  btnPlusText:{
    color: "#fff",
    textAlign:"center"

  },
  stepContainer: {
    fontSize: 12,
    color: "#333333",
    textAlign: "center",
    marginBottom: 10,
    fontFamily: "Poppins-Regular",
  },
  objectifImage:{
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginVertical: 20,
  }
});
