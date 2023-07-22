import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { ChevronLeft } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
const Article = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView>
      <TouchableOpacity>
        <ChevronLeft stroke="#000" size={40} onPress={() => goBack()} />
      </TouchableOpacity>
      <Text>Article</Text>
    </SafeAreaView>
  );
};
export default Article;
