import { View, Text, Image, ImageSourcePropType } from "react-native";

interface CategoryCardProps {
  title: string;
  image: ImageSourcePropType;
}

export default function CategoryCard({ title, image }: CategoryCardProps) {
  return (
    <View className="flex flex-col gap-1">
      <View className="w-36 h-24 bg-gray-200 rounded-lg items-center justify-center">
        <Image
          source={image}
          className="w-24 h-24 rounded-lg"
          resizeMode="cover"
        />
      </View>
      <Text className="text-center text-xs">
        {title}
      </Text>
    </View>
  )
}