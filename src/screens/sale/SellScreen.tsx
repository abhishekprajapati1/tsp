import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import useSoldItems from '../../lib/queries/useSoldItems';
import SoldItemCard from '../../components/sale/SoldItemCard';
import NoData from '../../components/NoData';
import LoadingIndicator from '../../components/LoadingIndicator';

const SellScreen = () => {
    const { data, isLoading, isError, isFetching } = useSoldItems();

    if (isLoading || isFetching) {
        return (
            <LoadingIndicator />
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
                                    <SoldItemCard key={d.id} data={d} />
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


export default SellScreen