import { View, Text, ActivityIndicator } from "react-native";
import CategoryCard from "./CategoryCard";
import React, { useEffect } from "react";
import { categorias } from "@prisma/client";

export default function Categories() {
  const [categories, setCategories] = React.useState<categorias[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch('http://192.168.18.173:3000/categories/getAllCategories');
        const data = await response.json();
        setCategories(data.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCategories();
  }, []);

  if (isLoading) {
    return (
      <View className="p-2">
        <Text className="font-bold text-xl">
          Categorías
        </Text>
        <View className="flex flex-row flex-wrap gap-2 items-center justify-center">
          {[...Array(6)].map((_, i) => (
            <View key={i} className="w-[30%]">
              <View className="bg-gray-100 h-44 rounded-lg p-2 items-center justify-center animate-pulse">
                <View className="w-20 h-20 bg-gray-200 rounded-lg" />
                <View className="mt-2 w-16 h-4 bg-gray-200 rounded" />
              </View>
            </View>
          ))}
        </View>
      </View>
    );
  }

  return (
    <View className="p-2">
      <Text className="font-bold text-xl">
        Categorías
      </Text>
      <View className="flex flex-row flex-wrap gap-2 items-center justify-center">
        {categories.map((category) => (
          <View key={category.id} className="w-[30%]">
            <CategoryCard
              name={category.nombre}
              image={category.foto || undefined}
              icon={category.icono_categoria || undefined}
              slug={category.slug}
            />
          </View>
        ))}
      </View>
    </View>
  )
}