import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable } from 'react-native';
import '../global.css';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <View className="bg-slate-900 flex-1">
      <View className="h-10" /> {/* Status bar spacer */}
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Navbar />
      <View className="flex-1 px-6 py-8">
        <View className="bg-slate-800 rounded-xl p-6 shadow-lg">
          <Text className="text-3xl text-white font-bold mb-4">
            Welcome to Blip Market Place
          </Text>
          <Text className="text-slate-300 text-lg">
            Discover amazing products at great prices
          </Text>
        </View>
        <View className="mt-8 flex-row gap-4 justify-center">
          <Pressable className="bg-purple-700 px-6 py-3 rounded-lg">
            <Text className="text-white font-semibold">Browse Products</Text>
          </Pressable>
          <Pressable className="bg-slate-700 px-6 py-3 rounded-lg">
            <Text className="text-white font-semibold">View Cart</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
