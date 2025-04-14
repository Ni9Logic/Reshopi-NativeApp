import { View, Text, Image } from "react-native";
import { Link } from "expo-router";

interface CategoryCardProps {
  name: string;
  image?: string;
  icon?: string;
  slug: string;
}

export default function CategoryCard({ name, image, icon, slug }: CategoryCardProps) {
  return (
    <Link href={`/category/${slug}`} asChild>
      <View className="bg-gray-200 h-44 rounded-lg p-2 items-center justify-center">
        {image ? (
          <Image 
            source={{ uri: image }}
            className="w-20 h-20 rounded-lg"
          />
        ) : icon ? (
          <Image
            source={{ uri: icon }}
            className="w-12 h-12"
          />
        ) : null}
        <Text className="text-center mt-2 font-medium">{name}</Text>
      </View>
    </Link>
  )
}