import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import SoldItemCard from '../../components/sale/SoldItemCard';
import NoData from '../../components/NoData';
import usePurchasedItems from '../../lib/queries/usePurchasedItems';
import PurchasedItem from '../../components/purchase/PurchasedItem';

const PurchaseScreen = () => {
    const { data, isLoading, isError } = usePurchasedItems();

    if (isLoading) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }

    if (isError || !data) {
        return (
            <View>
                <Text>Error...</Text>
            </View>
        )
    }


    return (
        <View>
            {
                Array.isArray(data) && data.length > 0 && (
                    <ScrollView contentContainerStyle={{ padding: 15, gap: 10 }}>
                        {
                            data.map(d => {
                                return (
                                    <PurchasedItem key={d.id} data={d} />
                                )
                            })
                        }
                    </ScrollView>
                )
            }

            {
                Array.isArray(data) && data.length < 1 && <NoData />
            }

        </View>
    )
}

const localStyles = StyleSheet.create({
    addBtn: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    }
});


export default PurchaseScreen