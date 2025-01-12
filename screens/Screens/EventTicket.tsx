import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Font from '../../constants/Font';
import Colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';
import Spacing from '../../constants/Spacing';

export default function EventTicket() {
    return (
        <SafeAreaView style={styles.container}>
            {/* Ticket Card */}
            <View style={styles.ticketCard}>
                {/* Event Image Container */}
                <View style={styles.imageContainer}>
                    <Image
                        source={{
                            uri: 'https://firebasestorage.googleapis.com/v0/b/collab-o-452a2.appspot.com/o/fd42cded-47b1-43db-9374-6c685c8bcb4c.webp?alt=media&token=dacf839b-aaba-4f74-bf0d-253cf129cc11',
                        }}
                        style={styles.eventImage}
                        resizeMode="cover"
                    />
                    <LinearGradient
                        colors={['rgba(254, 254, 254, 0)', 'rgb(255, 255, 255)']}
                        style={styles.imageGradient}
                    />
                    <View style={styles.eventTitleContainer}>
                        <Text style={styles.eventName}>DJ & Dandiya Night</Text>
                        <Text style={styles.eventLocation}>GLA University , KC Ground</Text>
                    </View>
                </View>

                {/* Ticket Info */}
                <View style={styles.ticketInfo}>
                    <View style={styles.infoRow}>
                        <View style={styles.infoItem}>
                            <Text style={styles.infoLabel}>Name</Text>
                            <Text style={styles.infoValue}>Aman Raj Singh</Text>
                        </View>
                        <View style={styles.infoItem}>
                            <Text style={styles.infoLabel}>Date</Text>
                            <Text style={styles.infoValue}>Jan 09, 2025</Text>
                        </View>
                    </View>

                    <View style={styles.infoRow}>
                        <View style={styles.infoItem}>
                            <Text style={styles.infoLabel}>Course</Text>
                            <Text style={styles.infoValue}>B-Tech CSE</Text>
                        </View>
                        <View style={styles.infoItem}>
                            <Text style={styles.infoLabel}>Roll No</Text>
                            <Text style={styles.infoValue}>2215990009</Text>
                        </View>
                    </View>
                    <View style={styles.infoRow}>
                        <View style={styles.infoItem}>
                            <Text style={styles.infoLabel}>Type</Text>
                            <Text style={styles.infoValue}>Couple Entry</Text>
                        </View>
                        <View style={styles.infoItem}>
                            <Text style={styles.infoLabel}>Total Amount</Text>
                            <Text style={styles.infoValue}>900 Rs/-</Text>
                        </View>
                    </View>

                    <View style={{ display: "flex", "flexDirection": "row", justifyContent: "space-between" , alignItems:"center" }}>
                        <Text style={{fontFamily:Font["poppins-bold"]}}>Status</Text>
                        <Text style={{fontFamily:Font["poppins-bold"] , backgroundColor:Colors.primary , color:"white" , padding:3, borderRadius:Spacing.borderRadius.base , paddingLeft:10 , paddingRight:10}}>Approved</Text>
                    </View>



                </View>

                {/* Barcode Section */}
                <View style={styles.barcodeSection}>
                    <Text style={styles.barcodeLabel}>Barcode Booking</Text>
                    <Image
                        source={{
                            uri: 'https://img.freepik.com/free-psd/barcode-illustration-isolated_23-2150584086.jpg',
                        }}
                        style={styles.barcode}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 16,
        backgroundColor: '#F1F1F1',
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333333',
        textAlign: 'center',
    },
    ticketCard: {
        margin: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    imageContainer: {
        position: 'relative',
        height: 180,
    },
    eventImage: {
        width: '100%',
        height: '100%',
    },
    imageGradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 100,
    },
    eventTitleContainer: {
        position: 'absolute',
        bottom: 16,
        left: 16,
        right: 16,
        alignItems: 'center',
    },
    eventName: {
        fontSize: FontSize.xl,
        fontWeight: '600',
        color: 'white',
        textAlign: 'center',
        fontFamily: Font["poppins-bold"]
    },
    eventLocation: {
        fontSize: 13,
        color: 'white',
        textAlign: 'center',
        fontFamily: Font["poppins-regular"]
    },
    ticketInfo: {
        padding: 20,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    infoItem: {
        flex: 1,
        alignItems: "flex-start",

    },
    infoLabel: {
        fontSize: 12,
        color: '#888888',
        marginBottom: 4,
        textAlign: 'center',
        fontFamily: Font["poppins-semiBold"]
    },
    infoValue: {
        fontSize: 14,
        color: '#333333',
        fontWeight: '500',
        textAlign: 'center',
        fontFamily: Font["poppins-semiBold"]
    },
    barcodeSection: {
        borderTopWidth: 1,
        borderTopColor: '#DDDDDD',
        borderStyle: 'dashed',
        padding: 20,
        alignItems: 'center',
    },
    barcodeLabel: {
        fontSize: 12,
        color: '#888888',
        marginBottom: 12,
        textAlign: 'center',
        fontFamily: Font["poppins-semiBold"]
    },
    barcode: {
        width: '100%',
        height: 50,
    },
});
