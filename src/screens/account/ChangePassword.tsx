import React, { FC } from 'react'
import { ScrollView, TextInput, View } from 'react-native'
import Button from '../../components/Button'
import { colors, styles } from '../../styles'
import { Text } from 'react-native'
import { Controller, useForm } from 'react-hook-form'
import { getPasswordRules, getConfirmPasswordRules } from '../../lib/formrules'
import useUpdatePassword from '../../lib/mutations/useUpdatePassword'

const ChangePassword: FC<{ navigation: any }> = ({ navigation }) => {
    const { mutate: changePassword, isPending } = useUpdatePassword({ redirectOnSuccess: () => navigation.navigate("Profile") });
    const { control, handleSubmit, formState: { errors }, watch } = useForm();

    const onSubmit = (data: any) => {
        changePassword(data);
    }


    return (
        <ScrollView contentContainerStyle={{ padding: 20, gap: 20 }}>
            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>Current password</Text>
                <Controller
                    name='current_password'
                    control={control}
                    rules={getPasswordRules(true)}
                    render={({ field: { value, onChange } }) => {
                        return (
                            <TextInput
                                value={value}
                                onChangeText={onChange}
                                style={{ ...styles.input, ...(errors.current_password && { borderColor: 'red' }) }}
                                secureTextEntry
                            />
                        )
                    }}
                />
            </View>

            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>New password</Text>
                <Controller
                    name='new_password'
                    control={control}
                    rules={getPasswordRules(true)}
                    render={({ field: { value, onChange } }) => {
                        return (
                            <TextInput
                                value={value}
                                onChangeText={onChange}
                                style={{ ...styles.input, ...(errors.new_password && { borderColor: 'red' }) }}
                                secureTextEntry
                            />
                        )
                    }}
                />
            </View>

            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>Re-enter new password</Text>
                <Controller
                    name='confirm_password'
                    control={control}
                    rules={getConfirmPasswordRules(true, watch, 'new_password')}
                    render={({ field: { value, onChange } }) => {
                        return (
                            <TextInput
                                value={value}
                                onChangeText={onChange}
                                style={{ ...styles.input, ...(errors.confirm_password && { borderColor: 'red' }) }}
                                secureTextEntry
                            />
                        )
                    }}
                />
            </View>

            <Button title='Update Password' disabled={isPending} onPress={handleSubmit(onSubmit)} />
        </ScrollView>
    )
}

export default ChangePassword;