import { Link } from 'expo-router'
import React from 'react'
import { View } from 'react-native'

type Props = {
    className?: string;
}

export default function Header({ className }: Props) {
    const links = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'About',
            path: '/about'
        },
        {
            name: 'Contact',
            path: '/contacts'
        },
    ]
    return (
        <View className={`flex-row pt-4 px-6 pb-9 bg-amber-100 border-t border-solid border-amber-100 items-center justify-between gap-4 ${className}`}>
            {links.map((item, index) => (
                <Link href={item.path} className='py-3! px-6! rounded-2xl! text-lg! font-medium! bg-white! block! text-center!' key={index}>{item.name}</Link>
            ))}
        </View>
    )
}