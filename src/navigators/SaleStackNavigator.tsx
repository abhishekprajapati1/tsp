import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SellScreen from "../screens/sale/SellScreen";
import Button from "../components/Button";
import { colors } from "../styles";
import { FC } from "react";
import CreateSale from "../screens/sale/CreateSale";
import { View } from 'react-native';
import useSoldItems from '../lib/queries/useSoldItems';

const SaleStack = createNativeStackNavigator();


const AddNewRecord: FC<{ onPress: () => void }> = ({ onPress }) => {
    const { refetch } = useSoldItems()

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


const SaleStackNavigator: FC<{ navigation: any }> = ({ navigation }) => {

    const onAddClick = () => navigation.navigate("CreateSale");

    return (
        <SaleStack.Navigator screenOptions={{
            headerStyle: { backgroundColor: colors.backPrimary },
            headerTitleStyle: { color: colors.lightest, fontWeight: 'normal', fontSize: 18 },
            headerTintColor: colors.lightest
        }}>
            <SaleStack.Screen name="Sales" component={SellScreen} options={{
                headerRight: () => <AddNewRecord onPress={onAddClick} />
            }} />

            <SaleStack.Screen name="CreateSale" component={CreateSale} options={{
                title: "Add new sale record",
            }} />
        </SaleStack.Navigator>
    )
}

export default SaleStackNavigator;