import { View, Text, TextInput, TouchableOpacity, Image, StatusBar, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { SignUpScreenNavigationProp } from '../types/navigation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import reshopiLogo from "@/assets/logo-color.png";
import { useState } from "react";

export default function SignUp() {
  const navigation = useNavigation<SignUpScreenNavigationProp>();
  const insets = useSafeAreaInsets();
  
  // State for form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  
  // Current step state (1: Name, 2: Email, 3: Confirmation)
  const [currentStep, setCurrentStep] = useState(1);

  // Function to handle next step
  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Function to handle previous step
  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      navigation.goBack();
    }
  };

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
            onPress={handlePrevStep}
            className="p-2 bg-white/10 rounded-full"
          >
            <Ionicons name="arrow-back" size={22} color="#ffffff" />
          </TouchableOpacity>
          <Text className="text-white text-lg font-bold ml-4">Create Account</Text>
        </View>
      </View>

      {/* Progress Indicator */}
      <View className="flex-row justify-center items-center px-8 py-4">
        <View className={`h-2 w-2 rounded-full ${currentStep >= 1 ? 'bg-indigo-600' : 'bg-gray-300'}`} />
        <View className={`h-0.5 w-6 ${currentStep >= 2 ? 'bg-indigo-600' : 'bg-gray-300'}`} />
        <View className={`h-2 w-2 rounded-full ${currentStep >= 2 ? 'bg-indigo-600' : 'bg-gray-300'}`} />
        <View className={`h-0.5 w-6 ${currentStep >= 3 ? 'bg-indigo-600' : 'bg-gray-300'}`} />
        <View className={`h-2 w-2 rounded-full ${currentStep >= 3 ? 'bg-indigo-600' : 'bg-gray-300'}`} />
      </View>

      <ScrollView className="flex-1 px-8">
        {/* Step 1: Name Information */}
        {currentStep === 1 && (
          <View className="py-6">
            <View className="mb-8 items-center">
              <Text className="text-2xl font-bold text-gray-800 mb-2">Let's Get Started</Text>
              <Text className="text-gray-500 text-center">Please enter your name to create your account</Text>
              <Image
                source={reshopiLogo}
                className="w-40 h-20 mt-4"
                resizeMode="contain"
              />
            </View>
            
            <View className="mb-5">
              <Text className="text-gray-700 mb-2 font-medium ml-1">First Name</Text>
              <View className="flex-row items-center border border-gray-200 rounded-xl bg-gray-50 px-4">
                <Ionicons name="person-outline" size={20} color="#6366f1" />
                <TextInput
                  placeholder="Enter your first name"
                  className="flex-1 p-3.5 ml-2 text-gray-800"
                  value={firstName}
                  onChangeText={setFirstName}
                />
              </View>
            </View>

            <View className="mb-8">
              <Text className="text-gray-700 mb-2 font-medium ml-1">Last Name</Text>
              <View className="flex-row items-center border border-gray-200 rounded-xl bg-gray-50 px-4">
                <Ionicons name="person-outline" size={20} color="#6366f1" />
                <TextInput
                  placeholder="Enter your last name"
                  className="flex-1 p-3.5 ml-2 text-gray-800"
                  value={lastName}
                  onChangeText={setLastName}
                />
              </View>
            </View>

            <TouchableOpacity 
              onPress={handleNextStep}
              disabled={!firstName.trim() || !lastName.trim()}
              className={`mt-4 ${(!firstName.trim() || !lastName.trim()) ? 'opacity-50' : 'opacity-100'}`}
            >
              <LinearGradient
                colors={['#4f46e5', '#7e22ce']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                className="py-4 rounded-xl items-center shadow-sm"
              >
                <Text className="text-white font-bold text-lg">Continue</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        )}

        {/* Step 2: Email Information */}
        {currentStep === 2 && (
          <View className="py-6">
            <View className="mb-8 items-center">
              <Text className="text-2xl font-bold text-gray-800 mb-2">Your Email</Text>
              <Text className="text-gray-500 text-center">We'll send a confirmation to verify your email</Text>
            </View>
            
            <View className="mb-8">
              <Text className="text-gray-700 mb-2 font-medium ml-1">Email Address</Text>
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

            <TouchableOpacity 
              onPress={handleNextStep}
              disabled={!email.includes('@')}
              className={`mt-4 ${!email.includes('@') ? 'opacity-50' : 'opacity-100'}`}
            >
              <LinearGradient
                colors={['#4f46e5', '#7e22ce']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                className="py-4 rounded-xl items-center shadow-sm"
              >
                <Text className="text-white font-bold text-lg">Verify Email</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        )}

        {/* Step 3: Confirmation */}
        {currentStep === 3 && (
          <View className="py-6">
            <View className="mb-8 items-center">
              <View className="w-20 h-20 bg-indigo-100 rounded-full items-center justify-center mb-4">
                <Ionicons name="mail" size={40} color="#6366f1" />
              </View>
              <Text className="text-2xl font-bold text-gray-800 mb-2">Check Your Email</Text>
              <Text className="text-gray-500 text-center">
                We've sent a confirmation link and OTP to {email}
              </Text>
            </View>
            
            <View className="mb-8">
              <Text className="text-gray-700 mb-2 font-medium ml-1">Enter OTP Code</Text>
              <View className="flex-row items-center border border-gray-200 rounded-xl bg-gray-50 px-4">
                <Ionicons name="keypad-outline" size={20} color="#6366f1" />
                <TextInput
                  placeholder="Enter 6-digit code"
                  className="flex-1 p-3.5 ml-2 text-gray-800"
                  keyboardType="number-pad"
                  maxLength={6}
                  value={otp}
                  onChangeText={setOtp}
                />
              </View>
            </View>

            <TouchableOpacity 
              onPress={() => navigation.navigate('Home')}
              disabled={otp.length !== 6}
              className={`mt-4 ${otp.length !== 6 ? 'opacity-50' : 'opacity-100'}`}
            >
              <LinearGradient
                colors={['#4f46e5', '#7e22ce']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                className="py-4 rounded-xl items-center shadow-sm"
              >
                <Text className="text-white font-bold text-lg">Complete Registration</Text>
              </LinearGradient>
            </TouchableOpacity>

            <View className="mt-6 items-center">
              <Text className="text-gray-500 mb-2">Didn't receive the email?</Text>
              <TouchableOpacity>
                <Text className="text-indigo-600 font-semibold">Resend Code</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Sign In Link */}
        <View className="flex items-center mt-6 mb-8">
          <Text className="text-gray-600">Already a ReShoper? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text className="text-indigo-600 font-semibold">Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
} 