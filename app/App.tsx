import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import '../global.css';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Navbar from './components/Navbar';
import RegisterFeatured from './components/RegisterFeatured';
import Categories from './components/Homepage/Categories';

// Create a stack navigator
const Stack = createNativeStackNavigator();

// Home screen component
function HomeScreen() {
  return (
    <View className="bg-white flex-1 gap-2">
      <View className="h-10" /> {/* Status bar spacer */}
      <StatusBar style="dark" backgroundColor="transparent" translucent />
      <Navbar />
      <RegisterFeatured />
      <Categories />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
