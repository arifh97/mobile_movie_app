import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { View, Text } from 'react-native'

const TabItem = ({ focused, icon, title }: any) => {
    return (
        <View className={`flex-row! items-center! gap-1.5! justify-center! rounded-full! overflow-hidden! h-14! mt-3! grow! ${focused ? 'bg-linear-90! to-primary from-secondary w-30!' : 'w-20! bg-transparent'}`}>
            <Ionicons name={icon} size={22} color={focused ? '#151312' : '#A8B5DB'} />
            {focused &&
                <Text className='text-sm font-dm font-semibold! capitalize!'>{title}</Text>
            }
        </View>
    )
}


export default function Layout() {
    const headerShown = false;
    const tabs_items = [
        {
            name: 'index',
            title: 'home',
            icon: 'home-outline',
        },
        {
            name: 'search',
            title: 'search',
            icon: 'search-outline',
        },
        {
            name: 'saved',
            title: 'saved',
            icon: 'bookmark-outline',
        },
        {
            name: 'profile',
            title: 'profile',
            icon: 'person-outline',
        },
    ]
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: 'white',
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "#0F0D23",
                    position: "absolute",
                    bottom: 16,
                    left: 0,
                    height: 48,
                    padding: 0,
                    marginHorizontal: 16,
                    marginBottom: 20,
                    borderRadius: 100,
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                tabBarItemStyle: {
                    justifyContent: 'center',
                    alignItems: 'center',
                }
            }}
        >
            {tabs_items.map((item, index) => (
                <Tabs.Screen
                    key={index}
                    name={item.name}
                    options={{
                        headerShown: headerShown,
                        title: item.title,
                        tabBarIcon: ({ focused }) => (
                            <TabItem
                                icon={item.icon}
                                title={item.title}
                                focused={focused}
                            />
                        ),
                    }}
                />
            ))}
            {/*             
            <Tabs.Screen
                name="search"
                options={{
                    title: "Search",
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons
                            name={focused ? 'search' : 'search-outline'}
                            size={size}
                            color={color}
                        />
                    ),
                    headerShown: headerShown,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons
                            name={focused ? 'person' : 'person-outline'}
                            size={size}
                            color={color}
                        />
                    ),
                    headerShown: headerShown
                }}
            />
            <Tabs.Screen
                name="saved"
                options={{
                    title: "Saved",
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons
                            name={focused ? 'bookmark' : 'bookmark-outline'}
                            size={size}
                            color={color}
                        />
                    ),
                    headerShown: headerShown
                }}
            /> */}
        </Tabs>
    )
}