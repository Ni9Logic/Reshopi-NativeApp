import { View, Image, Text } from "react-native";

export default function CategoryImages() {
  return (
    <View className="w-full flex flex-col gap-1">
      <View className='w-full'>
        <Image
          source={{ uri: "https://reshopidev.s3.amazonaws.com/img/Banners/Banner_B/B1.webp" }}
          className="w-full h-20"
          resizeMode="cover"
        />
      </View>
      <View className='w-full'>
        <Image
          source={{ uri: "https://reshopidev.s3.amazonaws.com/img/Banners/banner_C/C1.webp" }}
          className="w-full h-60"
          resizeMode="cover"
        />
      </View>
      <View className='w-full flex flex-row gap-2 items-center justify-center'>
        <View className='w-48 flex flex-col gap-1'>
          <View className='relative border border-1 border-gray-500'>
            <Image
              source={{ uri: "https://reshopidev.s3.amazonaws.com/img/Banners/banner_C/C2.webp" }}
              className='w-full h-40'
              resizeMode='cover'
            />
            <Text className='absolute top-2 text-white text-sm text-center font-bold w-full bg-blue-500'>Featured</Text>
          </View>
          <View className='relative border border-1 border-gray-500'>
            <Image
              source={{ uri: "https://reshopidev.s3.amazonaws.com/img/Banners/banner_C/C4.webp" }}
              className='w-full h-40'
              resizeMode='cover'
            />
            <Text className='absolute top-2 text-white text-sm text-center font-bold w-full bg-purple-500'>Furniture</Text>
          </View>
        </View>
        <View className='w-48 flex flex-col gap-1'>
          <View className='relative border border-1 border-gray-500'>
            <Image
              source={{ uri: "https://reshopidev.s3.amazonaws.com/img/Banners/banner_C/C3.webp" }}
              className='w-full h-40'
              resizeMode='cover'
            />
            <Text className='absolute top-2 text-white text-sm text-center font-bold w-full bg-purple-700'>Gym</Text>
          </View>
          <View className='relative border border-1 border-gray-500'>
            <Image
              source={{ uri: "https://reshopidev.s3.amazonaws.com/img/Banners/banner_C/C5.webp" }}
              className='w-full h-40'
              resizeMode='cover'
            />
            <Text className='absolute top-2 text-white text-sm text-center font-bold w-full bg-pink-500'>Technology</Text>
          </View>
        </View>
      </View>
    </View>
  )
}