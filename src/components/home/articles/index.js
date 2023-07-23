import { useEffect, useCallback, useState } from "react";
import { RefreshControl, ScrollView } from "react-native";
import { get } from "../../../utils/request";
import { API_URL } from "@env";
import styles from "./styles";
import ArticleItem from "./item";
const Articles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const response = await fetchNews();
      setArticles(response.data);
    };
    loadData();
  }, []);

  const fetchNews = async () => {
    const response = await get(`${API_URL}/news`);
    return response;
  };

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    const loadData = async () => {
      setRefreshing(true);
      const response = await fetchNews();
      setArticles(response.data);
      setRefreshing(false);
    };
    loadData();
  }, []);

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {articles.length > 0 &&
        articles.map((article, index) => (
          <ArticleItem key={article.id} article={article} />
        ))}
    </ScrollView>
  );
};
export default Articles;
