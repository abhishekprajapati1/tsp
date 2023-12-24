import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import NoData from '../../components/NoData';
import useStaffs from '../../lib/queries/useStaffs';
import UserCard from '../../components/teams/UserCard';
import LoadingIndicator from '../../components/LoadingIndicator';

const TeamScreen = () => {
    const { data, isLoading, isError, isFetching } = useStaffs();

    if (isLoading || isFetching) {
        return (
            <LoadingIndicator />
        )
    }

    if (isError) {
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
                                    <UserCard key={d.id} data={d} />
                                )
                            })
                        }
                    </ScrollView>
                )
            }

            {
                Array.isArray(data) && data.length < 1 && <NoData notFoundText='Create new team members.' />
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


export default TeamScreen;