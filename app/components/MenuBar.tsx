import { Feather } from '@expo/vector-icons';
import { View, Image, ScrollView, Text, TouchableOpacity } from 'react-native';

export default function MenuBar() {
  return (
    <View className="flex-row justify-around items-center py-4 bg-white border-t border-gray-100 shadow-sm">
      <TouchableOpacity className="items-center">
        <View className="bg-indigo-50 p-2 rounded-xl">
          <Feather name="home" size={22} color="#4f46e5" />
        </View>
        <Text className="text-xs mt-1.5 font-medium text-indigo-600">Inicio</Text>
      </TouchableOpacity>
      
      <TouchableOpacity className="items-center">
        <View className="bg-indigo-50 p-2 rounded-xl">
          <Feather name="search" size={22} color="#4f46e5" />
        </View>
        <Text className="text-xs mt-1.5 font-medium text-indigo-600">Explorar</Text>
      </TouchableOpacity>

      <TouchableOpacity className="items-center">
        <View className="bg-indigo-50 p-2 rounded-xl">
          <Feather name="dollar-sign" size={22} color="#4f46e5" />
        </View>
        <Text className="text-xs mt-1.5 font-medium text-indigo-600">Vender</Text>
      </TouchableOpacity>

      <TouchableOpacity className="items-center">
        <View className="bg-indigo-50 p-2 rounded-xl">
          <Feather name="user" size={22} color="#4f46e5" />
        </View>
        <Text className="text-xs mt-1.5 font-medium text-indigo-600">Mi cuenta</Text>
      </TouchableOpacity>
    </View>
  )
}