import React, { FC, useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Text, TextInput, View, ScrollView } from 'react-native'
import { styles } from '../styles';
import useLogin from '../lib/mutations/useLogin';
import SwitchInput from '../components/SwitchInput';
import Button from '../components/Button';

const LoginScreen: FC<{ navigation: any }> = ({ navigation }) => {
    const { mutate: login, error, isPending } = useLogin();
    const { control, handleSubmit, formState: { errors } } = useForm({ mode: "all" });

    const onSubmit = (data: any) => {
        if (data.role) {
            data.role = 'admin';
        } else {
            data.role = 'staff';
        }
        login(data);
    }


    return (
        <View style={styles.authContainer}>

            <Text style={{ marginTop: "10%", fontSize: 50, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>TSP</Text>

            <ScrollView style={styles.authForm}>

                <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginBottom: 50 }}>Login</Text>

                <View style={styles.inputGroup}>
                    <Text>Mobile no.:</Text>
                    <Controller
                        name='phone'
                        control={control}
                        defaultValue=""
                        render={({ field: { value, onChange } }) => (
                            <TextInput
                                value={value}
                                onChangeText={onChange}
                                style={{ ...styles.input, ...(errors.email && { borderColor: 'red' }) }}
                                placeholder='Mobile no. here...'
                                keyboardType="phone-pad"
                            />
                        )}
                        rules={{
                            required: {
                                value: true,
                                message: "Phone number is required."
                            },
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: "Invalid mobile number.",
                            },
                        }}
                    />
                    {errors.phone && <Text style={styles.errorText}>{errors.phone.message?.toString()}</Text>}
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
                                style={{ ...styles.input, ...(errors.password && { borderColor: 'red' }) }}
                                placeholder='Enter your password...'
                            />
                        )}
                        rules={{
                            required: {
                                value: true,
                                message: "Please create a password"
                            },
                            minLength: {
                                value: 8,
                                message: "Password must be at least 8 characters long"
                            },
                            maxLength: {
                                value: 20,
                                message: "Password length cannot exceed 20 characters"
                            },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
                                message: "Password must include at least one lowercase letter, one uppercase letter, one digit, and one special character from @, $, !, %, *, ?, &,."
                            }
                        }}
                    />
                    {errors.password && <Text style={styles.errorText}>{errors.password.message?.toString()}</Text>}
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

                <Button title='Login' onPress={handleSubmit(onSubmit)} disabled={isPending} />
            </ScrollView>
        </View>
    )
}


export default LoginScreen