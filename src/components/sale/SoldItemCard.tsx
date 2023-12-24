import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../styles'
import { Feather } from '@expo/vector-icons';
import dayjs from 'dayjs'
import Button from '../Button';

const SoldItemCard: FC<{ data: any }> = ({ data }) => {

    return (
        <View style={localStyles.container}>
            <View style={localStyles.flexBetween}>
                <Text style={localStyles.itemName}>{data.item.name}</Text>
                <Button disabled style={{ width: 25, height: 25, alignItems: 'center', justifyContent: 'center' }}>
                    <Feather name="edit-3" size={15} color={colors.forePrimary} />
                </Button>
            </View>
            <View style={{ gap: 5 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                    <Text style={{ color: colors.forePrimary }}>Payment Method :</Text>
                    <Text style={{ color: 'lime' }}>{data.payment_mode}</Text>
                </View>
                <View style={localStyles.flexBetween}>
                    <Text style={{ color: colors.forePrimary }}>{dayjs().format("YYYY-MM-DD") === dayjs(data.date).format("YYYY-MM-DD") ? "Today     " + dayjs(data.date).format("hh:mm a") : dayjs(data.date).format("MMM DD, YYYY        hh:mm a")}</Text>
                    <Text style={{ color: colors.backPrimary, fontWeight: 'bold', fontSize: 16, flexGrow: 1, textAlign: 'right' }}>Rs. {data.total_price}</Text>
                </View>
            </View>
        </View>
    )
}

const localStyles = StyleSheet.create({
    flexBetween: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    itemName: {
        fontSize: 18,
        color: 'gray',
        textTransform: 'capitalize',
        fontWeight: 'bold',
        flexGrow: 1,
    },
    container: {
        backgroundColor: colors.lightest,
        height: 110,
        padding: 10,
        borderRadius: 6,
        justifyContent: 'space-between',
        gap: 5,
        elevation: 3, // for Android shadow
        shadowOffset: { width: 0, height: 2 }, // for iOS shadow
        shadowOpacity: 0.2, // for iOS shadow
    }
})

export default SoldItemCard