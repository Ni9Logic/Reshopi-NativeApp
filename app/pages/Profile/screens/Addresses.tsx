import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  [key: string]: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function Addresses() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <LinearGradient
        colors={['#4f46e5', '#7e22ce']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="w-full"
      >
        <View className="flex flex-row items-center p-4">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="p-2 bg-white/10 rounded-full"
          >
            <Ionicons name="arrow-back" size={22} color="#ffffff" />
          </TouchableOpacity>
          <Text className="text-white text-lg font-bold ml-4">Direcciones</Text>
        </View>
      </LinearGradient>

      <View className="p-4 space-y-4 flex flex-col gap-4">
        <View className="border-2 border-gray-200 p-4 rounded-xl">
          <View className="flex-row justify-between items-center mb-2">
            <Text className="font-bold">CASA</Text>
            <TouchableOpacity>
              <Ionicons name="trash-outline" size={20} color="#ef4444" />
            </TouchableOpacity>
          </View>
          <Text className="text-gray-600">
            Calle lázaro cárdenas 541,{"\n"}
            232323 Providencia,{"\n"}
            Santiago de Chile.
          </Text>
        </View>

        <View className="border-2 border-gray-200 p-4 rounded-xl">
          <View className="flex-row justify-between items-center mb-2">
            <Text className="font-bold">OFICINA</Text>
            <TouchableOpacity>
              <Ionicons name="trash-outline" size={20} color="#ef4444" />
            </TouchableOpacity>
          </View>
          <Text className="text-gray-600">
            Calle lázaro cárdenas 541,{"\n"}
            232323 Providencia,{"\n"}
            Santiago de Chile.
          </Text>
        </View>

        <TouchableOpacity className="bg-indigo-600 p-4 rounded-xl">
          <Text className="text-white text-center font-medium">Agregar dirección</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}