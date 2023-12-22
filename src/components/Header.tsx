import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs'
import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../styles'

const Header: FC<BottomTabHeaderProps> = ({ navigation, options }) => {
    const Title = options.headerTitle?.toString();

    return (
        <View style={localStyles.container}>
            <Text style={localStyles.titleText}>Abhishek</Text>
        </View>
    )
}

const localStyles = StyleSheet.create({
    container: {
        height: 100,
        backgroundColor: colors.backPrimary
    },
    titleText: {
        color: colors.lightest
    }
})

export default Header