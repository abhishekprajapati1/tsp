import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    primaryBtn: {
        height: 50,
        backgroundColor: "#6a00ff",
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 10,
    },
    primaryBtnText: {
        color: 'white',
        fontWeight: "bold",
        width: 40
    },
    authContainer: {
        backgroundColor: "#6a00ff",
        height: "100%",
        position: "relative",
    },
    authForm: {
        backgroundColor: "#fff",
        padding: 50,
        height: "70%",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        display: 'flex',
        flexDirection: 'column',
        gap: 20
    },
    inputGroup: {
        display: 'flex',
        flexDirection: "column",
        gap: 10,
    },
    inputLabel: {
        color: "green"
    },
    input: {
        height: 50,
        padding: 10,
        borderWidth: 1,
        borderColor: '#b8b8b8',
        borderRadius: 10,
        marginBottom: 10,
    },
})