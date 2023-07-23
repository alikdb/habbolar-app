import { TouchableOpacity, Text, View } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import timeago from "../../../../utils/timago";
const ArticleItem = ({ article }) => {
  const navigation = useNavigation();
  const readArticle = () => {
    navigation.navigate("Article", { id: article.id });
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
          <Text style={styles.articleTime}>{timeago(article.createdAt)}</Text>
        </View>
      </View>
      <View style={styles.spacing}></View>
      <View>
        <Text>{article.description}</Text>
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
