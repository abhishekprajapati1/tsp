import React from 'react'
import { Text, View, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import useSoldItems from '../lib/queries/useSoldItems';
import SoldItemCard from '../components/sale/SoldItemCard';
import NoData from '../components/NoData';
import { colors, styles } from '../styles';
import Button from '../components/Button';
import { FontAwesome } from '@expo/vector-icons';
import useSaleStore from '../store/useSaleStore';

const TeamScreen = () => {
    const insets = useSafeAreaInsets();
    const { isForm, setForm } = useSaleStore(state => state);
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
        <SafeAreaView style={{ ...insets }}>

            <View style={{ flexDirection: 'column', height: '100%' }}>
                {
                    !isForm && (
                        <>
                            <View style={styles.headerContainer}>
                                <Text style={styles.headerTitle}>Sales</Text>
                                <Button style={localStyles.addBtn} onPress={() => setForm(true)}>
                                    <FontAwesome name="plus" size={20} color={colors.lightest} />
                                </Button>
                            </View>

                            {
                                Array.isArray(data) && data.length > 0 && (
                                    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 15, gap: 10 }}>
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

                        </>
                    )
                }
            </View>

        </SafeAreaView>
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


export default TeamScreen;