import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar';
import "./global.css"

export default function MainLayout() {
    return (
        <>
            <Stack>
                <Stack.Screen
                    name='(tabs)'
                    options={{ headerShown: false }}
                />
            </Stack>
            <StatusBar style="auto" />
        </>
    );
}