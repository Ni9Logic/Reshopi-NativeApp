import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define the root stack parameter list
export type RootStackParamList = {
  Home: undefined;
  SignIn: undefined;
  SignUp: undefined;
  // Add more screens here as needed
};

// Navigation prop types for each screen
export type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
export type SignInScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SignIn'>;
export type SignUpScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SignUp'>; 