import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { SalesDetailScreenNavigationProp } from "../../../types/navigation";

// Sample product image URL (replace with your actual image)
const sampleProductImage = "https://static.zara.net/photos///2021/I/1/1/p/6107/610/102/2/w/430/6107610102_1_1_1.jpg?ts=1632470555616";

interface SaleItem {
  id: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  commissionPercentage: number;
  commissionAmount: number;
  totalDispersion: number;
  status: string;
  image: string;
}

export default function SalesDetail() {
  const navigation = useNavigation<SalesDetailScreenNavigationProp>();

  // Sample sale details
  const saleItems: SaleItem[] = [
    {
      id: 1,
      name: "BOTAS DE CUERO ZARA",
      quantity: 1,
      unitPrice: 460000,
      totalPrice: 460000,
      commissionPercentage: 10,
      commissionAmount: 46000,
      totalDispersion: 414000,
      status: "PENDIENTE",
      image: sampleProductImage
    },
    {
      id: 2,
      name: "BOTAS DE CUERO ZARA",
      quantity: 1,
      unitPrice: 460000,
      totalPrice: 460000,
      commissionPercentage: 10,
      commissionAmount: 46000,
      totalDispersion: 414000,
      status: "PENDIENTE",
      image: sampleProductImage
    },
    {
      id: 3,
      name: "BOTAS DE CUERO ZARA",
      quantity: 1,
      unitPrice: 460000,
      totalPrice: 460000,
      commissionPercentage: 10,
      commissionAmount: 46000,
      totalDispersion: 414000,
      status: "PENDIENTE",
      image: sampleProductImage
    }
  ];

  // Calculate totals
  const totalCommission = saleItems.reduce((sum, item) => sum + item.commissionAmount, 0);
  const totalDispersion = saleItems.reduce((sum, item) => sum + item.totalDispersion, 0);

  // Format currency
  const formatCurrency = (amount: number): string => {
    return `$${amount.toLocaleString()}`;
  };

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
            className="p-2 flex-row items-center"
          >
            <Ionicons name="chevron-back" size={24} color="white" />
            <Text className="text-white text-lg">Ventas/Detalle</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <ScrollView className="flex-1 p-4">
        <View className="space-y-4">
          {saleItems.map((item) => (
            <View key={item.id} className="flex-row border-b pb-4 mb-2">
              <View className="w-1/4">
                <Image 
                  source={{ uri: item.image }} 
                  className="w-full h-24 rounded-md"
                  resizeMode="cover"
                />
              </View>
              <View className="flex-1 ml-4">
                <View className="flex-row justify-between items-start">
                  <Text className="text-gray-800 font-medium">{item.name}</Text>
                  <View className="bg-gray-200 rounded-full h-6 w-6 flex items-center justify-center">
                    <Text className="text-xs text-gray-700">{item.id}</Text>
                  </View>
                </View>
                <Text className="text-gray-500">Cantidad: {item.quantity}</Text>
                <Text className="text-gray-500">Precio unitario: {formatCurrency(item.unitPrice)}</Text>
                <Text className="text-gray-500">Precio total: {formatCurrency(item.totalPrice)}</Text>
                <Text className="text-gray-500">Comisión (%): {item.commissionPercentage}%</Text>
                <Text className="text-gray-500">Comisión ($): {formatCurrency(item.commissionAmount)}</Text>
                <Text className="text-gray-500">Total dispersión: {formatCurrency(item.totalDispersion)}</Text>
                <Text className="text-gray-500">Estado dispersión: {item.status}</Text>
              </View>
            </View>
          ))}
          
          <View className="bg-gray-50 p-4 rounded-md mt-2">
            <View className="flex-row justify-between border-b border-gray-200 pb-2">
              <Text className="text-gray-700 font-medium">Total comisión:</Text>
              <Text className="text-gray-700 font-medium">{formatCurrency(totalCommission)}</Text>
            </View>
            <View className="flex-row justify-between pt-2">
              <Text className="text-gray-700 font-medium">Total dispersión:</Text>
              <Text className="text-gray-700 font-medium">{formatCurrency(totalDispersion)}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
} 