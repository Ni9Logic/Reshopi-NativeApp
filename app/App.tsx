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
    </View>
  );
}
