import { Ionicons } from '@expo/vector-icons';
import Logo from '@/assets/logo-blanco.png';
import { View, Image, Text, TextInput, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Navbar() {
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
          <Pressable>
            <Ionicons name="menu" size={28} color="#E9D5FF" />
          </Pressable>
          <Image
            source={Logo}
            className="h-8 w-24"
            resizeMode="contain"
          />
        </View>
        <View className="flex-row gap-4">
          <View className='items-center justify-center'>
            <Text className='text-white text-sm font-semibold'>
              Hello, Sign In
            </Text>
          </View>
          <View className="relative">
            <Ionicons name="cart-outline" size={28} color="#E9D5FF" />
            <View className="absolute -top-2 -right-2 h-5 w-5 bg-red-500 rounded-full items-center justify-center">
              <Text className="text-white text-xs font-bold">3</Text>
            </View>
          </View>
        </View>
        <View className="absolute bottom-[-5px] left-0 right-0 h-[2px] bg-white" />
      </View>

      <View className="mt-3">
        <View className="flex-row items-center bg-white rounded-lg px-3 py-1">
          <Ionicons name="search" size={16} color="#FFFFFF" className='bg-[#1e40af] rounded-full p-2' />
          <TextInput
            placeholder="Search products..."
            className="flex-1 ml-2 text-base"
            placeholderTextColor="#6B7280"
          />
        </View>
      </View>

      <View className='mt-3'>
        <View className='flex flex-row items-center gap-2'>
          <Ionicons name='location-outline' size={20} color="#FFFFFF" />
          <Text className='text-white text-sm font-semibold'>
            Rawalpindi, Pakistan
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
}
