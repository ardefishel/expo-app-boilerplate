import "@/globals.css";
import { Stack } from "expo-router";

export default function AppStack() {
    return <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="(auth)/sign-in" />
        <Stack.Screen name="(auth)/sign-up" />
        <Stack.Screen name="(auth)/forgot-password" />
        <Stack.Screen name="(modal)/action-sheet" options={{ presentation: "formSheet" }} />
    </Stack>;
}