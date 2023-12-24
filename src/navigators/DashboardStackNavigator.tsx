import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Button from "../components/Button";
import { colors } from "../styles";
import React, { FC } from "react";
import { View } from 'react-native';
import HomeScreen from '../screens/dashboard/HomeScreen';

const DashboardStack = createNativeStackNavigator();


const EditProfileButton: FC<{ onPress: () => void }> = ({ onPress }) => {
    return (
        <View style={{ flexDirection: 'row', gap: 20 }}>
            <Button onPress={onPress} style={{ width: 30, height: 50, alignItems: 'center', justifyContent: 'center' }}>
                <MaterialCommunityIcons name="account-edit-outline" size={30} color={colors.lightest} />
            </Button>
        </View>
    )
}


const DashboardStackNavigator: FC<{ navigation: any }> = ({ navigation }) => {

    return (
        <DashboardStack.Navigator screenOptions={{
            headerStyle: { backgroundColor: colors.backPrimary },
            headerTitleStyle: { color: colors.lightest, fontWeight: 'normal', fontSize: 18 },
            headerTintColor: colors.lightest,
        }}>
            <DashboardStack.Screen name="DashboardMain" component={HomeScreen} options={{
                title: "Dashboard"
            }} />
        </DashboardStack.Navigator>
    )
}

export default DashboardStackNavigator;