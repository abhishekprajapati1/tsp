import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {

    return (
        <BottomTabs />
    )
}

export default MainNavigator;