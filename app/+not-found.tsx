import { Link } from 'expo-router'
import React from 'react'
import { Pressable, Text, View } from 'react-native'

export default function NotFound() {
    return (
        <View className='items-center justify-center h-[75vh]'>
            <Text className='font-bold text-4xl capitalize w-full text-center text-heading mb-6 font-rubik'>Page not found</Text>
            <Pressable>
                <Link href={'/'} className='py-4! px-8! text-xl! bg-primary/40! hover:bg-red-500! text-heading! rounded-2xl!'>Back To Home</Link>
            </Pressable>
        </View>
    )
}