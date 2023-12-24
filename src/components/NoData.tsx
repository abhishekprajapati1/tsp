import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { colors } from '../styles';

export type NoDataProps = {
    notFoundText: string;
}

const NoData: React.FC<NoDataProps> = ({ notFoundText = "No data found." }) => {
    return (
        <View style={localStyles.container}>
            <Image
                source={require('../../assets/nothing-in-bag.jpg')}
                style={localStyles.image}
            />
            <Text style={localStyles.text}>No data found.</Text>
        </View>
    )
}

const localStyles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.lightest
    },
    image: {
        width: "100%",
        height: 400,
        resizeMode: 'cover', // or 'cover', 'stretch', etc. based on your requirement
    },
    text: {
        color: colors.backPrimary,
        fontSize: 20
    }
});

export default NoData