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
    price: string;
    image: ImageSourcePropType;
    Status: string;
}

const productsData: Product[] = [
    {
        id: 1,
        name: 'DJ Night & Concert',
        price: '700 Rs/-',
        image: { uri: 'https://kaspiunique.com/Temp/djh.webp' },
        Status: "Pay Now"
    },
    {
        id: 2,
        name: 'SPANDAN - GLAU ANNUAL FEST',
        price: '900 Rs/-',
        image: { uri: 'https://kaspiunique.com/Temp/spandhansds.png' },
        Status: "Pending"
    },
    {
        id: 3,
        name: 'SPANDAN - GLAU ANNUAL FEST',
        price: '900 Rs/-',
        image: { uri: 'https://kaspiunique.com/Temp/spandhansds.png' },
        Status: "Collected"
    },
];


const TicketScreen: React.FC = () => {
    const colorScheme = useColorScheme();
    const navigation  = useNavigation();
    const [selectedTab, setSelectedTab] = useState("Pending");
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
            marginVertical:5,
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
            objectFit:"cover"
        },
        productName: {
            fontSize: FontSize.base,
            fontFamily: Font["poppins-semiBold"],
            marginTop: 5,
            color: colorScheme === 'dark' ? Colors.white : Colors.text,
        },
        productPrice: {
            fontSize: FontSize.xl,
            fontFamily: Font["poppins-bold"],
            color: colorScheme === 'dark' ? Colors.white : '#85BB65',
        },
    });

    const handleTabPress = (tab: string) => {
        setSelectedTab(tab);
    };

    const renderProductItem = ({ item }: { item: Product }) => (
        <View
            style={styles.productItem}
        >
            <Image source={item.image} style={styles.productImage} />
            <View style={{ padding: 5 }}>
                <Text style={styles.productName}>{item.name}</Text>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 5, gap: 5 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
                        <Ionicons name="location" size={20} color={Colors.primary} />
                        <Text style={{ fontFamily: Font["poppins-regular"], fontSize: FontSize.base, color: Colors.textGray }}>GLAU, KC Ground</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                        <Ionicons name="time-outline" size={20} color={Colors.primary} />
                        <Text style={{ fontFamily: Font["poppins-regular"], fontSize: FontSize.base, color: Colors.textGray }}>5 April-7:00Pm</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 5 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                        <Text style={styles.productPrice}>{item.price}</Text>
                        <Text style={{ fontFamily: Font["poppins-regular"], color: Colors.textGray }}>person</Text>
                    </View>
                    <TouchableOpacity style={{backgroundColor: item.Status === 'Pending' ? Colors.textGray : Colors.primary , padding:5 , borderRadius:Spacing.borderRadius.xl , alignItems:"center"}}>
                        <Text style={{fontFamily:Font["poppins-semiBold"] , color:Colors.white , paddingHorizontal:10 , paddingVertical:2 , fontSize:FontSize.lg}}>{item.Status}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ marginTop: 40, margin: 15 }}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <TouchableOpacity  style={{ backgroundColor: colorScheme === 'dark' ? Colors.textGray : Colors.light, width: 50, height: 50, borderRadius: Spacing.borderRadius.xl, justifyContent: "center", alignItems: "center" }} onPress={() => navigation.goBack()}> 
                        <Ionicons name='chevron-back' size={24} color={colorScheme === 'dark' ? Colors.white : Colors.textGray} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: FontSize.lg, fontFamily: Font["poppins-semiBold"], color: colorScheme === 'dark' ? Colors.white : Colors.text }}>My Tickets</Text>
                    <TouchableOpacity style={{ backgroundColor: colorScheme === 'dark' ? Colors.textGray : Colors.light, width: 50, height: 50, borderRadius: Spacing.borderRadius.xl, justifyContent: "center", alignItems: "center" }}>
                        <Ionicons name='heart-outline' size={30} color={colorScheme === 'dark' ? Colors.white : Colors.textGray} />
                    </TouchableOpacity>
                </View>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: 10, marginVertical: 10 }}>
                    <TouchableOpacity onPress={() => handleTabPress("Pending")}>
                        <Text style={[styles.tabText, { color: selectedTab === "Pending" ? Colors.primary : Colors.textGray, fontFamily: selectedTab === 'Pending' ? Font["poppins-semiBold"] : Font["poppins-regular"], }]}>Pending</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleTabPress("Completed")}>
                        <Text style={[styles.tabText, { color: selectedTab === "Completed" ? Colors.primary : Colors.textGray, fontFamily: selectedTab === 'Completed' ? Font["poppins-semiBold"] : Font["poppins-regular"], }]}>Completed</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleTabPress("Cancel")}>
                        <Text style={[styles.tabText, { color: selectedTab === "Cancel" ? Colors.primary : Colors.textGray, fontFamily: selectedTab === 'Cancel' ? Font["poppins-semiBold"] : Font["poppins-regular"], }]}>Cancel</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ borderWidth: 1, width: "100%", borderColor: Colors.light }}></View>

            </View>
            <ScrollView>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={productsData}
                    renderItem={renderProductItem}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={{ paddingVertical: 10 ,paddingHorizontal:15 , marginBottom:100}}
                />
            </ScrollView>

        </SafeAreaView >
    );
};

export default TicketScreen;

const styles = StyleSheet.create({});
