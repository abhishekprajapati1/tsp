import React from 'react'
import { Text, View, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import useSoldItems from '../../lib/queries/useSoldItems';
import SoldItemCard from '../../components/sale/SoldItemCard';
import NoData from '../../components/NoData';

const SellScreen = () => {
    const insets = useSafeAreaInsets();
    const { data, isLoading, isError } = useSoldItems();

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