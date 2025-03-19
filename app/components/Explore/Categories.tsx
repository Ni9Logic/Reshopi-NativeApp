import { View, Text } from "react-native";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  return (
    <View className="p-2">
      <Text className="font-bold text-xl">
        Categorías
      </Text>
      <View className="flex flex-row flex-wrap gap-2 items-center justify-center">
        {[1,2,3,4,5,6,7,8,9,10,11,12].map((_, index) => (
          <View key={index} className="w-[30%]">
            <CategoryCard />
          </View>
        ))}
      </View>
    </View>
  )
}