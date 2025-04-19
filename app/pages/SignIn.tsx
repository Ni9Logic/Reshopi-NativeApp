import { View, Text, TextInput, TouchableOpacity, Image, StatusBar, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SignInScreenNavigationProp } from '../types/navigation';
import reshopiLogo from "@/assets/logo-color.png";
import { useState } from "react";

export default function SignIn() {
  const navigation = useNavigation<SignInScreenNavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = () => {
    // Form validation
    if (!email || !password) {
      return;
    }
    
    // Navigate to main app after sign in
    navigation.navigate('MainTabs');
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      
      <ScrollView className="flex-1 px-6 pt-8">
        <View className="items-center mb-4">
          <Text className="text-2xl text-center font-bold mb-2">¡Hola Bienvenido!</Text>
          <Image
            source={reshopiLogo}
            className="w-20 h-20"
            resizeMode="contain"
          />
        </View>
        
        {/* Tab navigation */}
        <View className="flex-row mb-6 border-b border-gray-200">
          <TouchableOpacity 
            className="pb-2 px-4"
            onPress={() => navigation.navigate('SignUp')}
          >
            <Text className="text-gray-400">REGÍSTRATE</Text>  
          </TouchableOpacity>
          <TouchableOpacity 
            className="pb-2 px-4 border-b-2 border-indigo-600"
            onPress={() => {}}
          >
            <Text className="font-medium">INICIA SESIÓN</Text>
          </TouchableOpacity>
        </View>
        
        {/* Sign In Form */}
        <View className="py-2">
          <View className="mb-4">
            <Text className="text-gray-700 mb-1">Dirección de correo electrónico</Text>
            <TextInput
              placeholder=""
              className="border border-gray-300 rounded p-3 text-gray-800"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View className="mb-2">
            <Text className="text-gray-700 mb-1">Contraseña</Text>
            <View className="flex-row items-center border border-gray-300 rounded">
              <TextInput
                placeholder=""
                className="flex-1 p-3 text-gray-800"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity 
                onPress={() => setShowPassword(!showPassword)} 
                className="px-3"
              >
                <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={20} color="#6b7280" />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity className="self-end mb-6">
            <Text className="text-gray-500 text-sm">¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={handleSignIn}
            className={`mt-2 ${(!email || !password) ? 'opacity-70' : 'opacity-100'}`}
          >
            <View className="bg-indigo-600 py-3 rounded items-center">
              <Text className="text-white font-semibold">Inicio sesión</Text>
            </View>
          </TouchableOpacity>

          <View className="mt-6 items-center">
            <Text className="text-gray-500 text-sm">¿Aún no eres un ReShoper?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text className="text-indigo-600 font-semibold">Crea tu cuenta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}