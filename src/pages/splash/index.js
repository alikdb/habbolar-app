import { Text, View } from "react-native";
const Splash = ({ navigation }) => {
  const goTabs = () => {
    console.log(navigation);
    navigation.navigate("Tab");
  };

  setTimeout(() => {
    goTabs();
  }, 3000);

  return (
    <View>
      <Text>Splash Screen</Text>
    </View>
  );
};

export default Splash;
