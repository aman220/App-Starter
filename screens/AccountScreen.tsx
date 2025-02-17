import React, { useEffect, useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    TextInput,
    useColorScheme,
    Modal, // Import useColorscheme hook
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Font from "../constants/Font";
import { useNavigation } from "@react-navigation/native";



const AccountScreen: React.FC = () => {

    const Colorscheme = useColorScheme();
    const nav = useNavigation();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: Colorscheme === 'dark' ? Colors.darkBackground : Colors.white,
        },
        header: {
            padding: 20,
            flexDirection: "column",
            justifyContent: "space-between",
            marginTop: 25,
        },
        accountHeader: {
            flexDirection: "row",
            // alignItems: "center",
            // backgroundColor: "red",
        },
        accountHeaderText: {
            fontSize: 20,
            fontWeight: "bold",
            flex: 1,
            textAlign: "center",
        },
        profileContainer: {
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 20,
            // backgroundColor: "red",
        },
        profilePicture: {
            width: 80,
            height: 80,
            borderRadius: 40,
            marginRight: 20,
        },
        infoContainer: {
            flexDirection: "column",
            // backgroundColor: "red",
        },
        name: {
            fontSize: 18,
            fontWeight: "bold",
        },
        email: {
            fontSize: 16,
            color: Colors.text,
            fontFamily: Font["poppins-bold"],
        },
        card: {
            backgroundColor: Colors.light,
            margin: 10,
            padding: 15,
            borderRadius: 10,
        },
        cardText: {
            fontFamily: Font["poppins-semiBold"],
            fontSize: FontSize.base,
            marginBottom: 10,
        },
        logoutText: {
            fontFamily: Font["poppins-semiBold"],
            fontSize: FontSize.base,
            // color: Colors.red, // Change this to the desired color for logout text
        },
        verifiedIcon: {
            width: 25,
            height: 25,
            marginLeft: 5,
        },
        whiamiContainer: {
            backgroundColor: Colors.primary, // Customize the background color
            borderRadius: 20, // Customize the border radius
            paddingHorizontal: 15,
            paddingVertical: 5,
            justifyContent: "center",
            alignSelf: "flex-end",
        },
        whoamitext: {
            fontFamily: Font["poppins-regular"],
            fontSize: FontSize.sm,
            color: Colors.white, // Customize the text color
        },
        logoutButton: {
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: Colors.textGray,
            margin: 10,
            padding: 10,
            borderRadius: 10,
        },
        logoutButtonText: {
            fontFamily: Font["poppins-semiBold"],
            fontSize: FontSize.base,
        },
        centeredView: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        modalView: {
            backgroundColor: Colors.white,
            borderRadius: 10,
            padding: 20,
            width: "80%",
            alignItems: "center",
            elevation: 5, // Add elevation for a card-like effect
        },
        modalText: {
            marginBottom: 20,
            textAlign: "center",
            fontFamily: Font["poppins-regular"],
            fontSize: FontSize.base,
        },
        modalButtonContainer: {
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
        },
        modalButton: {
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 5,
            backgroundColor: Colors.primary,
        },
        modalButtonText: {
            color: Colors.white,
            fontFamily: Font["poppins-regular"],
            fontSize: FontSize.base,
        },
        skeletonContainer: {
            flexDirection: "row", // Match the flexDirection with profileContainer
            alignItems: "center", // Match the alignItems with profileContainer
            marginVertical: 15,
        },
        skeletonProfile: {
            width: 80,
            height: 80,
            borderRadius: 40,
            backgroundColor: Colors.light, // Customize the skeleton color
            marginRight: 20,
        },
        skeletonInfoContainer: {
            flex: 1, // Expand to fill remaining space
            flexDirection: "column",
            justifyContent: "center", // Vertically align the skeleton content
        },
        skeletonName: {
            width: "70%",
            height: 20,
            backgroundColor: Colors.light, // Customize the skeleton color
            marginBottom: 5,
        },
        skeletonEmail: {
            width: "90%",
            height: 18,
            backgroundColor: Colors.light, // Customize the skeleton color
        },
    });

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <TouchableOpacity style={{ backgroundColor: Colorscheme === 'dark' ? Colors.textGray : Colors.light, width: 50, height: 50, borderRadius: Spacing.borderRadius.xl, justifyContent: "center", alignItems: "center" }} onPress={() => nav.goBack()}>
                        <Ionicons name='chevron-back' size={24} color={Colorscheme === 'dark' ? Colors.white : Colors.textGray} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: FontSize.lg, fontFamily: Font["poppins-semiBold"], color: Colorscheme === 'dark' ? Colors.white : Colors.text }}>Setting</Text>
                    <TouchableOpacity style={{ backgroundColor: Colorscheme === 'dark' ? Colors.textGray : Colors.light, width: 50, height: 50, borderRadius: Spacing.borderRadius.xl, justifyContent: "center", alignItems: "center" }}>
                        <Ionicons name='heart-outline' size={30} color={Colorscheme === 'dark' ? Colors.white : Colors.textGray} />
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 50,
                        // backgroundColor: "red",
                    }}
                >
                    <Image
                        source={{uri:"https://firebasestorage.googleapis.com/v0/b/collab-o-452a2.appspot.com/o/Splash.png?alt=media&token=ee93a7ec-b9cf-41ec-964d-acf1a5158752"}}
                        style={{
                            width: 30,
                            height: 30,
                            borderRadius: 40,
                            marginRight: 10,
                        }}
                    ></Image>
                    <Text style={{ fontFamily: Font["poppins-bold"] }}>SAC GLAU</Text>
                </View>

                <View style={styles.profileContainer}>
                    <Image
                        source={{uri:"https://firebasestorage.googleapis.com/v0/b/collab-o-452a2.appspot.com/o/male.png?alt=media&token=56fa9c9b-20a7-4772-a474-3655b7c2b2c6"}}
                        style={styles.profilePicture}
                    />
                    <View style={styles.infoContainer}>
                        <Text style={styles.name}>
                            Aman Raj Singh

                        </Text>
                        <Text style={styles.email}>aman.singh_cs22@gmail.com</Text>
                    </View>
                </View>
            </View>
            <View style={styles.card}>
                {/* my profile button  */}
                <TouchableOpacity
                >
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <Text style={styles.cardText}>My Profile</Text>
                        <Image
                            source={require("../assets/images/account.png")}
                            style={styles.verifiedIcon}
                        />
                    </View>
                </TouchableOpacity>

                {/* edit profile button */}
                <View
                    style={{ backgroundColor: Colors.white, height: 2, marginBottom: 10 }}
                ></View>
                <TouchableOpacity
                >
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <Text style={styles.cardText}>Edit Profile</Text>
                        <Image
                            source={require("../assets/images/setting.png")}
                            style={styles.verifiedIcon}
                        />
                    </View>
                </TouchableOpacity>

                {/* feature button/ */}
                <View
                    style={{ backgroundColor: Colors.white, height: 2, marginBottom: 10 }}
                ></View>

                <TouchableOpacity>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <Text style={styles.cardText}>Discussion Forums</Text>
                        <Image
                            source={require("../assets/images/afeatures.png")}
                            style={styles.verifiedIcon}
                        />
                    </View>
                </TouchableOpacity>
                <View
                    style={{ backgroundColor: Colors.white, height: 2, marginBottom: 10 }}
                ></View>

                {/* omega verified */}
                <TouchableOpacity onPress={()=>{nav.navigate("EventTicket")}}>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <Text style={styles.cardText}>Verified</Text>
                        <Image
                            source={require("../assets/images/averified.png")}
                            style={styles.verifiedIcon}
                        />
                    </View>
                </TouchableOpacity>
            </View>

            {/* About us button  */}
            <TouchableOpacity >
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        backgroundColor: Colors.light,
                        margin: 10,
                        padding: 10,
                        borderRadius: 10,
                    }}
                >
                    <Text style={styles.logoutText}>About Us</Text>
                    <Ionicons name="chevron-back" size={30} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity >
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        backgroundColor: Colors.light,
                        margin: 10,
                        padding: 10,
                        borderRadius: 10,
                    }}
                >
                    <Text style={styles.logoutText}>Logout</Text>
                    <Ionicons name="log-out-outline" size={30} />
                </View>
            </TouchableOpacity>

            {/* <Modal
                animationType="slide"
                transparent={true}

            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>
                            Are you sure you want to logout?
                        </Text>
                        <View style={styles.modalButtonContainer}>
                            <TouchableOpacity
                                style={styles.modalButton}

                            >
                                <Text style={styles.modalButtonText}>Yes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.modalButton}

                            >
                                <Text style={styles.modalButtonText}>No</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal> */}
        </SafeAreaView>
    );
};





export default AccountScreen;
