import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Button from "../components/Button";
import { colors } from "../styles";
import React, { FC } from "react";
import { View } from 'react-native';
import AccountScreen from '../screens/account/AccountScreen';
import EditProfile from '../screens/account/EditProfile';
import ChangePassword from '../screens/account/ChangePassword';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useAuthStore from '../store/useAuthStore';

const AccountStack = createNativeStackNavigator();


const RightHeader: FC<{ onPress: () => void }> = ({ onPress }) => {
    const setToken = useAuthStore(store => store.setToken);
    const logout = () => {
        AsyncStorage.removeItem("auth_token");
        setToken("");
    }

    return (
        <View style={{ flexDirection: 'row', gap: 20 }}>
            <Button onPress={() => logout()} style={{ width: 30, height: 50, alignItems: 'center', justifyContent: 'center' }}>
                <AntDesign name="logout" size={18} color={colors.lightest} />
            </Button>
        </View>
    )
}


const AccountStackNavigator: FC<{ navigation: any }> = ({ navigation }) => {

    const onAddClick = () => navigation.navigate("EditProfile");

    return (
        <AccountStack.Navigator screenOptions={{
            headerStyle: { backgroundColor: colors.backPrimary },
            headerTitleStyle: { color: colors.lightest, fontWeight: 'normal', fontSize: 18 },
            headerTintColor: colors.lightest
        }}>
            <AccountStack.Screen name="Profile" component={AccountScreen} options={{
                headerRight: () => <RightHeader onPress={onAddClick} />
            }} />

            <AccountStack.Screen name="EditProfile" component={EditProfile} options={{
                title: "Edit profile",
            }} />

            <AccountStack.Screen name="ChangePassword" component={ChangePassword} options={{
                title: "Change Password",
            }} />
        </AccountStack.Navigator>
    )
}

export default AccountStackNavigator;