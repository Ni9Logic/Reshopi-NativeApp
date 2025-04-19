import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Platform, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type RootStackParamList = {
  [key: string]: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

type EarningItem = {
  orderNumber: string;
  amount: number;
  status: string;
};

export default function Earnings() {
  const navigation = useNavigation<NavigationProp>();
  const insets = useSafeAreaInsets();

  const earnings: EarningItem[] = [
    { orderNumber: '2546009', amount: 40000, status: 'Completado' },
    { orderNumber: '2560010', amount: 50000, status: 'Pendiente' },
    { orderNumber: '2578989', amount: 56000, status: 'En Proceso' },
    { orderNumber: '2676878', amount: 95000, status: 'Fallo' },
    { orderNumber: '2689877', amount: 25000, status: 'Completado' },
    { orderNumber: '2878888', amount: 10000, status: 'Retorno' },
  ];

  const totalEarnings = earnings.reduce((sum, item) => sum + item.amount, 0);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completado':
        return 'text-green-500';
      case 'Pendiente':
        return 'text-yellow-500';
      case 'En Proceso':
        return 'text-blue-500';
      case 'Fallo':
        return 'text-red-500';
      case 'Retorno':
        return 'text-gray-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <View className="flex-1 bg-gray-100" style={{
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      paddingBottom: insets.bottom
    }}>
      <StatusBar barStyle="light-content" backgroundColor="#4f46e5" />
      <LinearGradient
        colors={['#4f46e5', '#7e22ce']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="w-full"
      >
        <View className="flex flex-row items-center p-4" style={{ paddingTop: insets.top || 16 }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="p-2 bg-white/10 rounded-full"
          >
            <Ionicons name="arrow-back" size={22} color="#ffffff" />
          </TouchableOpacity>
          <Text className="text-white text-lg font-bold ml-4">Ganancias</Text>
        </View>
      </LinearGradient>

      <ScrollView className="flex-1">
        <View className="p-4">
          <View className="bg-white rounded-lg p-4 mb-4">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-gray-500">N° de Orden de Compra</Text>
              <Text className="text-gray-500">Ganancia</Text>
              <Text className="text-gray-500">Estatus</Text>
            </View>
            {earnings.map((item) => (
              <View key={item.orderNumber} className="flex-row justify-between items-center py-2">
                <Text className="text-gray-700">{item.orderNumber}</Text>
                <Text className="text-gray-700">${item.amount.toLocaleString()}</Text>
                <Text className={getStatusColor(item.status)}>{item.status}</Text>
              </View>
            ))}
          </View>
          
          <View className="bg-white rounded-lg p-4">
            <View className="flex-row justify-between items-center">
              <Text className="text-lg font-bold">TOTAL GANANCIA:</Text>
              <Text className="text-lg font-bold">${totalEarnings.toLocaleString()}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}