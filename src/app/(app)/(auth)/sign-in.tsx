import { router } from 'expo-router'
import { Pressable, Text, View } from 'react-native'

export default function SignIn() {
    return (
        <View>
            <Text>SignIn</Text>
            <Pressable onPress={() => { router.push("/(app)/(auth)/sign-up") }}>
                <Text>go to Sign Up</Text>
            </Pressable>
        </View>
    )
}