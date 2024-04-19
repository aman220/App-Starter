import React, { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    useColorScheme,
    Image,
    Dimensions
} from "react-native";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Space from "../constants/Space";
import Font from "../constants/Font";
import { Ionicons } from "@expo/vector-icons";
import SearchScreen from "./SearchScreen";
import BannerSlider from "./BannerSlider";
import { useNavigation } from "@react-navigation/native";

const PaymentScreen: React.FC = () => {
    const windowHeight = Dimensions.get("window").height;
    const nav = useNavigation();
    const colorScheme = useColorScheme();
    const [isLoading, setisLoading] = useState(false);
    const [nameTransaction, setNameTransaction] = useState("");
    const [upiID, setUpiID] = useState("");
    const [accountName, setAccountName] = useState("");
    const [amount, setAmount] = useState("");
    const [eventName, setEventName] = useState("");
    const [remarks, setRemarks] = useState("");
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colorScheme === 'dark' ? Colors.darkBackground : Colors.white,
        },
        productImage: {
            width: "100%",
            height: "100%",
            borderRadius: 10,
        }, input: {
            fontFamily: Font["poppins-regular"],
            fontSize: FontSize.sm,
            padding: Space * 2,
            backgroundColor: Colors.light,
            borderRadius: Space,
            marginVertical: Space,
        },
        button: {
            padding: Space * 2,
            backgroundColor: Colors.primary,
            marginVertical: Space * 3,
            borderRadius: Space,
            shadowColor: Colors.primary,
            shadowOffset: {
                width: 0,
                height: Space,
            },
            shadowOpacity: 0.3,
            shadowRadius: Space,
        },
    });

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ marginTop: 40, margin: 15 }}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <TouchableOpacity style={{ backgroundColor: colorScheme === 'dark' ? Colors.textGray : Colors.light, width: 50, height: 50, borderRadius: Spacing.borderRadius.xl, justifyContent: "center", alignItems: "center" }} onPress={() => nav.goBack()}>
                        <Ionicons name='chevron-back' size={24} color={colorScheme === 'dark' ? Colors.white : Colors.textGray} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: FontSize.lg, fontFamily: Font["poppins-semiBold"], color: colorScheme === 'dark' ? Colors.white : Colors.text }}>Payment</Text>
                    <TouchableOpacity style={{ backgroundColor: colorScheme === 'dark' ? Colors.textGray : Colors.light, width: 50, height: 50, borderRadius: Spacing.borderRadius.xl, justifyContent: "center", alignItems: "center" }}>
                        <Ionicons name='heart-outline' size={30} color={colorScheme === 'dark' ? Colors.white : Colors.textGray} />
                    </TouchableOpacity>
                </View>
                <View style={{ borderWidth: 1, width: "100%", borderColor: Colors.light, marginVertical: 10 }}></View>
            </View>
            <ScrollView>
                <View style={{ width: "100%", height: windowHeight * 0.5, padding: 10 }}>
                    <Image source={{ uri: "https://kaspiunique.com/Temp/QRonline.jpeg" }} style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }} />
                </View>
                <Text style={{ fontFamily: Font["poppins-semiBold"], marginVertical: 10, textAlign: "center" }}>Kindly Scan The Qr Code For Payment</Text>
                <Text style={{ fontFamily: Font["poppins-semiBold"], textAlign: "center" }}>Dr Himanshu Sharma</Text>
                <View style={{ marginVertical: Space * 3, paddingHorizontal: 10 }}>
                    <TextInput
                        onChangeText={setNameTransaction}
                        placeholder="Name/Transaction ID :"
                        placeholderTextColor={Colors.textGray}
                        style={styles.input}
                    />
                    <TextInput
                        onChangeText={setUpiID}
                        placeholder="UPI ID :"
                        placeholderTextColor={Colors.textGray}
                        style={styles.input}
                    />
                    <TextInput
                        onChangeText={setAccountName}
                        placeholder="Account Name :"
                        placeholderTextColor={Colors.textGray}
                        style={styles.input}
                    />
                    <TextInput
                        onChangeText={setAmount}
                        placeholder="Amount You are paying :"
                        placeholderTextColor={Colors.textGray}
                        value="700"
                        style={styles.input}
                    />
                    <TextInput
                        onChangeText={setEventName}
                        placeholder="Event Name :"
                        placeholderTextColor={Colors.textGray}
                        value="DJ & Dandiya night"
                        style={styles.input}
                    />
                    <TextInput
                        onChangeText={setRemarks}
                        placeholder="Remarks :"
                        placeholderTextColor={Colors.textGray}
                        style={styles.input}
                    />
                    <TouchableOpacity style={styles.button}>
                        <Text
                            style={{
                                fontFamily: Font["poppins-bold"],
                                color: Colors.white,
                                textAlign: "center",
                                fontSize: FontSize.lg,
                            }}
                        >
                            SUBMIT
                        </Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

export default PaymentScreen;
