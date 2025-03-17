import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MenuBar from '../components/MenuBar';

export default function Sell() {
  return (
    <View className="flex-1 bg-white">
      <View className="h-10" /> {/* Status bar spacer */}
      <StatusBar style="dark" backgroundColor="transparent" translucent />
      <View className="flex-1 justify-center items-center">
        <Text className="text-2xl font-bold text-gray-800">Sell Page</Text>
      </View>
    </View>
  );
} 