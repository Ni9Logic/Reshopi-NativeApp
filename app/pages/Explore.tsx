import { View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SearchBar from '../components/Explore/Searchbar';
import Categories from '../components/Explore/Categories';

export default function Explore() {
  return (
    <View className="flex-1 bg-white">
      <View className="h-10" /> {/* Status bar spacer */}
      <StatusBar style="dark" backgroundColor="transparent" translucent />
      <SearchBar />
      <ScrollView className="flex-1">
        <Categories />
      </ScrollView>
    </View>
  );
} 