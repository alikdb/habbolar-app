import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { ChevronLeft } from "lucide-react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { API_URL } from "@env";
import { useEffect, useState } from "react";
import { get } from "../../utils/request";
import RenderHtml from "react-native-render-html";

const Article = () => {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const { width } = useWindowDimensions();

  const navigation = useNavigation();
  const route = useRoute();
  const id = route.params?.id;
  const goBack = () => {
    navigation.goBack();
  };

  const getArticle = async () => {
    const response = await get(`${API_URL}/news/${id}`);
    return response;
  };

  useEffect(() => {
    const loadData = async () => {
      const response = await getArticle();
      setArticle(response.data);
      setLoading(false);
    };
    loadData();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            marginTop: 60,
            marginBottom: 20,
            marginHorizontal: 5,
          }}
        >
          <TouchableOpacity>
            <ChevronLeft stroke="#000" size={40} onPress={() => goBack()} />
          </TouchableOpacity>
        </View>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <View>
            <Text
              style={{
                fontSize: 20,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {article.title}
            </Text>

            <View
              style={{
                backgroundColor: "#fff",
                margin: 20,
                borderRadius: 10,
                padding: 10,
              }}
            >
              <RenderHtml
                source={{ html: article.content }}
                tagsStyles={{
                  img: {
                    width: "100%",
                  },
                }}
                contentWidth={width - 60}
              />
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
export default Article;
