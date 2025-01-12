import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    FlatList,
    useColorScheme,
    ImageSourcePropType,
    Dimensions,
} from "react-native";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import FontSize from "../constants/FontSize";
import { useNavigation } from "@react-navigation/native";
import { BlurView } from 'expo-blur';
import { Ionicons } from "@expo/vector-icons";

interface Product {
    id: number;
    name: string;
    price: string;
    image: ImageSourcePropType;
    Category: string;
}

const productsData: Product[] = [
    {
        id: 1,
        name: 'DJ Night & Concert',
        price: '700 Rs/-',
        image: { uri: 'https://firebasestorage.googleapis.com/v0/b/collab-o-452a2.appspot.com/o/djh.png?alt=media&token=ed9520bb-b06b-4024-93bd-1c8d2fc1ecd0' },
        Category: "Best Saler"
    },
    {
        id: 2,
        name: 'SPANDAN - GLAU ANNUAL FEST',
        price: '900 Rs/-',
        image:{ uri: 'https://firebasestorage.googleapis.com/v0/b/collab-o-452a2.appspot.com/o/spandhansds.png?alt=media&token=47f392b2-eea4-480a-9ed5-96d85d359a62' },
        Category: "Recommended"
    },
    {
        id: 3,
        name: 'New Labrador Retirver Vaccinated',
        price: '$19.99',
        image: { uri: 'https://firebasestorage.googleapis.com/v0/b/collab-o-452a2.appspot.com/o/34grewg.webp?alt=media&token=c9af02b5-e2a8-4d42-9066-88d766a3ae8e' },
        Category: "Fast Out"
    },
    {
        id: 4,
        name: 'Premium Siberian Huskey',
        price: '$24.99',
        image: { uri: 'https://kaspiunique.com/Temp/djh.webp' },
        Category: "Best Saler"
    },
];


const UpcommingEvents: React.FC = () => {
    const colorScheme = useColorScheme();
    const nav = useNavigation();

    const screenWidth = Dimensions.get('window').width;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colorScheme === 'dark' ? Colors.darkBackground : Colors.white,marginBottom:100
        },
        productItem: {
            width: 320,
            display: "flex",
            flexDirection: 'column',
            margin: 5,
            borderRadius: 10,
            backgroundColor:Colors.white,
            padding:5,
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
        },
        productName: {
            fontSize: FontSize.base,
            fontFamily: Font["poppins-semiBold"],
            marginTop: 5,
            color: colorScheme === 'dark' ? Colors.white : Colors.text,
        },
        productPrice: {
            fontSize: FontSize.lg,
            fontFamily: Font["poppins-bold"],
            color: colorScheme === 'dark' ? Colors.white : '#85BB65',
        },
        avatarGroup: {
            flexDirection: "row",
            alignItems: "center",
            marginLeft: "auto",
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
    });

    const AvatarGroup = () => {
        //set views data
        const avatars = [
          {uri:"https://firebasestorage.googleapis.com/v0/b/collab-o-452a2.appspot.com/o/male.png?alt=media&token=56fa9c9b-20a7-4772-a474-3655b7c2b2c6"},
          {uri:"https://firebasestorage.googleapis.com/v0/b/collab-o-452a2.appspot.com/o/female.png?alt=media&token=a48a4f73-05fe-4a78-b619-756b57ea06e6"},
          {uri:"https://firebasestorage.googleapis.com/v0/b/collab-o-452a2.appspot.com/o/male.png?alt=media&token=56fa9c9b-20a7-4772-a474-3655b7c2b2c6"},
          {uri:"https://firebasestorage.googleapis.com/v0/b/collab-o-452a2.appspot.com/o/female.png?alt=media&token=a48a4f73-05fe-4a78-b619-756b57ea06e6"},
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

    const renderProductItem = ({ item }: { item: Product }) => (
        <TouchableOpacity
            style={styles.productItem}
           onPress={()=>{nav.navigate("EventDetails")}}
        >
            <Image source={item.image} style={styles.productImage} />
            <View style={{ padding:5}}>
                <Text style={styles.productName}>{item.name}</Text>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 5  , gap:5}}>
                    <View style={{flexDirection:"row" , alignItems:"center", gap:2}}>
                        <Ionicons name="location" size={20} color={Colors.primary}/>
                        <Text style={{fontFamily:Font["poppins-regular"] , fontSize:FontSize.base , color:Colors.textGray}}>GLAU, KC Ground</Text>
                    </View>
                    <View style={{flexDirection:"row" , alignItems:"center", gap:5}}>
                        <Ionicons name="time-outline" size={20} color={Colors.primary}/>
                        <Text style={{fontFamily:Font["poppins-regular"] , fontSize:FontSize.base , color:Colors.textGray}}>5 April-7:00Pm</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 5 }}>
                    <View style={{flexDirection:"row" , alignItems:"center", gap:5}}>
                        <Text style={styles.productPrice}>{item.price}</Text>
                        <Text style={{fontFamily:Font["poppins-regular"] , color:Colors.textGray}}>person</Text>
                    </View>
                    <View>
                        <AvatarGroup/>
                    </View>
                </View>
                
            </View>
            <BlurView  intensity={70} style={{ position: "absolute", left: 15, top: 15, padding: 5, paddingHorizontal:10, borderRadius: 10, opacity: 6   , overflow:"hidden"}}>
                <TouchableOpacity style={{ flexDirection: "row"}}>
                    <Text style={{fontFamily:Font["poppins-regular"] , color:Colors.white}}>Event</Text>
                </TouchableOpacity>
            </BlurView>
            <BlurView intensity={50} style={{ position: "absolute", right: 15, top: 15, padding: 7, borderRadius: 50, opacity: 6 , overflow:"hidden"}}>
                <TouchableOpacity style={{ flexDirection: "row" }}>
                    <Ionicons name='star-outline' size={24} color={colorScheme === 'dark' ? Colors.white : Colors.primary} />
                </TouchableOpacity>
            </BlurView>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={{marginHorizontal:10}}>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" , marginTop:10}}>
                <Text style={{ fontSize: FontSize.lg, fontFamily: Font["poppins-regular"], color:colorScheme === 'dark' ? Colors.white : Colors.text }}>Upcomming Events</Text>
                <TouchableOpacity  >
                    <Text style={{ fontFamily: Font["poppins-regular"], color:colorScheme === 'dark' ? Colors.white : Colors.textGray }}>See All</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={productsData}
                renderItem={renderProductItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ paddingVertical: 10 }}
            />
            </View>
        </View>
    );
};

export default UpcommingEvents;
