import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { colors } from '../styles';

const LoadingIndicator = () => {
    return (
        <View style={[localStyles.container, localStyles.horizontal]}>
            <ActivityIndicator size="large" color={colors.backPrimary} />
        </View>
    )
}

const localStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
});

export default LoadingIndicator