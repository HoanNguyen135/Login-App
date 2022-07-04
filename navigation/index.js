import { Ionicons } from "@expo/vector-icons";
import HomeStackScreen from "./Home";
import SettingStackScreen from "./Setting";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Auth from "./Auth";
import { useSelector } from "react-redux";
import { COLORS } from "../contains";

const Tab = createBottomTabNavigator();

function Navigation() {
  const isLoggedIn = useSelector((state) => state.Login.dataLogin[0].isLoggedIn);


  return (isLoggedIn) ? (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "HomeScreen") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "SettingScreen") {
            iconName = focused ? "settings" : "settings-outline";
          }

          return <Ionicons name={iconName} size={24} color="black" />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.header,
          height: 65,
          paddingBottom: 10,
        },
        tabBarLabelStyle: {
          fontSize: 13,
          color: COLORS.colorText,
        },
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeStackScreen} />
      <Tab.Screen name="SettingScreen" component={SettingStackScreen} />
    </Tab.Navigator>
  ) : (
    <Auth />
  );
}

export default Navigation;
