import { TouchableOpacity, Text, View } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
const ArticleItem = ({ article }) => {
  const navigation = useNavigation();
  const readArticle = () => {
    navigation.navigate("Article", { article });
  };

  return (
    <View style={styles.article}>
      <View>
        <Text style={styles.articleTitle}>{article.title}</Text>
      </View>
      <View style={styles.articleData}>
        <View>
          <Text style={styles.articleAuthor}>{article.author}</Text>
        </View>
        <View>
          <Text style={styles.articleCategory}>{article.category.name}</Text>
        </View>
        <View>
          <Text style={styles.articleTime}>2 gün önce</Text>
        </View>
      </View>
      <View style={styles.spacing}></View>
      <View>
        <Text>{article.content}</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.articleRead}
          onPress={() => readArticle()}
        >
          <Text style={styles.articleReadTitle}>Haberi Oku</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ArticleItem;
