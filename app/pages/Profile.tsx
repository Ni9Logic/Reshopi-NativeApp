import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import MenuBar from '../components/MenuBar';

export default function Profile() {
  return (
    <View className="flex-1 bg-gray-50">
      <View className="h-10" /> {/* Status bar spacer */}
      <StatusBar style="dark" backgroundColor="transparent" translucent />
      
      {/* Header Section */}
      <View className="px-4 py-2 flex-row items-center justify-between">
        <Text className="text-xl font-bold text-gray-800">Account</Text>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="#374151" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1">
        {/* User Info Card */}
        <View className="bg-white rounded-2xl mx-4 mt-4 p-4 shadow-sm">
          <View className="flex-row items-center">
            <Image
              source={{ uri: 'https://via.placeholder.com/100' }}
              className="w-16 h-16 rounded-full"
            />
            <View className="ml-4 flex-1">
              <Text className="text-lg font-bold text-gray-800">John Doe</Text>
              <Text className="text-gray-500">+1 234 567 8900</Text>
              <Text className="text-gray-500">john.doe@example.com</Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="create-outline" size={24} color="#374151" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Quick Stats */}
        <View className="flex-row mx-4 mt-4 space-x-2">
          <View className="flex-1 bg-white p-4 rounded-xl shadow-sm">
            <View className="flex-row items-center">
              <View className="bg-blue-100 p-2 rounded-full">
                <Ionicons name="cart-outline" size={20} color="#1D4ED8" />
              </View>
              <Text className="ml-2 text-gray-600">Orders</Text>
            </View>
            <Text className="text-xl font-bold text-gray-800 mt-2">12</Text>
          </View>
          <View className="flex-1 bg-white p-4 rounded-xl shadow-sm">
            <View className="flex-row items-center">
              <View className="bg-green-100 p-2 rounded-full">
                <Ionicons name="heart-outline" size={20} color="#047857" />
              </View>
              <Text className="ml-2 text-gray-600">Wishlist</Text>
            </View>
            <Text className="text-xl font-bold text-gray-800 mt-2">8</Text>
          </View>
        </View>

        {/* Account Options */}
        <View className="mt-6 px-4">
          <Text className="text-lg font-bold text-gray-800 mb-4">Account Settings</Text>
          
          {/* Menu Items */}
          {[
            { icon: 'location-outline', title: 'My Addresses', badge: '2' },
            { icon: 'card-outline', title: 'Payment Methods', badge: '3' },
            { icon: 'time-outline', title: 'Order History' },
            { icon: 'star-outline', title: 'My Reviews' },
            { icon: 'shield-checkmark-outline', title: 'Security' },
            { icon: 'help-circle-outline', title: 'Help & Support' },
          ].map((item, index) => (
            <TouchableOpacity 
              key={index} 
              className="bg-white flex-row items-center justify-between p-4 rounded-xl mb-2 shadow-sm"
            >
              <View className="flex-row items-center">
                {/* @ts-expect-error Needs handling */}
                <Ionicons name={item.icon} size={22} color="#374151" />
                <Text className="ml-3 text-gray-800">{item.title}</Text>
              </View>
              <View className="flex-row items-center">
                {item.badge && (
                  <View className="bg-gray-100 rounded-full px-2 mr-2">
                    <Text className="text-sm text-gray-600">{item.badge}</Text>
                  </View>
                )}
                <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
              </View>
            </TouchableOpacity>
          ))}

          {/* Logout Button */}
          <TouchableOpacity className="mt-4 mb-8 bg-red-50 p-4 rounded-xl">
            <View className="flex-row items-center justify-center">
              <Ionicons name="log-out-outline" size={22} color="#DC2626" />
              <Text className="ml-2 text-red-600 font-semibold">Log Out</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
} 