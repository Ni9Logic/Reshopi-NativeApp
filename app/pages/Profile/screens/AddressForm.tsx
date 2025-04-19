import React from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { AddressFormScreenNavigationProp } from "../../../types/navigation";

export default function AddressForm() {
  const navigation = useNavigation<AddressFormScreenNavigationProp>();
  const [addressName, setAddressName] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [apartment, setApartment] = useState("");
  const [region, setRegion] = useState("");
  const [commune, setCommune] = useState("");

  const regions = ["Región Metropolitana", "Valparaíso", "Biobío"];
  
  const communesByRegion: {[key: string]: string[]} = {
    "Región Metropolitana": ["Santiago", "Providencia", "Las Condes"],
    "Valparaíso": ["Valparaíso", "Viña del Mar", "Concón"],
    "Biobío": ["Concepción", "Talcahuano", "Chillán"]
  };

  const handleSave = () => {
    // Logic to save address
    navigation.goBack();
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <LinearGradient
        colors={['#4f46e5', '#7e22ce']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="w-full"
      >
        <View className="flex flex-row items-center p-4">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="p-2 bg-white/10 rounded-full"
          >
            <Ionicons name="arrow-back" size={22} color="#ffffff" />
          </TouchableOpacity>
          <Text className="text-white text-lg font-bold ml-4">Direcciones</Text>
        </View>
      </LinearGradient>

      <ScrollView className="p-4 space-y-4">
        <TextInput
          className="border border-gray-300 rounded-lg p-3 mb-4"
          placeholder="Nombre Dirección"
          value={addressName}
          onChangeText={setAddressName}
        />
        
        <TextInput
          className="border border-gray-300 rounded-lg p-3 mb-4"
          placeholder="Nombre"
          value={name}
          onChangeText={setName}
        />
        
        <TextInput
          className="border border-gray-300 rounded-lg p-3 mb-4"
          placeholder="Apellidos"
          value={lastName}
          onChangeText={setLastName}
        />
        
        <TextInput
          className="border border-gray-300 rounded-lg p-3 mb-4"
          placeholder="Dirección"
          value={address}
          onChangeText={setAddress}
        />
        
        <TextInput
          className="border border-gray-300 rounded-lg p-3 mb-4"
          placeholder="Número"
          value={number}
          onChangeText={setNumber}
          keyboardType="numeric"
        />
        
        <TextInput
          className="border border-gray-300 rounded-lg p-3 mb-4"
          placeholder="Dpto/Oficina/Casa"
          value={apartment}
          onChangeText={setApartment}
        />
        
        <View className="border border-gray-300 rounded-lg mb-4">
          <TouchableOpacity 
            className="p-3"
            onPress={() => {
              // Handle region selection with an alert or modal
              if (regions.length > 0) {
                setRegion(regions[0]);
              }
            }}
          >
            <Text className={region ? "text-black" : "text-gray-500"}>
              {region || "Elige Región"}
            </Text>
          </TouchableOpacity>
        </View>
        
        <View className="border border-gray-300 rounded-lg mb-4">
          <TouchableOpacity 
            className="p-3"
            disabled={!region}
            onPress={() => {
              // Handle commune selection with an alert or modal
              const communes = communesByRegion[region] || [];
              if (communes.length > 0) {
                setCommune(communes[0]);
              }
            }}
          >
            <Text className={commune ? "text-black" : "text-gray-500"}>
              {commune || "Elige Comuna"}
            </Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity 
          className="bg-indigo-600 p-4 rounded-xl mb-2"
          onPress={handleSave}
        >
          <Text className="text-white text-center font-medium">Guardar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          className="border border-gray-300 p-4 rounded-xl"
          onPress={() => navigation.goBack()}
        >
          <Text className="text-gray-600 text-center font-medium">Cerrar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
} 