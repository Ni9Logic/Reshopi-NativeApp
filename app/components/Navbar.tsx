import { Ionicons } from '@expo/vector-icons';
import Logo from '@/assets/logo-blanco.png';
import { View, Image } from 'react-native';

export default function Navbar() {
  return (
    <View className="w-full bg-purple-800 px-4 py-3 flex-row items-center justify-between">
      <Image
        source={Logo}
        className="h-8 w-24"
        resizeMode="contain"
      />
      <View className="flex-row gap-4">
        <Ionicons name="cart-outline" size={24} color="#E9D5FF" />
      </View>
    </View>
  );
}
