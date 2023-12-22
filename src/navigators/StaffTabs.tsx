import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from '../screens/AccountScreen';
import PurchaseScreen from '../screens/purchase/PurchaseScreen';
import SellScreen from '../screens/sale/SellScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SaleStackNavigator from './SaleStackNavigator';
import { colors } from '../styles';
import PurchaseStackNavigator from './PurchaseStackNavigator';

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
                component={AccountScreen}
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