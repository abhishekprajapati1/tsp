import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export type NoDataProps = {
    notFoundText: string;
}

const NoData: React.FC<NoDataProps> = ({ notFoundText = "No data found." }) => {
    return (
        <View style={localStyles.container}>
            <Image
                source={require('../../assets/no-data.png')}
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
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: 'cover', // or 'cover', 'stretch', etc. based on your requirement
    },
    text: {
        position: 'absolute'
    }
});

export default NoData