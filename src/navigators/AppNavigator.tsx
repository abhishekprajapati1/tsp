import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect } from 'react'
import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';
import useAuthStore from '../store/useAuthStore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppNavigator = () => {
    const token = useAuthStore(state => state.token);
    const setToken = useAuthStore(state => state.setToken);
    const isAuthenticated = Boolean(token);

    const getToken = async () => {
        const token = await AsyncStorage.getItem("auth_token");
        if (typeof token === 'string') {
            setToken(token);
        }
    }

    useEffect(() => {
        getToken();
    }, []);

    return (
        <NavigationContainer>
            {
                isAuthenticated && <MainNavigator />
            }

            {
                !isAuthenticated && <AuthNavigator />
            }
        </NavigationContainer>
    )
}

export default AppNavigator