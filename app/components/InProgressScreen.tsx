import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

type RootStackParamList = {
  [key: string]: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface InProgressScreenProps {
  title: string;
  description: string;
  icon: string;
  gradientColors?: string[];
}

export default function InProgressScreen({ 
  title, 
  description, 
  icon,
  gradientColors = ['#4f46e5', '#7e22ce']
}: InProgressScreenProps) {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <LinearGradient
      // @ts-expect-error Gradient... colors...
        colors={gradientColors}
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
          <Text className="text-white text-lg font-bold ml-4">{title}</Text>
        </View>
      </LinearGradient>

      <ScrollView className="flex-1">
        <View className="items-center px-6 py-8">
          <View className="bg-indigo-100 p-6 rounded-full mb-6">
            <Ionicons name={icon as any} size={48} color="#4f46e5" />
          </View>
          
          <Text className="text-2xl font-bold text-gray-800 mb-3 text-center">
            Coming Soon!
          </Text>
          
          <Text className="text-gray-600 text-center mb-8">
            {description}
          </Text>

          <View className="w-full space-y-4">
            <View className="flex-row items-center justify-between bg-gray-50 p-4 rounded-xl">
              <View className="flex-row items-center">
                <View className="bg-indigo-100 p-2 rounded-lg mr-3">
                  <Ionicons name="construct-outline" size={20} color="#4f46e5" />
                </View>
                <Text className="text-gray-800 font-medium">In Development</Text>
              </View>
              <View className="bg-indigo-100 px-3 py-1 rounded-full">
                <Text className="text-indigo-600 text-xs font-medium">80%</Text>
              </View>
            </View>

            <View className="bg-gray-50 p-4 rounded-xl">
              <Text className="text-gray-800 font-medium mb-2">Planned Features:</Text>
              <View className="space-y-2">
                {[
                  "Intuitive and easy to use interface",
                  "Complete functionality",
                  "Modern and attractive design",
                  "Optimized user experience"
                ].map((feature, index) => (
                  <View key={index} className="flex-row items-center">
                    <Ionicons name="checkmark-circle-outline" size={16} color="#4f46e5" />
                    <Text className="text-gray-600 ml-2">{feature}</Text>
                  </View>
                ))}
              </View>
            </View>

            <TouchableOpacity className="bg-indigo-600 p-4 rounded-xl">
              <Text className="text-white font-medium text-center">
                Notify me when available
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}