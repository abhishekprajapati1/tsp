import React, { FC } from 'react';
import { View, Text, StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import useUserDetails from '../../lib/queries/useUserDetails';
import { colors, styles as gStyles } from '../../styles';
import ProfileDetails from '../../components/ProfileDetails';
import LoadingIndicator from '../../components/LoadingIndicator';

const AccountScreen: FC<{ navigation: any }> = ({ navigation }) => {
    const { data, isLoading } = useUserDetails();
    const { name, role } = data || {}
    const { title: roleTitle } = role || {}
    const isRequesting = isLoading;

    if (isRequesting) {
        return <LoadingIndicator />
    }

    return (
        <View style={{ gap: 10 }}>
            <View style={styles.container}>
                <View style={styles.profileContainer}>
                    <View style={styles.circle}>
                        <Text style={styles.circleText}>{name?.[0]}</Text>
                    </View>
                </View>

                <Text style={styles.userName}>{name}</Text>
                <View style={gStyles.badge}>
                    <Text style={gStyles.badgeText}>{roleTitle || role}</Text>
                </View>
            </View>

            <ProfileDetails navigation={navigation} />
        </View>
    );
};

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 40,
        backgroundColor: colors.backPrimary
    },
    profileContainer: {
        width: '100%', // Full width of the device
        height: screenHeight * 0.13, // Set to less than one-third of the device height
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: colors.foreLighter, // Gray circle color
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleText: {
        fontSize: 36,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: colors.backPrimary, // White text color
    },
    userName: {
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center',
        color: 'white',
    },

});

export default AccountScreen;
