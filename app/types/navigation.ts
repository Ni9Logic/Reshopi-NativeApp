import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define the root stack parameter list
export type RootStackParamList = {
  Home: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Purchases: undefined;
  PurchaseDetail: { orderId: string } | undefined;
  Addresses: undefined;
  AddressForm: undefined;
  Sales: undefined;
  SalesDetail: undefined;
  Earnings: undefined;
  SalesAddresses: undefined;
  PublishedProducts: undefined;
  TransferData: undefined;
  // Add more screens here as needed
};

// Navigation prop types for each screen
export type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
export type SignInScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SignIn'>;
export type SignUpScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SignUp'>;
export type PurchasesScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Purchases'>;
export type PurchaseDetailScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'PurchaseDetail'>;
export type AddressesScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Addresses'>;
export type AddressFormScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AddressForm'>;
export type SalesScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Sales'>;
export type SalesDetailScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SalesDetail'>;
export type EarningsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Earnings'>;
export type SalesAddressesScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SalesAddresses'>;
export type PublishedProductsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'PublishedProducts'>;
export type TransferDataScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'TransferData'>; 