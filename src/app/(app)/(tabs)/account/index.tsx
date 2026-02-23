import { router } from 'expo-router'
import React from 'react'
import { Pressable, Text, View } from 'react-native'

export default function AccountScreen() {
    return (
        <View>
            <Text>AccountScreen</Text>
            <Pressable onPress={() => { router.push("/(app)/(auth)/sign-in") }}>
                <Text>go to Sign In</Text>
            </Pressable>
        </View>
    )
}