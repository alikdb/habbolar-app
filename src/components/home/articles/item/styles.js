import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  article: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 25,
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: 600,
    color: "#000",
  },
  articleData: {
    flexDirection: "row",
    marginVertical: 5,
    justifyContent: "space-between",
  },
  articleAuthor: {
    fontWeight: 400,
  },
  articleCategory: {
    color: "#C8C8C8",
    fontStyle: "italic",
  },
  articleTime: {
    color: "#C8C8C8",
    fontStyle: "italic",
  },
  spacing: {
    width: "100%",
    height: 1,
    backgroundColor: "#C8C8C8",
    marginVertical: 5,
    borderRadius: 5,
  },
  articleRead: {
    width: "100%",
    height: 40,
    borderRadius: 10,
    backgroundColor: "#000",
    marginTop: 15,
  },
  articleReadTitle: {
    height: 40,
    lineHeight: 40,
    textAlign: "center",
    color: "#fff",
  },
});
export default styles;
