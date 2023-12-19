import React from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import useSoldItems from '../lib/queries/useSoldItems';
import SoldItemCard from '../components/sale/SoldItemCard';
import NoData from '../components/NoData';
import { colors, styles } from '../styles';
import Button from '../components/Button';
import { FontAwesome } from '@expo/vector-icons';

const ManageScreen = () => {
    const insets = useSafeAreaInsets();
    const { data } = useSoldItems();

    console.log(data);


    return (
        <SafeAreaView style={{ ...insets }}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Sales</Text>
                <Button style={localStyles.addBtn}>
                    <FontAwesome name="plus" size={24} color={colors.lightest} />
                </Button>
            </View>


            {
                Array.isArray(data) && data.length > 0 && data.map(d => (
                    <SoldItemCard key={d.id} data={d} />
                ))
            }

            {
                Array.isArray(data) && data.length < 1 && <NoData />
            }
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


export default ManageScreen