import { SafeAreaView } from "@/components/ui/safe-area-view";
import { router } from "expo-router";
import { Button } from "heroui-native";
import { Text } from "react-native";
export default function Index() {
  return (
    <SafeAreaView className="flex justify-center flex-1 items-center"
    >
      <Button onPress={() => { router.push("/(app)/(modal)/action-sheet") }}>
        <Text>Action Sheet</Text>
      </Button>
    </SafeAreaView>
  );
}
