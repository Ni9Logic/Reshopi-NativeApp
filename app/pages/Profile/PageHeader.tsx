import { View, Image } from 'react-native';

export default function PageHeader() {
  return (
    <View className="bg-purple-500 w-full h-16 justify-center" >
      <Image
        source={require('../../../assets/logo-blanco.png')}
        className="w-32 h-10"
        resizeMode="contain"
      />
    </View >
  );
} 