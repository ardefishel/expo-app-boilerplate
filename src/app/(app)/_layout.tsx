import { Stack } from "expo-router";

function AppStack() {
    return <Stack>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="(auth)/sign-in" />
        <Stack.Screen name="(auth)/sign-up" />
        <Stack.Screen name="(modal)/action-sheet" options={{ presentation: "formSheet" }} />
    </Stack>;
}

export default function RootLayout() {
    return <>
        <AppStack />
    </>
}
