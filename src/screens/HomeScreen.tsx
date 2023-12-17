import React, { FC } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import useUserDetails from '../lib/queries/useUserDetails';


const HomeScreen: FC<{ navigation: any }> = ({ navigation }) => {
    useUserDetails();
    const todaySell = 0;
    const todayPurchase = 0;

    return (
        <View>
            {/* Today's Sell Card */}
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.cardValue}>{todaySell}</Text>
                    <Text style={styles.cardTitle}>Today's Sell</Text>
                </View>

                {/* Today's Purchase Card */}
                <View style={styles.card}>
                    <Text style={styles.cardValue}>{todayPurchase}</Text>
                    <Text style={styles.cardTitle}>Today's Purchase</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', // Align cards horizontally
        justifyContent: 'space-around', // Add space between cards
        alignItems: 'stretch',
    },
    card: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 20,
        margin: 8,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3, // for Android shadow
        shadowOffset: { width: 0, height: 2 }, // for iOS shadow
        shadowOpacity: 0.2, // for iOS shadow
    },
    cardTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        width: "100%",
        textAlign: 'center'
    },
    cardValue: {
        fontSize: 24,
        marginBottom: 8,
        fontWeight: 'bold',
        color: '#007bff', // or any color you prefer
    },
});

export default HomeScreen