import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View } from 'react-native';
import "./global.css"
import Header from './compoents/header';

export default function App() {
    return (
        <>
            <View className='pt-14 flex-1 bg-amber-50'>
                <ScrollView>
                    <View className='px-4 py-6'>
                        <Slot />
                    </View>
                </ScrollView>
            </View>
            <Header />
            <StatusBar style="auto" />
        </>
    );
}