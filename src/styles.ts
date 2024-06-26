import { StyleSheet } from "react-native";

export const colors = {
    backPrimary: "#ba2171",
    backLighter: '#ffdbed',

    forePrimary: "#b8b8b8",
    foreSecondary: "#dedede",
    foreLighter: '#faf8f7',

    lightest: '#fff',
}

export const styles = StyleSheet.create({
    primaryBtn: {
        height: 50,
        backgroundColor: colors.backPrimary,
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 10,
    },
    primaryBtnText: {
        color: 'white',
        fontWeight: "bold",
        width: '100%',
        textAlign: 'center'
    },
    authContainer: {
        backgroundColor: colors.backPrimary,
        height: "100%",
    },
    authForm: {
        flexGrow: 1,
        backgroundColor: "#fff",
        padding: 50,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        display: 'flex',
        flexDirection: 'column',
        gap: 20
    },
    inputGroup: {
        display: 'flex',
        flexDirection: "column",
    },
    inputLabel: {
        color: colors.forePrimary,
    },
    input: {
        height: 50,
        padding: 10,
        borderWidth: 1,
        borderColor: colors.forePrimary,
        borderRadius: 10,
        marginTop: 10
    },
    loginSwitch: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        marginBottom: 10
    },
    switchText: {
        width: 100
    },
    badge: {
        backgroundColor: colors.backLighter, // Customize the badge color
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 20,
        fontSize: 12,
        borderColor: colors.forePrimary
    },
    badgeText: {
        color: colors.backPrimary,
        textTransform: "capitalize"
    },
    headerContainer: {
        padding: 20,
        height: 70,
        flexDirection: 'row',
        backgroundColor: colors.backPrimary,
        alignItems: 'center',
        justifyContent: "space-between",
    },
    headerTitle: {
        color: colors.lightest,
        fontWeight: 'bold',
        fontSize: 18
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginBottom: 10,
    },
    brandNameContainer: {
        height: 270,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    brandName: {
        fontSize: 40,
        width: '100%',
        fontWeight: 'bold',
        color: 'white'
    }
})