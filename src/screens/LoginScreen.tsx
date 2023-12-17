import React, { FC, useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native'
import { styles } from '../styles';
import useLogin from '../lib/mutations/useLogin';

const LoginScreen: FC<{ navigation: any }> = ({ navigation }) => {
    const { mutate: login, error }: { mutate: any, data: any, error: any } = useLogin();
    const { control, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        console.log("see this", data);
        data.role = "admin";
        login(data);
    }


    return (
        <View style={styles.authContainer}>

            <Text style={{ marginTop: "10%", fontSize: 50, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>TSP</Text>

            <ScrollView style={styles.authForm}>

                <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginBottom: 50 }}>Login</Text>

                <View style={styles.inputGroup}>
                    <Text>Email Id:</Text>
                    <Controller
                        name='email'
                        control={control}
                        render={({ field: { value, onChange } }) => (
                            <TextInput
                                value={value}
                                onChangeText={onChange}
                                style={styles.input}
                                placeholder='Enter your email id here...'
                            />
                        )}
                    />
                </View>


                <View style={styles.inputGroup}>
                    <Text>Password:</Text>
                    <Controller
                        name='password'
                        control={control}
                        render={({ field: { value, onChange } }) => (
                            <TextInput
                                value={value}
                                onChangeText={onChange}
                                secureTextEntry
                                style={styles.input}
                                placeholder='Enter your password...'
                            />
                        )}
                    />
                </View>

                <TouchableOpacity
                    onPress={handleSubmit(onSubmit)}
                    style={styles.primaryBtn}
                >
                    <Text style={styles.primaryBtnText}>
                        Login
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}


export default LoginScreen