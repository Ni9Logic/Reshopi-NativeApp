import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Platform, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type RootStackParamList = {
  [key: string]: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function Help() {
  const navigation = useNavigation<NavigationProp>();
  const insets = useSafeAreaInsets();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [subject, setSubject] = useState('');
  const [orderNumber, setOrderNumber] = useState('');
  const [message, setMessage] = useState('');

  return (
    <View className="flex-1 bg-white" style={{ 
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      paddingBottom: insets.bottom
    }}>
      <StatusBar barStyle="light-content" backgroundColor="#4f46e5" />
      <LinearGradient
        colors={['#4f46e5', '#7e22ce']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="w-full"
      >
        <View className="flex flex-row items-center p-4" style={{ paddingTop: insets.top || 16 }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="p-2 bg-white/10 rounded-full"
          >
            <Ionicons name="arrow-back" size={22} color="#ffffff" />
          </TouchableOpacity>
          <Text className="text-white text-lg font-bold ml-4">Ayuda</Text>
        </View>
      </LinearGradient>

      <ScrollView className="flex-1 px-4 py-4">
        <View className="mb-4">
          <TextInput
            className="border border-gray-300 rounded-lg p-3 mb-3"
            placeholder="Pedro"
            value={firstName}
            onChangeText={setFirstName}
          />
          <TextInput
            className="border border-gray-300 rounded-lg p-3 mb-3"
            placeholder="Perez"
            value={lastName}
            onChangeText={setLastName}
          />
          <TextInput
            className="border border-gray-300 rounded-lg p-3 mb-3"
            placeholder="Asunto"
            value={subject}
            onChangeText={setSubject}
          />
          <TextInput
            className="border border-gray-300 rounded-lg p-3 mb-3"
            placeholder="Número de orden"
            value={orderNumber}
            onChangeText={setOrderNumber}
          />
          <TextInput
            className="border border-gray-300 rounded-lg p-3 mb-1"
            placeholder="Escribe tu mensaje aquí..."
            multiline
            numberOfLines={6}
            textAlignVertical="top"
            value={message}
            onChangeText={setMessage}
          />
          <Text className="text-red-500 text-xs mb-4">*Campo obligatorio (máximo 300 caracteres)</Text>
          
          <TouchableOpacity 
            className="bg-purple-600 rounded-lg py-3 items-center"
            onPress={() => {
              // Handle sending message
              console.log('Message sent');
            }}
          >
            <Text className="text-white font-medium">Enviar mensaje</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}