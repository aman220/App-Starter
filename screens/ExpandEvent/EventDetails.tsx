import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    useColorScheme,
    Image,
    ScrollView,
    Modal,
    Dimensions,
} from "react-native";
import React, { useState } from "react";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";
import Font from "../../constants/Font";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Video } from "expo-av";
import { useNavigation } from "@react-navigation/native";


const EventDetails: React.FC = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const colorScheme = useColorScheme();
    const nav = useNavigation();
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const styles = StyleSheet.create({
        container: {
            backgroundColor: colorScheme === 'dark' ? Colors.darkBackground : Colors.light,
        }, imageContainer: {
            width: "100%",
            height: 400,
            overflow: 'hidden',
            borderTopColor: 'transparent',
        },
        imageOverlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '15%',
            transform: [{ rotate: '180deg' }],
        },
        image: {
            width: "100%",
            height: "100%",
        },
        avatarGroup: {
            flexDirection: "row",
            alignItems: "center",
        },
        avatar: {
            width: 32,
            height: 32,
            borderRadius: 16,
            marginLeft: -12,
            borderWidth: 2,
            borderColor: "white",
        },
        avatarCount: {
            width: 32,
            height: 32,
            borderRadius: 16,
            marginLeft: -12,
            backgroundColor: "#999",
            justifyContent: "center",
            alignItems: "center",
        },
        avatarCountText: {
            color: "white",
            fontSize: 12,
        },
        botoomcontainer: {
            position: "absolute",
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: colorScheme === 'dark' ? Colors.darkBackground : Colors.white,
            borderTopEndRadius: Spacing.borderRadius.lg,
            borderTopStartRadius: Spacing.borderRadius.lg,
        }, buttonContainer: {
            alignItems: 'center',
            borderRadius: 20,
            backgroundColor: Colors.primary,
            paddingVertical: 10,
            paddingHorizontal: 15,
            flexDirection: "row",
            elevation: 5,
            shadowColor: '#4d36d0be',
            shadowOffset: { width: 1, height: 0.7 },
            shadowOpacity: 1.5,
            shadowRadius: 0.5,
            justifyContent: 'center',
        },
        buttonText: {
            color: colorScheme === 'dark' ? Colors.text : Colors.white,
            fontWeight: '500',
            fontSize: 17,
            letterSpacing: 0.05,
            marginLeft: 5,
            fontFamily: Font["poppins-bold"],
        }, userInfoContainer: {
            flexDirection: "column",
            alignItems: "center",
        },
        userName: {
            fontFamily: Font["poppins-semiBold"],
            fontSize: 18,
            marginBottom: 2,
        },
        shopName: {
            fontFamily: Font["poppins-regular"],
            fontSize: FontSize.sm,
            color: Colors.textGray,
            marginBottom: 15,
            textAlign: "center",
        },
        shopDescription: {
            fontFamily: Font["poppins-regular"],
            fontSize: 14,
            color: Colors.textGray,
            marginTop: 10,
            backgroundColor: Colors.light,
            padding: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderStyle: "dashed"
        }, textContainer: {
            textAlign: "center",
            justifyContent: "center",
            marginTop: 20,
        }, actionIcons: {
            flexDirection: "row",
            justifyContent: "center",
        },
        actionIcon: {
            marginHorizontal: 15,
            backgroundColor: Colors.light,
            padding: 10,
            borderRadius: Spacing.borderRadius.xl,
        }, image2: {
            width: 80,
            height: 80,
            borderRadius: 40,
        },teaserContainer: {
            position: "absolute",
            top: "50%",
            right: "30%",
          },
          blurContainer: {
            overflow: "hidden",
            borderRadius: 20,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            width: "100%",
            padding: 5,
          },
          teaserText: {
            fontFamily: Font["poppins-regular"],
            fontSize: FontSize.lg,
            color: Colors.white,
          },
          modalContainer: {
            flex: 1,
            backgroundColor: Colors.text, // Customize background color if needed
            justifyContent: "center",
            alignItems: "center",
          },
          closeButton: {
            position: "absolute",
            top: 20,
            right: 20,
            zIndex: 999,
          },
          videoPlayer: {
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
            resizeMode:"cover",
          },
    });

    const AvatarGroup = () => {
        //set views data
        const avatars = [
            { uri: "https://kaspiunique.com/Temp/male.png" },
            { uri: "https://kaspiunique.com/Temp/female.png" },
            { uri: "https://kaspiunique.com/Temp/male.png" },
            { uri: "https://kaspiunique.com/Temp/female.png" },
        ];

        return (
            <View style={styles.avatarGroup}>
                {avatars.map((avatar, index) => (
                    <Image
                        key={index}
                        source={avatar}
                        style={[styles.avatar, { zIndex: avatars.length - index }]}
                    />
                ))}
                <View style={styles.avatarCount}>
                    <Text style={styles.avatarCountText}>+{avatars.length}</Text>
                </View>
            </View>
        );
    };

    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={toggleModal}
            >
                <View style={styles.modalContainer}>
                    <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
                        <Ionicons name="close" size={24} color={Colors.white} />
                    </TouchableOpacity>
                    <Video
                        source={{ uri: "https://kaspiunique.com/Temp/WhatsApp Video 2024-03-14 at 23.06.11_3c6bdfb6.mp4" }} // Replace with your video URL
                        rate={1.0}
                        volume={1.0}
                        isMuted={false}
                        shouldPlay={isModalVisible}
                        style={styles.videoPlayer}
                        resizeMode="cover"
                    />
                </View>
            </Modal>
            <ScrollView>
                <View>
                    <View style={{ position: "absolute", top: 10, right: 0, left: 0, zIndex: 99 }}>
                        <View style={{
                            marginTop: 40,
                            margin: 15,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}>
                            <TouchableOpacity style={{ backgroundColor: colorScheme === 'dark' ? Colors.textGray : Colors.white, width: 50, height: 50, borderRadius: Spacing.borderRadius.xl, justifyContent: "center", alignItems: "center" }} onPress={() => nav.goBack()}>
                                <Ionicons name='chevron-back' size={24} color={colorScheme === 'dark' ? Colors.white : Colors.textGray} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: colorScheme === 'dark' ? Colors.textGray : Colors.white, width: 50, height: 50, borderRadius: Spacing.borderRadius.xl, justifyContent: "center", alignItems: "center" }}>
                                <Ionicons name='heart-outline' size={30} color={colorScheme === 'dark' ? Colors.white : Colors.textGray} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image
                            source={{ uri: "https://kaspiunique.com/Temp/djh.webp" }} // Replace with your image path
                            style={styles.image}
                        />
                    </View>
                    <TouchableOpacity onPress={toggleModal} style={{
                        position: "absolute", top: "50%", right: "30%", bottom: 0,
                    }}>
                        <BlurView intensity={70} tint="dark" style={{
                            overflow: 'hidden',
                            borderRadius: 20, display: "flex", flexDirection: "row", alignItems: "center", gap: 5, width: "100%", padding: 5
                        }}>
                            <Ionicons name="play" size={24} color={Colors.white} />
                            <Text style={{ fontFamily: Font["poppins-regular"], fontSize: FontSize.lg, color: Colors.white }}>Teaser Video</Text>
                        </BlurView>
                    </TouchableOpacity>
                </View>

                <View style={{ backgroundColor: Colors.white, height: "100%", width: "100%", borderTopLeftRadius: 15, borderTopRightRadius: 15, marginTop: -20, marginBottom: 60 }}>
                    <View style={{ margin: 20 }}>
                        <Text style={{ fontFamily: Font["poppins-bold"], fontSize: FontSize.xl, paddingHorizontal: 5 }}>DJ Night & Concert</Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
                                <Ionicons name="location" size={20} color={Colors.primary} />
                                <Text style={{ fontFamily: Font["poppins-regular"], fontSize: FontSize.base, color: Colors.textGray }}>GLAU, KC Ground</Text>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center", gap: 5, marginLeft: 10 }}>
                                <Ionicons name="time-outline" size={20} color={Colors.primary} />
                                <Text style={{ fontFamily: Font["poppins-regular"], fontSize: FontSize.base, color: Colors.textGray }}>5 April-7:00Pm</Text>
                            </View>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", margin: 10 }}>
                            <AvatarGroup />
                            <TouchableOpacity style={{ backgroundColor: Colors.primary, padding: 5, borderRadius: 20, paddingHorizontal: 10 }}>
                                <Text style={{ fontFamily: Font["poppins-regular"], fontSize: FontSize.base, color: Colors.white }}>Invite</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ fontFamily: Font["poppins-semiBold"] }}>About Event</Text>
                            <Text style={{ fontFamily: Font["poppins-regular"], color: Colors.textGray }}>Get ready to embark on an exhilarating journey as Spandan's Grand Inaugural Gala sets the stage for two days of non-stop excitement and cultural immersion at GLA University, Mathura! *Spandan*</Text>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ fontFamily: Font["poppins-semiBold"] }}>Organizer</Text>
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                                <View>
                                    <Image source={{ uri: "https://kaspiunique.com/Temp/male.png" }} width={60} height={60} />
                                </View>
                                <View style={{ marginHorizontal: 10 }}>
                                    <Text style={{ fontFamily: Font["poppins-semiBold"] }}>Student Affair Council</Text>
                                    <Text style={{ fontFamily: Font["poppins-regular"], color: Colors.textGray }}>GLA university</Text>
                                </View>
                                <View style={{ display: "flex", flexDirection: "row" }}>
                                    <TouchableOpacity style={{ backgroundColor: Colors.light, padding: 10, borderRadius: 50, marginHorizontal: 10 }}>
                                        <Ionicons name="call-outline" size={24}></Ionicons>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ backgroundColor: Colors.light, padding: 10, borderRadius: 50, marginHorizontal: 10 }}>
                                        <Ionicons name="chatbubbles-outline" size={24}></Ionicons>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ fontFamily: Font["poppins-semiBold"] }}>Support</Text>
                            <View style={styles.userInfoContainer}>
                                <Image
                                    source={{ uri: "https://www.gla.ac.in/Uploads/faculty/270largefrt_Himanshu-Sharma-02.jpg" }}
                                    style={styles.image2}
                                />
                                <View style={styles.textContainer}>
                                    <Text style={styles.userName}>Dr Himanshu Sharma</Text>
                                    <Text style={styles.shopName}>Dean of Student Welfare</Text>
                                </View>
                            </View>

                            <View style={styles.actionIcons}>
                                <TouchableOpacity
                                    style={styles.actionIcon}>
                                    <Ionicons name="call" size={24} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.actionIcon}
                                >
                                    <Ionicons name="mail" size={24} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.actionIcon}
                                >
                                    <Ionicons name="location" size={24} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: 30, width: "100%" }}>
                                <View style={{ flexDirection: "row", flex: 1, alignItems: "center" }}>
                                    <View>
                                        <Image source={{ uri: "https://kaspiunique.com/Temp/male.png" }} style={{ width: 60, height: 60 }} />
                                    </View>
                                    <View style={{ marginHorizontal: 10 }}>
                                        <Text style={{ fontFamily: Font["poppins-semiBold"] }}>Aman raj Singh</Text>
                                        <Text style={{ fontFamily: Font["poppins-regular"], color: Colors.textGray }}>Vice President</Text>
                                    </View>
                                </View>
                                <View>
                                    <TouchableOpacity style={{ backgroundColor: Colors.light, padding: 10, borderRadius: 50, marginHorizontal: 10 }}>
                                        <Ionicons name="call-outline" size={24} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ width: "100%", height: 0.5, backgroundColor: Colors.light, marginVertical: 10 }}></View>
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%" }}>
                                <View>
                                    <TouchableOpacity style={{ backgroundColor: Colors.light, padding: 10, borderRadius: 50, marginHorizontal: 10 }}>
                                        <Ionicons name="call-outline" size={24} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flexDirection: "row", flex: 1, alignItems: "center", marginLeft: 10, justifyContent: "flex-end" }}>
                                    <View style={{}}>
                                        <Text style={{ fontFamily: Font["poppins-semiBold"] }}>Divyanshu Khendalwal</Text>
                                        <Text style={{ fontFamily: Font["poppins-regular"], color: Colors.textGray, textAlign: "right" }}>Technical Head</Text>
                                    </View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Image source={{ uri: "https://kaspiunique.com/Temp/male.png" }} style={{ width: 60, height: 60 }} />
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>

                </View>
            </ScrollView>
            <View style={styles.botoomcontainer}>
                <View style={{ backgroundColor: colorScheme === 'dark' ? Colors.textGray : Colors.white, padding: 10, borderRadius: Spacing.borderRadius.lg, elevation: 5 }}>
                    <View style={{ marginHorizontal: 15, justifyContent: "space-between", flexDirection: "row" }}>
                        <View>
                            <Text style={{ fontFamily: Font["poppins-regular"], color: colorScheme === 'dark' ? Colors.white : Colors.textGray }}>Total Price</Text>
                            <Text style={{ fontFamily: Font["poppins-semiBold"], fontSize: FontSize.lg, color: colorScheme === 'dark' ? Colors.white : Colors.text }}>₹700/-</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.buttonContainer} onPress={()=>{nav.navigate("PaymentScreen") }}>
                                <Text style={styles.buttonText}>Book Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
};

export default EventDetails;
