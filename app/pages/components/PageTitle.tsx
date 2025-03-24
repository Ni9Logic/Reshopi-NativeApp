import { View, Text } from "react-native";

interface PageTitleProps {
  title: string;
}

export const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <View>
      <Text className="text-gray-500 text-center font-semibold p-2" style={{
        fontSize: 24,
        fontFamily: 'TT Prosto Sans Trl Cnd',
      }}>
        {title}
      </Text>
    </View>
  )
};