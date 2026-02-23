import { router } from 'expo-router'
import React from 'react'
import { Pressable, Text, View } from 'react-native'

export default function Page1Screen() {
    return (
        <View>
            <Text>Page1Screen</Text>
            <Pressable onPress={() => { router.push("/(app)/(tabs)/page-1/detail") }}>
                <Text>go to detail page</Text>
            </Pressable>
        </View>
    )
}