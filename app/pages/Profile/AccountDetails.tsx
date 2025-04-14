import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Purchases: undefined;
  Addresses: undefined;
  Sales: undefined;
  Earnings: undefined;
  SalesAddresses: undefined;
  PublishedProducts: undefined;
  TransferData: undefined;
  Help: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const menuItems = [
  {
    id: 'purchases',
    title: 'Compras',
    icon: 'cart-outline',
    screen: 'Purchases'
  },
  {
    id: 'addresses',
    title: 'Direcciones',
    icon: 'location-outline',
    screen: 'Addresses'
  },
  {
    id: 'sales',
    title: 'Ventas',
    icon: 'cash-outline',
    screen: 'Sales'
  },
  {
    id: 'earnings',
    title: 'Ganancias',
    icon: 'wallet-outline',
    screen: 'Earnings'
  },
  {
    id: 'sales-addresses',
    title: 'Direcciones de ventas',
    icon: 'location-outline',
    screen: 'SalesAddresses'
  },
  {
    id: 'published-products',
    title: 'Productos publicados',
    icon: 'create-outline',
    screen: 'PublishedProducts'
  },
  {
    id: 'transfer-data',
    title: 'Datos de transferencia',
    icon: 'card-outline',
    screen: 'TransferData'
  },
  {
    id: 'help',
    title: 'Ayuda',
    icon: 'help-circle-outline',
    screen: 'Help'
  }
];

export default function AccountDetails() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View>
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

      {/* Menu Items */}
      <View className="mt-8">
        {menuItems.map((item) => (
          <TouchableOpacity 
            key={item.id}
            className="pl-8 pr-4 py-4 flex flex-row items-center"
            onPress={() => navigation.navigate(item.screen as keyof RootStackParamList)}
          >
            <Ionicons name={item.icon as any} size={24} color="gray" />
            <Text className="ml-4 text-lg">{item.title}</Text>
            <View className="flex-1 items-end">
              <Ionicons size={16} name="chevron-forward-outline" color={"gray"}/>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}