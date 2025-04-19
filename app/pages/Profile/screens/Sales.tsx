import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { SalesScreenNavigationProp } from "../../../types/navigation";

export default function Sales() {
  const navigation = useNavigation<SalesScreenNavigationProp>();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <LinearGradient
        colors={['#6366f1', '#7c3aed']} 
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="w-full"
      >
        <View className="flex-row items-center p-4">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="p-2"
          >
            <Text className="text-white text-lg">Ventas</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <ScrollView className="flex-1 p-4">
        <View className="space-y-4">
          <View className="bg-white rounded-lg p-4 shadow-sm">
            <View className="mb-1">
              <Text className="text-gray-700">N°Orden de Compra: 80021</Text>
              <Text className="text-gray-500 text-sm">FECHA: 18/02/2022</Text>
              <Text className="text-gray-500 text-sm">Monto de compra: $100.000</Text>
            </View>
            <View className="flex-row justify-end mt-2">
              <TouchableOpacity 
                className="bg-[#4285f4] px-4 py-1.5 rounded-lg"
                onPress={() => navigation.navigate('SalesDetail')}
              >
                <Text className="text-white text-sm">Ver detalle</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className="bg-white rounded-lg p-4 shadow-sm">
            <View className="mb-1">
              <Text className="text-gray-700">N°Orden de Compra: 80022</Text>
              <Text className="text-gray-500 text-sm">FECHA: 18/02/2022</Text>
              <Text className="text-gray-500 text-sm">Tracking: 7859375243</Text>
            </View>
            <View className="flex-row justify-end mt-2">
              <TouchableOpacity 
                className="bg-[#7c3aed] px-4 py-1.5 rounded-lg"
                onPress={() => navigation.navigate('SalesDetail')}
              >
                <Text className="text-white text-sm">Ver detalle</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}