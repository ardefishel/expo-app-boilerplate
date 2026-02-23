import { router } from "expo-router";
import { Button } from "heroui-native";
import { Text } from "react-native";
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
      <Button onPress={() => { router.push("/(app)/(modal)/action-sheet") }}>
        <Text>Action Sheet</Text>
      </Button>
    </SafeAreaView>
  );
}
