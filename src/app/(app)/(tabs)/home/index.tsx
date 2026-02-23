import { router } from "expo-router";
import { Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Pressable className="bg-red-200 dark:bg-green-400" onPress={() => { router.push("/(app)/(modal)/action-sheet") }}>
        <Text>Action Sheet</Text>
      </Pressable>
    </SafeAreaView>
  );
}
