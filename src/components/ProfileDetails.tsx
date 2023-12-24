import React, { FC } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import useUserDetails from '../lib/queries/useUserDetails';
import { colors, styles } from '../styles';
import useAuthStore from '../store/useAuthStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from './Button';

const ProfileDetails: FC<{ navigation: any }> = ({ navigation }) => {
    const setToken = useAuthStore(state => state.setToken);
    const { data } = useUserDetails();
    const { name, email, phone } = data || {}

    const logout = () => {
        AsyncStorage.removeItem("auth_token");
        setToken("");
    }


    return (
        <ScrollView contentContainerStyle={pdStyles.container}>
            <View style={pdStyles.detailContainer}>
                <Text style={pdStyles.detailTitle}>Full Name:</Text>
                <Text style={pdStyles.detailText}>{name}</Text>
            </View>
            <View style={pdStyles.detailContainer}>
                <Text style={pdStyles.detailTitle}>Email Id:</Text>
                <Text style={pdStyles.detailText}>{email}</Text>
            </View>

            {phone && (
                <View style={pdStyles.detailContainer}>
                    <Text style={pdStyles.detailTitle}>Phone Number:</Text>
                    <Text style={pdStyles.detailText}>+91 {phone}</Text>
                </View>
            )}

            <View style={{ flexDirection: 'row', gap: 10, marginTop: 40 }}>
                <Button title='Logout' onPress={logout} titleStyle={{ color: colors.lightest, width: '100%', textAlign: 'center', justifyContent: 'center' }} style={{ width: '40%', backgroundColor: colors.backPrimary, alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 5 }} />
                <Button title='Change Password' onPress={() => navigation.navigate("ChangePassword")} titleStyle={{ color: colors.backPrimary, width: '100%', textAlign: 'center', justifyContent: 'center' }} style={{ width: '60%', backgroundColor: colors.backLighter, alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 5 }} />
            </View>
        </ScrollView>
    )
}

const pdStyles = StyleSheet.create({
    container: {
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 30,
        gap: 20,
    },
    detailContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1
    },
    detailTitle: {
        fontWeight: 'bold',
        flex: 1,
        fontSize: 18
    },
    detailText: {
        fontSize: 18,
        color: colors.forePrimary
    }
})

export default ProfileDetails