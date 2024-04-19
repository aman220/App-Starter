import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import { Ionicons } from "@expo/vector-icons";
import SearchScreen from "./SearchScreen";
import BannerSlider from "./BannerSlider";
import UpcommingEvents from "./UpcommingEvents";


const HomeScreen: React.FC = () => {
  const colorScheme = useColorScheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorScheme === 'dark' ? Colors.darkBackground : Colors.white,
    },
  });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <SearchScreen />
        <BannerSlider/>
        <UpcommingEvents/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
