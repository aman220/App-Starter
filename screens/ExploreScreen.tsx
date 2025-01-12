import {
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useColorScheme,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


interface Product {
  id: number;
  name: string;
  president: string;
  image: ImageSourcePropType;
  desc: string;
  totalmember: number;
}

const productsData: Product[] = [
  {
    id: 1,
    name: 'Ninad Music Club',
    president: 'Devansh Sharma',
    image: { uri: 'https://firebasestorage.googleapis.com/v0/b/collab-o-452a2.appspot.com/o/ninad.png?alt=media&token=25342cd1-d508-43f3-9063-c1417986cb51' },
    desc: "NINAD gives you the opportunity to openly express yourself. Ninad is the official music club of GLA University",
    totalmember: 100,
  },
  {
    id: 2,
    name: 'Natraj Club Club',
    president: 'Aman Raj Singh',
    image: { uri: 'https://firebasestorage.googleapis.com/v0/b/collab-o-452a2.appspot.com/o/383719365_262697696731926_2170211519202901909_n.jpg?alt=media&token=6a59330a-67f6-43fc-a334-6b63e81b9cba' },
    desc: "NATRAJ is the official Dance Club of GLA University, Mathura. Dance, the art of precise, expressive, and graceful purposefully selected sequences of human movement",
    totalmember: 100,
  },
  {
    id: 3,
    name: 'Student Affair Council',
    president: 'Vishal Tiwari',
    image: { uri: 'https://firebasestorage.googleapis.com/v0/b/collab-o-452a2.appspot.com/o/Splash.png?alt=media&token=ee93a7ec-b9cf-41ec-964d-acf1a5158752' },
    desc: "Empowering GLA students to become future-ready leaders. We are the bridge to opportunity, community, and success.",
    totalmember: 100,
  },
];

const ExploreScreen: React.FC = () => {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorScheme === 'dark' ? Colors.darkBackground : Colors.white,
    },
    tabText: {
      fontSize: FontSize.lg,
    },
    listItem: {
      backgroundColor: 'white',
      marginTop: 20,
      height: 140,
      flexDirection: 'row',
      borderRadius: 8,
      overflow: 'hidden',
    }, productItem: {
      width: "100%",
      display: "flex",
      flexDirection: 'column',
      marginVertical: 5,
      borderRadius: 10,
      backgroundColor: Colors.white,
      padding: 5,
      elevation: 4, // Shadow for Android
      shadowColor: '#000', // Shadow for iOS
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
    },
    productImage: {
      width: "100%",
      height: 200,
      borderRadius: 10,
      objectFit: "cover"
    },
    productName: {
      textAlign:"center",
      fontSize: FontSize.lg,
      fontFamily: Font["poppins-semiBold"],
      marginTop: 5,
      marginVertical:5,
      color: colorScheme === 'dark' ? Colors.white : Colors.text,
    },
    productPrice: {
      fontSize: FontSize.xl,
      fontFamily: Font["poppins-bold"],
      color: colorScheme === 'dark' ? Colors.white : '#85BB65',
    },
  });

  const renderProductItem = ({ item }: { item: Product }) => (
    <View
      style={styles.productItem}
    >
      <Image source={item.image} style={styles.productImage} />
      <View style={{ padding: 5 }}>
        <Text style={styles.productName}>{item.name}</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 5, gap: 5 }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
            <Ionicons name="location" size={20} color={Colors.primary} />
            <Text style={{ fontFamily: Font["poppins-regular"], fontSize: FontSize.base, color: Colors.textGray }}>GLAU, Ninad Ground</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Ionicons name="time-outline" size={20} color={Colors.primary} />
            <Text style={{ fontFamily: Font["poppins-regular"], fontSize: FontSize.base, color: Colors.textGray }}>6:00Pm - 8:00Pm</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 5 }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Ionicons name="person" size={20} color={Colors.primary} />
            <Text style={{ fontFamily: Font["poppins-semiBold"], fontSize: FontSize.base, color: Colors.textGray }}>Vice President</Text>
          </View>
          <Text style={{ fontFamily: Font["poppins-regular"], color: Colors.textGray, fontSize: FontSize.lg }}>{item.president}</Text>
        </View>
        <View>
          <Text style={{ fontFamily: Font["poppins-regular"], fontSize: FontSize.base, color: Colors.textGray, padding: 5 }}>{item.desc}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 5 }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Text style={styles.productPrice}>{`${item.totalmember}+`}</Text>
            <Text style={{ fontFamily: Font["poppins-regular"], color: Colors.textGray }}>shows Organized</Text>
          </View>
          <TouchableOpacity style={{ backgroundColor: Colors.primary , padding: 5, borderRadius: Spacing.borderRadius.xl, alignItems: "center" }}>
            <Text style={{ fontFamily: Font["poppins-semiBold"], color: Colors.white, paddingHorizontal: 10, paddingVertical: 2, fontSize: FontSize.lg }}>Join Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 40 }}>
        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 15,
        }}>
          <TouchableOpacity style={{ backgroundColor: colorScheme === 'dark' ? Colors.textGray : Colors.light, width: 50, height: 50, borderRadius: Spacing.borderRadius.xl, justifyContent: "center", alignItems: "center" }} onPress={() => navigation.goBack()}>
            <Ionicons name='chevron-back' size={24} color={colorScheme === 'dark' ? Colors.white : Colors.textGray} />
          </TouchableOpacity>
          <Text style={{ fontSize: FontSize.lg, fontFamily: Font["poppins-semiBold"], color: colorScheme === 'dark' ? Colors.white : Colors.text }}>All Clubs</Text>
          <TouchableOpacity style={{ backgroundColor: colorScheme === 'dark' ? Colors.textGray : Colors.light, width: 50, height: 50, borderRadius: Spacing.borderRadius.xl, justifyContent: "center", alignItems: "center" }}>
            <Ionicons name='heart-outline' size={30} color={colorScheme === 'dark' ? Colors.white : Colors.textGray} />
          </TouchableOpacity>
        </View>
        <View style={{ borderWidth: 1, width: "100%", borderColor: Colors.light, marginVertical: 8 }}></View>
        <ScrollView>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={productsData}
            renderItem={renderProductItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 10, marginBottom: 150 }}
          />
        </ScrollView>
      </View>
    </SafeAreaView >
  );
};

export default ExploreScreen;
