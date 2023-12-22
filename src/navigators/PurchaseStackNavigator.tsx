import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PurchaseScreen from "../screens/purchase/PurchaseScreen";
import { FC } from "react";
import Button from "../components/Button";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../styles";
import CreatePurchase from "../screens/purchase/CreatePurchase";
import { View } from "react-native";
import usePurchasedItems from "../lib/queries/usePurchasedItems";


const PurchaseTab = createNativeStackNavigator();

const AddNewRecord: FC<{ onPress: () => void }> = ({ onPress }) => {
    const { refetch } = usePurchasedItems();

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


const PurchaseStackNavigator: FC<{ navigation: any }> = ({ navigation }) => {

    const onAddClick = () => navigation.navigate("CreatePurchase");

    return (
        <PurchaseTab.Navigator screenOptions={{
            headerStyle: { backgroundColor: colors.backPrimary },
            headerTitleStyle: { color: colors.lightest, fontWeight: 'normal', fontSize: 18 },
            headerTintColor: colors.lightest
        }}>
            <PurchaseTab.Screen name="Purchases" component={PurchaseScreen} options={{
                headerRight: () => <AddNewRecord onPress={onAddClick} />,
                title: "Purchased Items"
            }} />
            <PurchaseTab.Screen name="CreatePurchase" component={CreatePurchase} options={{
                title: "Add new purchased item"
            }} />
        </PurchaseTab.Navigator>
    )
}

export default PurchaseStackNavigator;