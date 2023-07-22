import { StyleSheet, View } from "react-native";
import SearchBar from "../../components/home/searchbar";
import Categories from "../../components/home/categories";
import Articles from "../../components/home/articles";
const Home = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <Categories />
      <Articles />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
  },
});
export default Home;
