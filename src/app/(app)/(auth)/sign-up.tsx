import { router } from 'expo-router'
import { Pressable, Text, View } from 'react-native'

export default function SignUp() {
    return (
        <View>
            <Text>SignUp</Text>
            <Pressable onPress={() => { router.push("/(app)/(auth)/sign-in") }}>
                <Text>go to Sign In</Text>
            </Pressable>
        </View>
    )
}