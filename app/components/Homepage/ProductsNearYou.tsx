import { View, Image, Text } from "react-native";

export default function ProductsNearYou() {
  return (
    <View className="w-full flex flex-col gap-1">
      <View className="bg-red-500 py-2 px-4 rounded-full self-start ml-2">
        <Text className="text-white text-lg font-bold">Products Near You</Text>
      </View>
      <View className='w-full'>
        <Image
          source={{ uri: "https://reshopidev.s3.amazonaws.com/img/Banners/Banner_E/E1.webp" }}
          className="w-full h-60"
          resizeMode="cover"
        />
      </View>
      <View className='w-full flex flex-row gap-2 items-center justify-center'>
        <View className='w-48 flex flex-col gap-1'>
          <View className="border border-1 border-gray-500">
            <Image
              source={{ uri: "https://reshopidev.s3.amazonaws.com/img/Banners/Banner_E/E2.webp" }}
              className='w-full h-40'
              resizeMode='cover'
            />
          </View>
          <View className="border border-1 border-gray-500">
            <Image
              source={{ uri: "https://reshopidev.s3.amazonaws.com/img/Banners/Banner_E/E4.webp" }}
              className='w-full h-40'
              resizeMode='cover'
            />
          </View>
        </View>
        <View className='w-48 flex flex-col gap-1'>
          <View className="border border-1 border-gray-500">

            <Image
              source={{ uri: "https://reshopidev.s3.amazonaws.com/img/Banners/Banner_E/E3.webp" }}
              className='w-full h-40'
              resizeMode='cover'
            />
          </View>
          <View className="border border-1 border-gray-500">
            <Image
              source={{ uri: "https://reshopidev.s3.amazonaws.com/img/Banners/Banner_E/E5.webp" }}
              className='w-full h-40'
              resizeMode='cover'
            />
          </View>
        </View>
      </View>
    </View>
  )
}