import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable } from 'react-native';
import '../global.css';
import Navbar from './components/Navbar';
import RegisterFeatured from './components/RegisterFeatured';

export default function App() {
  return (
    <View className="bg-white flex-1 gap-2">
      <View className="h-10" /> {/* Status bar spacer */}
      <StatusBar style="dark" backgroundColor="transparent" translucent />
      <Navbar />
      <RegisterFeatured />
    </View>
  );
}
