import { ReactNode } from 'react';
import { ScrollView, View } from 'react-native'

const MainView = ({ className, children }: { className?: string; children?: ReactNode }) => {
    return (
        <View className={`px-3 pt-12 pb-4 ${className}`}>
            <ScrollView>
                {children}
            </ScrollView>
        </View>
    )
}

export default MainView