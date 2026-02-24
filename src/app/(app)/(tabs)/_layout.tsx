import { Icon } from "@/components/ui/ion-icon";
import { TabNavigationItems } from "@/config/tabs";
import { Tabs, useSegments } from "expo-router";
import { useThemeColor } from "heroui-native";


export default function RootLayout() {
  const segments = useSegments()
  const showTabs = segments.length <= 3

  return <Tabs screenOptions={{
    tabBarStyle: {
      display: showTabs ? 'flex' : 'none'
    },
    headerShown: false,
    tabBarActiveTintColor: useThemeColor("accent"),
  }}>
    {TabNavigationItems.map((item) => (
      <Tabs.Screen name={item.name} options={({ route, navigation }) => ({
        tabBarIcon: ({ size, color }) => (<Icon name={item.icon} size={size} color={color} />),
        title: item.title,
      })} />
    ))}
  </Tabs>;
}
