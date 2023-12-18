import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../styles';

const NoData = () => {
    return (
        <View style={localStyles.container}>
            <Text>No data found.</Text>
        </View>
    )
}

const localStyles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default NoData