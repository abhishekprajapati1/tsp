import React from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import useSoldItems from '../lib/queries/useSoldItems';
import SoldItemCard from '../components/sale/SoldItemCard';
import NoData from '../components/NoData';
import { colors, styles } from '../styles';
import Button from '../components/Button';
import { FontAwesome } from '@expo/vector-icons';
import useSaleStore from '../store/useSaleStore';
import SaleForm from '../components/sale/SaleForm';

const SellScreen = () => {
    const insets = useSafeAreaInsets();
    const { isForm, setForm } = useSaleStore(state => state);
    const { data } = useSoldItems();

    console.log(data);


    return (
        <SafeAreaView style={{ ...insets }}>

            {
                !isForm && (
                    <>
                        <View style={styles.headerContainer}>
                            <Text style={styles.headerTitle}>Sales</Text>
                            <Button style={localStyles.addBtn} onPress={() => setForm(true)}>
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

                    </>
                )
            }

            {
                isForm && (
                    <SaleForm />
                )
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


export default SellScreen