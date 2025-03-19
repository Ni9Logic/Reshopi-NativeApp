import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function SearchBar() {
  return (
    <View className="bg-blue-500 h-32">
      <View className="flex flex-row gap-2">
        <View className="absolute top-4 left-4 right-4 flex flex-row items-center justify-between">
          <View className="relative flex-1 mr-2">
            <TextInput
              className="w-full rounded-full bg-white p-4"
              placeholder="Busca entre muchos productos"
              style={{ fontFamily: 'TT-Prosto-Sans-Trl-Cnd' }}
            />
            <TouchableOpacity className="absolute right-2 top-1/2 -translate-y-1/2">
              <Ionicons name="search" size={24} color="white" className="bg-[#5865FF] rounded-full p-2" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Ionicons name="cart-outline" size={32} color="white" />
          </TouchableOpacity>
        </View>
        <View className="absolute top-20 left-4 flex flex-row items-center">
          <Ionicons name="location-outline" size={24} color="white" />
          <Text className="text-white ml-2" style={{ fontFamily: 'TT-Prosto-Sans-Trl-Cnd' }}>
            Busqueda por ubicación
          </Text>
        </View>
      </View>
    </View>
  )
}