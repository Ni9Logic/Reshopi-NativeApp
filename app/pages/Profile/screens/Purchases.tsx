import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  [key: string]: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function Purchases() {
  const navigation = useNavigation<NavigationProp>();

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

      <ScrollView>
        {[1, 2, 3, 4].map((item) => (
          <View key={item} className="flex-col flex p-8  border-b bg-white border-white gap-4">
            <View className="flex flex-row gap-2">
              <Image
                // source={require('../../../assets/boots.jpg')}
                className="w-20 h-20 rounded-lg"
              />
              <View className="flex-1 ml-4">
                <Text>
                  Botas de cuero zara
                </Text>
                <View className="flex flex-row gap-1">
                  <Text className="font-bold text-gray-400">
                    Código Producto:
                  </Text>
                  <Text className="text-gray-400">
                    81
                  </Text>
                </View>
                <View className="flex flex-row gap-1">
                  <Text className="font-bold text-gray-400">
                    Cantidad:
                  </Text>
                  <Text className="text-gray-400">
                    1
                  </Text>
                </View>
                <View className="flex flex-row gap-1">
                  <Text className="font-bold text-gray-400">
                    Precio producto:
                  </Text>
                  <Text className="text-gray-400">
                    $17.990
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <View className="h-[1px] bg-gray-600 my-2" />
              <View className="w-full justify-between flex-row flex-1">
                <View className="flex flex-col gap-1">
                  <Text className="font-bold text-blue-500">
                    PENDIENTE
                  </Text>
                  <View>

                  </View>
                  <View className="flex flex-row gap-1">
                    <Text className="font-bold text-gray-400">
                      Orden de compra:
                    </Text>
                    <Text className="text-gray-400">
                      26660009
                    </Text>
                  </View>
                  <View className="flex flex-row gap-1">
                    <Text className="font-bold text-gray-400">
                      Enviado por:
                    </Text>
                    <Text className="text-blue-400 font-bold">
                      Blue
                    </Text>
                  </View>
                </View>
                <View className="flex flex-row">
                  <View className="border-1 border-blue-400 rounded-lg items-center justify-center w-10 h-10">
                    <Ionicons name="chatbox-ellipses-outline" size={20} color="#60a5fa" />
                  </View>
                  <View className="border-1 border-blue-400 rounded-lg items-center justify-center w-24 h-10">
                    <Text className="text-center items-center justify-center w-full h-full p-2 text-blue-400 font-bold">
                      Ver detalles
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}