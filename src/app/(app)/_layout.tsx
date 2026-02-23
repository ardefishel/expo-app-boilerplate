import "@/globals.css";
import { Stack } from "expo-router";
import { HeroUINativeProvider } from "heroui-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

function AppStack() {
    return <Stack>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="(auth)/sign-in" />
        <Stack.Screen name="(auth)/sign-up" />
        <Stack.Screen name="(modal)/action-sheet" options={{ presentation: "formSheet" }} />
    </Stack>;
}

export default function RootLayout() {
    return <GestureHandlerRootView style={{ flex: 1 }}>
        <HeroUINativeProvider>
            <AppStack />
        </HeroUINativeProvider>
    </GestureHandlerRootView>
}
