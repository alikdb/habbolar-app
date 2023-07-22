import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#fff",
    height: 50,
    flexDirection: "row",
    marginHorizontal: 20,
    borderRadius: 10, 
  },
  inputContent: {
    width: "85%",
  },
  buttonContent: {
    width: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 50,
    color: "#C8C8C8",
    fontSize: 16,
    paddingHorizontal: 20,
  },
  button: {
    paddingRight: 20,
  },
});

export default styles;
