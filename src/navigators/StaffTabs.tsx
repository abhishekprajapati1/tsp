import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AccountScreen from '../screens/AccountScreen';
import PurchaseScreen from '../screens/PurchaseScreen';
import SellScreen from '../screens/SellScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import useAuthStore from '../store/useAuthStore';
import ManageScreen from '../screens/ManageScreen';

const Tab = createBottomTabNavigator();

const homeOwners = ["manager", "admin"];

const StaffTabs = () => {


    return (
        <Tab.Navigator initialRouteName='Home' backBehavior='order'>
            <Tab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name='home' color={color} size={size} />
                    ),
                }}
            />


            <Tab.Screen
                name='Sell'
                component={SellScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name='truck' color={color} size={size} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name='Purchase'
                component={PurchaseScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name='shopping' color={color} size={size} />
                    ),
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