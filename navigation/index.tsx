/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Colors from "../constants/Colors";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import Welcome from "../screens/WelcomeScreen";

import { RootStackParamList } from "../types";
import HomeScreen from "../screens/HomeScreen";
import TicketScreen from "../screens/TicketsScreen";
import AccountScreen from "../screens/AccountScreen";
import ExploreScreen from "../screens/ExploreScreen";
import BottomNav from "../screens/BottamNav/BottamNav";
import EventDetails from "../screens/ExpandEvent/EventDetails";
import WelcomeScreen from "../screens/WelcomeScreen";
import PaymentScreen from "../screens/PaymentScreen";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.background,
  },
};

export default function Navigation() {
  return (
    <NavigationContainer theme={theme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="BottamTab" component={BottomNav} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="TicketScreen" component={TicketScreen} />
      <Stack.Screen name="AccountScreen" component={AccountScreen} />
      <Stack.Screen name="ExploreScreen" component={ExploreScreen} />
      <Stack.Screen name="EventDetails" component={EventDetails} />
      <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
    </Stack.Navigator>
  );
}
