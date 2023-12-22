import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AccountScreen from '../screens/AccountScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SellScreen from '../screens/sale/SellScreen';
import PurchaseScreen from '../screens/purchase/PurchaseScreen';
import TeamScreen from '../screens/TeamScreen';
import { Text, View } from 'react-native';

const Tab = createBottomTabNavigator();

const ManagerTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerStyle: {
                    height: 100,
                },
                tabBarStyle: {
                    height: 65
                }
                // header: (props) => <Header {...props} />

            }}
        >
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
                name='Purchase'
                component={PurchaseScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name='shopping' color={color} size={size} />
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
                name='Team'
                component={TeamScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name='account-group' color={color} size={size} />
                    ),
                    headerTitle: "Team management",
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
        </Tab.Navigator >
    )
}

export default ManagerTabs