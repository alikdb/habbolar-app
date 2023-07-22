import { useCallback, useState } from "react";
import { RefreshControl, ScrollView } from "react-native";
import { articles } from "../../../fake-data";
import styles from "./styles";
import ArticleItem from "./item";
const Articles = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </ScrollView>
  );
};
export default Articles;
