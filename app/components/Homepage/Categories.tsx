import { View, ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";
import teddyBearCategory from "@/assets/teddyBearCategory.png";
import antiqueCategory from "@/assets/antiquesCategory.png";
import sportsCategory from "@/assets/sportsCategory.png";
import toolsCategory from "@/assets/toolsCategory.png";
import homeGardenCategory from "@/assets/homeandgardenCategory.png";
import petsCategory from "@/assets/petsCategory.png";
import watchesJewelryCategory from "@/assets/watchesandjewleryCategory.png";
import healthBeautyCategory from "@/assets/healthandbeautyCategory.png";
import technologyElectronicsCategory from "@/assets/technologyandelectronicsCategory.png";
import leisureCategory from "@/assets/leisureCategory.png";
import footwearCategory from "@/assets/footwearCategory.png"; 
export default function Categories(){
  const categories = [
    { title: "Toys", image: teddyBearCategory },
    { title: "Antiques", image: antiqueCategory },
    { title: "Sports", image: sportsCategory },
    { title: "Tools", image: toolsCategory },
    { title: "Home & Garden", image: homeGardenCategory },
    { title: "Pets", image: petsCategory },
    { title: "Watches & Jewelry", image: watchesJewelryCategory },
    { title: "Health & Beauty", image: healthBeautyCategory },
    { title: "Technology & Electronics", image: technologyElectronicsCategory },
    { title: "Leisure", image: leisureCategory },
    { title: "Footwear", image: footwearCategory },
  ]
  return (
    <View className="h-32">
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
      >
        <View className="flex flex-row gap-1 px-2">
          {categories.map((category, index) => (
            <CategoryCard key={index} title={category.title} image={category.image} />
          ))}
        </View>
      </ScrollView>
    </View>
  )
}