import { Tabs, useSegments } from "expo-router";

export default function RootLayout() {
  const segments = useSegments()
  const showTabs = segments.length <= 3
  return <Tabs screenOptions={{
    tabBarStyle: {
      display: showTabs ? 'flex' : 'none'
    }
  }}>
    <Tabs.Screen name="home" />
    <Tabs.Screen name="page-1" />
    <Tabs.Screen name="page-2" />
    <Tabs.Screen name="account" />
  </Tabs>;
}
