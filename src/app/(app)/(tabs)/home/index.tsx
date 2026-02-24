import { router } from "expo-router";
import { Button } from "heroui-native";
import { Text, View } from "react-native";
export default function Index() {
  return (
    <View className="flex justify-center flex-1 items-center"
    >
      <Button onPress={() => { router.push("/(app)/(modal)/action-sheet") }}>
        <Text>Action Sheet</Text>
      </Button>
    </View>
  );
}
