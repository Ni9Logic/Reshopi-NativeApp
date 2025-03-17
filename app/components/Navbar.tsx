import { Ionicons } from '@expo/vector-icons';
import Logo from '@/assets/logo-blanco.png';
import { View, Image, Text, TextInput, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../types/navigation';

export default function Navbar() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleSignInPress = () => {
    navigation.navigate('SignIn');
  };

  return (
    <LinearGradient
      colors={['#1e40af', '#3730a3', '#7e22ce', '#9333ea']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      locations={[0, 0.3, 0.6, 1]}
      className="w-full px-4 py-3"
    >
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-3">
          <Image
            source={Logo}
            className="h-8 w-24"
            resizeMode="contain"
          />
        </View>
        <View className="flex-row gap-2">
          <Ionicons name='notifications-outline' size={24} color="#E9D5FF" />
          <Ionicons name='search' size={24} color="#E9D5FF" />
          <Ionicons name="cart-outline" size={24} color="#E9D5FF" />
        </View>
      </View>
    </LinearGradient>
  );
}
