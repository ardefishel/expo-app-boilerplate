import { Slot } from "expo-router";
import { HeroUINativeProvider } from "heroui-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
    return <GestureHandlerRootView style={{ flex: 1 }}>
        <HeroUINativeProvider config={{ devInfo: { stylingPrinciples: false } }}>
            <Slot />
        </HeroUINativeProvider>
    </GestureHandlerRootView>
}
