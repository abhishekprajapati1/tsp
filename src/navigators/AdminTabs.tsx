import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AccountScreen from '../screens/AccountScreen';
import { MaterialCommunityIcons, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import ManageScreen from '../screens/ManageScreen';
import { View } from 'react-native';
import { colors } from '../styles';
import Header from '../components/Header';

const Tab = createBottomTabNavigator();


const AdminTabs = () => {

    return (
        <Tab.Navigator backBehavior='history' screenOptions={{
            tabBarShowLabel: false,
            headerStyle: {
                height: 100,
            },
            tabBarStyle: {
                height: 65
            }
            // header: (props) => <Header {...props} />

        }}>
            <Tab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="dashboard" size={30} color={color} />
                    ),
                    headerTitle: "Dashboard",
                }}
            />
            <Tab.Screen
                name='Roles'
                component={ManageScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="user-tie" size={24} color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name='Permissions'
                component={ManageScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="user-shield" size={24} color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name='Items'
                component={ManageScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="hamburger" size={25} color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name='Account'
                component={AccountScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name='account' color={color} size={32} />
                    ),
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    )

}

export default AdminTabs