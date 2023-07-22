import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Article from "../../pages/article";
import Tab from "../tab";
const Stack = createNativeStackNavigator();

const MainStacks = () => {
  return (
    <Stack.Navigator
      initialRouteName="Tab"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Tab" component={Tab} />
      <Stack.Screen name="Article" component={Article} />
    </Stack.Navigator>
  );
};

export default MainStacks;
