import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../pages/home";
import { Home as HomeIcon } from "lucide-react-native";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="TabHome"
        options={{
          tabBarStyle: {
            position: "absolute",
            bottom: 25,
            left: 45,
            right: 45,
            borderRadius: 15,
            height: 70,
            elevation: 0,
          },

          tabBarLabelStyle: {
            display: "none",
          },
          tabBarActiveTintColor: "#000",
          tabBarIcon: ({ color, size }) => (
            <HomeIcon stroke={color} size={size} />
          ),
        }}
        component={Home}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
