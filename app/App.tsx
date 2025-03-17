import { StatusBar } from 'expo-status-bar';
import { View, Image, ScrollView, Text } from 'react-native';
import '../global.css';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Navbar from './components/Navbar';
import RegisterFeatured from './components/RegisterFeatured';
import Categories from './components/Homepage/Categories';
import CategoryImages from './components/Homepage/CategoryImages';
import BestSellingProducts from './components/Homepage/BestSellingProducts';
import ProductsNearYou from './components/Homepage/ProductsNearYou';
import MenuBar from './components/MenuBar';
import CarouselImages from './components/Homepage/CarouselImages';

// Create a stack navigator
const Stack = createNativeStackNavigator();

// Home screen component
function HomeScreen() {
  return (
    <View className="bg-white flex-1">
      <View className="h-10" /> {/* Status bar spacer */}
      <StatusBar style="dark" backgroundColor="transparent" translucent />
      <View className="sticky top-0 z-10">
        <Navbar />
      </View>
      <ScrollView className="flex-1">
        <View className="flex gap-2">
          <CarouselImages />
          <RegisterFeatured />
          <Categories />
          <CategoryImages />
          <BestSellingProducts />
          <ProductsNearYou />
        </View>
      </ScrollView>
      
      {/* Bottom Navigation Bar */}
      <MenuBar />
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
