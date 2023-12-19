import React, { FC } from 'react'
import { Text, View } from 'react-native'

const SoldItemCard: FC<{ data: any }> = ({ data }) => {
    return (
        <View>
            <Text>Card {data.id}</Text>
        </View>
    )
}

export default SoldItemCard