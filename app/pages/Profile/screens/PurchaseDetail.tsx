import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../types/navigation";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
type PurchaseDetailRouteProp = RouteProp<RootStackParamList, 'PurchaseDetail'>;

export default function PurchaseDetail() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<PurchaseDetailRouteProp>();
  const orderId = route.params?.orderId;

  // In a real app, you would fetch this based on orderId
  const purchaseData = {
    productName: "BOTAS DE CUERO ZARA",
    deliveryDate: "12 de Marzo",
    productCode: "81",
    tracking: "90909",
    orderNumber: orderId || "26660009",
    shippingCost: "$17990",
    quantity: "1",
    productPrice: "$17990",
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
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
          <Text className="text-white text-lg font-bold ml-4">Compras</Text>
        </View>
      </LinearGradient>

      <View className="p-4">
        <View className="bg-white rounded-lg p-4 shadow-sm">
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-gray-500 text-xs">Estado</Text>
            <TouchableOpacity className="bg-green-500 px-3 py-1 rounded-full">
              <Text className="text-white text-xs font-medium">¿Entrega exitosa?</Text>
            </TouchableOpacity>
          </View>

          <Text className="text-lg font-bold mt-2">{purchaseData.productName}</Text>
          
          <View className="mt-4 space-y-1">
            <DetailRow label="Entregado" value={purchaseData.deliveryDate} />
            <DetailRow label="Código Producto" value={purchaseData.productCode} />
            <DetailRow label="Tracking" value={purchaseData.tracking} />
            <DetailRow label="Orden de compra" value={purchaseData.orderNumber} />
            <DetailRow label="Costo de envío" value={purchaseData.shippingCost} />
            <DetailRow label="Cantidad" value={purchaseData.quantity} />
            <DetailRow label="Precio producto" value={purchaseData.productPrice} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <View className="flex-row mb-1">
      <Text className="font-bold text-gray-500">{label}: </Text>
      <Text className="text-gray-500">{value}</Text>
    </View>
  );
} 