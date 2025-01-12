/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  WelcomeScreen: undefined;
  Login: undefined;
  Register: undefined;
  HomeScreen : undefined;
  ExploreScreen:undefined;
  AccountScreen:undefined;
  TicketScreen:undefined;
  BottamTab:undefined;
  EventDetails:undefined;
  PaymentScreen :undefined;
  EventTicket:undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;
