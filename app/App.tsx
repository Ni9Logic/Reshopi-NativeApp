import { StatusBar } from 'expo-status-bar';
import { View, Image, ScrollView, Text } from 'react-native';
import '../global.css';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Navbar from './components/Navbar';
import RegisterFeatured from './components/RegisterFeatured';
import Categories from './components/Homepage/Categories';
import CategoryImages from './components/Homepage/CategoryImages';
import BestSellingProducts from './components/Homepage/BestSellingProducts';
import ProductsNearYou from './components/Homepage/ProductsNearYou';
import CarouselImages from './components/Homepage/CarouselImages';
import Explore from './pages/Explore';
import Sell from './pages/Sell';
import Profile from './pages/Profile';
import Purchases from './pages/Profile/screens/Purchases';
import Addresses from './pages/Profile/screens/Addresses';
import Sales from './pages/Profile/screens/Sales';
import Earnings from './pages/Profile/screens/Earnings';
import SalesAddresses from './pages/Profile/screens/SalesAddresses';
import PublishedProducts from './pages/Profile/screens/PublishedProducts';
import TransferData from './pages/Profile/screens/TransferData';
import Help from './pages/Profile/screens/Help';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
    </View>
  );
}

// Create the tab navigation
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingVertical: 8,
          backgroundColor: 'white',
          borderTopColor: '#f1f5f9',
        },
        tabBarActiveTintColor: '#4f46e5',
        tabBarInactiveTintColor: '#6b7280',
      }}
    >
      <Tab.Screen 
        name="HomeTab" 
        component={HomeScreen}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Explore" 
        component={Explore}
        options={{
          tabBarLabel: 'Explorar',
          tabBarIcon: ({ color, size }) => (
            <Feather name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Sell" 
        component={Sell}
        options={{
          tabBarLabel: 'Vender',
          tabBarIcon: ({ color, size }) => (
            <Feather name="dollar-sign" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile}
        options={{
          tabBarLabel: 'Mi cuenta',
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" component={TabNavigator} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Purchases" component={Purchases} />
        <Stack.Screen name="Addresses" component={Addresses} />
        <Stack.Screen name="Sales" component={Sales} />
        <Stack.Screen name="Earnings" component={Earnings} />
        <Stack.Screen name="SalesAddresses" component={SalesAddresses} />
        <Stack.Screen name="PublishedProducts" component={PublishedProducts} />
        <Stack.Screen name="TransferData" component={TransferData} />
        <Stack.Screen name="Help" component={Help} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
