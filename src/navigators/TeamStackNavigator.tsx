import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Button from "../components/Button";
import { colors } from "../styles";
import React, { FC } from "react";
import { View } from 'react-native';
import TeamScreen from '../screens/team/TeamScreen';
import useStaffs from '../lib/queries/useStaffs';

const TeamStack = createNativeStackNavigator();


const RightHeaders: FC<{ onPress: () => void }> = ({ onPress }) => {
    const { refetch } = useStaffs();

    return (
        <View style={{ flexDirection: 'row', gap: 20 }}>
            <Button onPress={() => refetch()} style={{ width: 30, height: 50, alignItems: 'center', justifyContent: 'center' }}>
                <Ionicons name="refresh-outline" size={24} color={colors.lightest} />
            </Button>
            <Button onPress={onPress} style={{ width: 30, height: 50, alignItems: 'center', justifyContent: 'center' }}>
                <Ionicons name="add" size={30} color={colors.lightest} />
            </Button>
        </View>
    )
}


const TeamStackNavigator: FC<{ navigation: any }> = ({ navigation }) => {
    const onAddClick = () => alert("This feature will be added soon.");
    return (
        <TeamStack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: colors.backPrimary },
                headerTitleStyle: { color: colors.lightest, fontWeight: 'normal', fontSize: 18 },
                headerTintColor: colors.lightest,
            }}
        >
            <TeamStack.Screen
                name="TeamMainPage"
                component={TeamScreen}
                options={{
                    headerRight: () => <RightHeaders onPress={onAddClick} />,
                    title: "Teams"
                }}
            />
        </TeamStack.Navigator>
    )
}

export default TeamStackNavigator;