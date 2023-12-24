import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from '../screens/account/AccountScreen';
import { MaterialCommunityIcons, AntDesign, Feather, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import SaleStackNavigator from './SaleStackNavigator';
import PurchaseStackNavigator from './PurchaseStackNavigator';
import useAuthStore from '../store/useAuthStore';
import AccountStackNavigator from './AccountStackNavigator';
import DashboardStackNavigator from './DashboardStackNavigator';
import { colors } from '../styles';
import TeamStackNavigator from './TeamStackNavigator';
import useUserDetails from '../lib/queries/useUserDetails';

const Tab = createBottomTabNavigator();

const dashboardRoles = ["manager", "admin"];
const teamsRoles = ["manager", "admin"];


const MainNavigator = () => {
    useUserDetails();
    const role = useAuthStore(store => store.role);


    return (
        <Tab.Navigator initialRouteName={role === "employee" ? "Sell" : 'Dashboard'} backBehavior='order' screenOptions={{
            tabBarShowLabel: false,
            headerStyle: {
                height: 100,
                shadowColor: "transparent",
                shadowOpacity: 0,
            },
            tabBarStyle: {
                height: 65
            },
            headerShown: false,
            tabBarActiveBackgroundColor: colors.backLighter,
            tabBarActiveTintColor: colors.backPrimary
        }}>

            <Tab.Screen
                name='Sell'
                component={SaleStackNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name='isv' color={color} size={23} />
                    )
                }}
            />


            <Tab.Screen
                name='Purchase'
                component={PurchaseStackNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name='shopping-bag' color={color} size={23} />
                    )
                }}
            />

            {
                dashboardRoles.includes(String(role)) && (
                    <Tab.Screen
                        name='Dashboard'
                        component={DashboardStackNavigator}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <AntDesign name='appstore-o' color={color} size={24} />
                            )
                        }}
                    />
                )
            }

            {
                teamsRoles.includes(String(role)) && (
                    <Tab.Screen
                        name='Team'
                        component={TeamStackNavigator}
                        options={{
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name='account-group-outline' color={color} size={31} />
                            )
                        }}
                    />
                )
            }


            <Tab.Screen
                name='Account'
                component={AccountStackNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name='user-o' color={color} size={21} />
                    ),
                }}
            />


        </Tab.Navigator>
    )
}

export default MainNavigator;