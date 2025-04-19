import { View, Text, TextInput, TouchableOpacity, Image, StatusBar, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { SignUpScreenNavigationProp } from '../types/navigation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import reshopiLogo from "@/assets/logo-color.png";
import { useState } from "react";
import Checkbox from 'expo-checkbox';

export default function SignUp() {
  const navigation = useNavigation<SignUpScreenNavigationProp>();
  const insets = useSafeAreaInsets();
  
  // State for form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Handle form submission
  const handleSignUp = () => {
    // Form validation
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      return;
    }
    
    if (password !== confirmPassword) {
      return;
    }
    
    if (!termsAccepted) {
      return;
    }
    
    // Navigate to Sign In after registration
    navigation.navigate('SignIn');
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
            className="pb-2 px-4 border-b-2 border-indigo-600"
            onPress={() => {}}
          >
            <Text className="font-medium">REGÍSTRATE</Text>  
          </TouchableOpacity>
          <TouchableOpacity 
            className="pb-2 px-4"
            onPress={() => navigation.navigate('SignIn')}
          >
            <Text className="text-gray-400">INICIA SESIÓN</Text>
          </TouchableOpacity>
        </View>
        
        {/* Registration Form */}
        <View className="py-2">
          <View className="mb-4">
            <Text className="text-gray-700 mb-1">Nombre</Text>
            <TextInput
              placeholder=""
              className="border border-gray-300 rounded p-3 text-gray-800"
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>

          <View className="mb-4">
            <Text className="text-gray-700 mb-1">Apellido</Text>
            <TextInput
              placeholder=""
              className="border border-gray-300 rounded p-3 text-gray-800"
              value={lastName}
              onChangeText={setLastName}
            />
          </View>

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

          <View className="mb-4">
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

          <View className="mb-4">
            <Text className="text-gray-700 mb-1">Confirma tu contraseña</Text>
            <View className="flex-row items-center border border-gray-300 rounded">
              <TextInput
                placeholder=""
                className="flex-1 p-3 text-gray-800"
                secureTextEntry={!showConfirmPassword}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
              <TouchableOpacity 
                onPress={() => setShowConfirmPassword(!showConfirmPassword)} 
                className="px-3"
              >
                <Ionicons name={showConfirmPassword ? "eye-off-outline" : "eye-outline"} size={20} color="#6b7280" />
              </TouchableOpacity>
            </View>
          </View>

          <View className="mb-4">
            <Text className="text-gray-500 text-xs">Al registrar tus datos, aceptas nuestros Términos y Condiciones.</Text>
          </View>

          <View className="flex-row items-center mb-4">
            <Checkbox
              value={privacyAccepted}
              onValueChange={setPrivacyAccepted}
              color={privacyAccepted ? '#4f46e5' : undefined}
              className="mr-2"
            />
            <Text className="text-gray-500 text-xs">Acepto la Política de Privacidad y de Cookies.</Text>
          </View>

          <TouchableOpacity 
            onPress={handleSignUp}
            className={`mt-2 ${(!firstName || !lastName || !email || !password || !confirmPassword || !privacyAccepted) ? 'opacity-70' : 'opacity-100'}`}
          >
            <View className="bg-indigo-600 py-3 rounded items-center">
              <Text className="text-white font-semibold">Regístrate</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
} 