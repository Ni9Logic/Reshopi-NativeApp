import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";

export default function AccountDetails() {
  return (
    <TouchableOpacity className="pl-8 pr-4 flex flex-row gap-4 items-center">
      {/* Avatar Here */}
      <Ionicons size={24} name="person-outline" className="rounded-full p-4 bg-blue-500" color={"white"}/>

      {/* Name and Email */}
      <View className="flex flex-col">
        <Text className="font-bold text-xl">
          Pedro Perez
        </Text>
        <Text className="text-gray-400 font-semibold text-lg">
          Pedro.perez@gmail.com
        </Text>
      </View>

      <View className="flex-1 items-end">
        <Ionicons size={16} name="chevron-forward-outline" color={"gray"}/>
      </View>
    </TouchableOpacity>
  )
}