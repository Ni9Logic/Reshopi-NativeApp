import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define the navigation param list type
type RootStackParamList = {
  Home: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Explore: undefined;
  Sell: undefined;
  Profile: undefined;
};

// Define the navigation prop type
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function MenuBar() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View className="flex-row justify-around items-center py-4 bg-white border-t border-gray-100 shadow-sm">
      <TouchableOpacity 
        className="items-center"
        onPress={() => navigation.navigate('Home')}
      >
        <View className="bg-indigo-50 p-2 rounded-xl">
          <Feather name="home" size={22} color="#4f46e5" />
        </View>
        <Text className="text-xs mt-1.5 font-medium text-indigo-600">Inicio</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        className="items-center"
        onPress={() => navigation.navigate('Explore')}
      >
        <View className="bg-indigo-50 p-2 rounded-xl">
          <Feather name="search" size={22} color="#4f46e5" />
        </View>
        <Text className="text-xs mt-1.5 font-medium text-indigo-600">Explorar</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        className="items-center"
        onPress={() => navigation.navigate('Sell')}
      >
        <View className="bg-indigo-50 p-2 rounded-xl">
          <Feather name="dollar-sign" size={22} color="#4f46e5" />
        </View>
        <Text className="text-xs mt-1.5 font-medium text-indigo-600">Vender</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        className="items-center"
        onPress={() => navigation.navigate('Profile')}
      >
        <View className="bg-indigo-50 p-2 rounded-xl">
          <Feather name="user" size={22} color="#4f46e5" />
        </View>
        <Text className="text-xs mt-1.5 font-medium text-indigo-600">Mi cuenta</Text>
      </TouchableOpacity>
    </View>
  );
}