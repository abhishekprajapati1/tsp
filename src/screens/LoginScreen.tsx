import React, { FC, useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Text, TextInput, Switch, TouchableOpacity, View, ScrollView } from 'react-native'
import { styles } from '../styles';
import useLogin from '../lib/mutations/useLogin';
import SwitchInput from '../components/SwitchInput';

const LoginScreen: FC<{ navigation: any }> = ({ navigation }) => {
    const { mutate: login, error }: { mutate: any, data: any, error: any } = useLogin();
    const { control, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        if (data.role) {
            data.role = 'admin';
        } else {
            data.role = 'staff'
        }
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
                        defaultValue=""
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
                        defaultValue=""
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

                <Controller
                    name="role"
                    control={control}
                    defaultValue={false}
                    render={({ field: { value, onChange } }) => (
                        <SwitchInput
                            value={value}
                            onChange={onChange}
                        />
                    )}
                />


                {
                    Boolean(error) && (
                        <View style={{ marginBottom: 20 }}>
                            <Text style={{ color: 'red' }}>{error?.response?.data?.message}</Text>
                        </View>
                    )
                }

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