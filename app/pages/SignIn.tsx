import { View, Text, TextInput, Pressable, Image, TouchableOpacity, StatusBar, Platform } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { SignInScreenNavigationProp } from '../types/navigation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import reshopiLogo from "@/assets/logo-color.png";
import { useState } from "react";

export default function SignIn() {
  const navigation = useNavigation<SignInScreenNavigationProp>();
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="flex-1 bg-white">
      <StatusBar barStyle="light-content" backgroundColor="#1e40af" />
      {/* Header with gradient background */}
      <View
        style={{ paddingTop: insets.top }}
        className="w-full bg-black"
      >
        <View className="flex flex-row items-center p-4">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="p-2 bg-white/10 rounded-full"
          >
            <Ionicons name="arrow-back" size={22} color="#ffffff" />
          </TouchableOpacity>
          <Text className="text-white text-lg font-bold ml-4">Sign In</Text>
        </View>
      </View>

      {/* Sign In Form */}
      <View className="px-8 py-10 flex-1 justify-center">
        <View className="mb-8 items-center">
          <Text className="text-3xl font-bold text-gray-800 mb-4">Welcome Back</Text>
          <Image
            source={reshopiLogo}
            className="w-40 h-20"
            resizeMode="contain"
          />
        </View>
        
        <View className="mb-5">
          <Text className="text-gray-700 mb-2 font-medium ml-1">Email</Text>
          <View className="flex-row items-center border border-gray-200 rounded-xl bg-gray-50 px-4">
            <Ionicons name="mail-outline" size={20} color="#6366f1" />
            <TextInput
              placeholder="Enter your email"
              className="flex-1 p-3.5 ml-2 text-gray-800"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>
        </View>

        <View className="mb-4">
          <Text className="text-gray-700 mb-2 font-medium ml-1">Password</Text>
          <View className="flex-row items-center border border-gray-200 rounded-xl bg-gray-50 px-4">
            <Ionicons name="lock-closed-outline" size={20} color="#6366f1" />
            <TextInput
              placeholder="Enter your password"
              className="flex-1 p-3.5 ml-2 text-gray-800"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={20} color="#6366f1" />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity className="self-end mb-6">
          <Text className="text-indigo-600 font-medium">Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <LinearGradient
            colors={['#4f46e5', '#7e22ce']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="py-4 rounded-xl items-center shadow-sm"
          >
            <Text className="text-white font-bold text-lg">Sign In</Text>
          </LinearGradient>
        </TouchableOpacity>

        <View className="flex items-center mt-6">
          <Text className="text-gray-600">Are you new to ReShopi? </Text>
        </View>
        <View className="items-center flex">
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text className="text-indigo-600 font-semibold">Create an account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}