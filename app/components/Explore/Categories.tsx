import { View, Text } from "react-native";
import CategoryCard from "./CategoryCard";
import prisma from "@/src/lib/db";
import React, { useEffect } from "react";
import { categorias } from "@prisma/client";


export default function Categories() {

  const [categories, setCategories] = React.useState<categorias[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      const res = await prisma.categorias.findMany();
      setCategories(res);
    }

    fetchCategories();
  }, [])

  console.log(categories);
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