import { View, Image } from "react-native";
export default function RegisterFeatured() {
  return (
    <View className="w-full">
     <Image 
       source={{uri: "https://reshopidev.s3.amazonaws.com/img/Banners/Banner_A/A1.webp"}} 
       className="w-full h-40" 
       resizeMode="cover"
     />
    </View>
  )
}