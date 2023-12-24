import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../styles';

export type UserCard = {
    data: {
        name: string;
        id: string;
        role: {
            title: string;
        };
        phone: string;
        status: string;
        created_at: string;
    }
}

const UserCard: React.FC<UserCard> = ({ data }) => {

    return (
        <View style={localStyles.container}>
            <Text>{data.name}</Text>
        </View>
    )
}

const localStyles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightest,
        height: 150,
        padding: 20,
        borderRadius: 6,
        justifyContent: 'space-between',
        gap: 5,
        elevation: 3, // for Android shadow
        shadowOffset: { width: 0, height: 2 }, // for iOS shadow
        shadowOpacity: 0.2, // for iOS shadow
    }
})

export default UserCard;