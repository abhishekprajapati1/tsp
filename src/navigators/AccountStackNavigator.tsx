import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Button from "../components/Button";
import { colors } from "../styles";
import React, { FC } from "react";
import CreateSale from "../screens/sale/CreateSale";
import { View } from 'react-native';
import AccountScreen from '../screens/account/AccountScreen';
import EditProfile from '../screens/account/EditProfile';
import ChangePassword from '../screens/account/ChangePassword';

const AccountStack = createNativeStackNavigator();


const EditProfileButton: FC<{ onPress: () => void }> = ({ onPress }) => {
    return (
        <View style={{ flexDirection: 'row', gap: 20 }}>
            <Button onPress={onPress} style={{ width: 30, height: 50, alignItems: 'center', justifyContent: 'center' }}>
                <MaterialCommunityIcons name="account-edit-outline" size={30} color={colors.lightest} />
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
                headerRight: () => <EditProfileButton onPress={onAddClick} />
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