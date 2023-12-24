import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from '../screens/account/AccountScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SaleStackNavigator from './SaleStackNavigator';
import PurchaseStackNavigator from './PurchaseStackNavigator';
import useAuthStore from '../store/useAuthStore';
import AccountStackNavigator from './AccountStackNavigator';

const Tab = createBottomTabNavigator();

const StaffTabs = () => {

    return (
        <Tab.Navigator initialRouteName='Home' backBehavior='order'>
            <Tab.Screen
                name='Sell'
                component={SaleStackNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name='truck' color={color} size={size} />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name='Purchase'
                component={PurchaseStackNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name='shopping' color={color} size={size} />
                    ),
                    headerShown: false
                }}
            />

            <Tab.Screen
                name='Account'
                component={AccountStackNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name='account' color={color} size={size} />
                    ),
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    )
}

export default StaffTabs