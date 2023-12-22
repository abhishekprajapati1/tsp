import React, { FC, useEffect, useState } from 'react'
import { ScrollView, TextInput, View } from 'react-native'
import Button from '../../components/Button'
import useSaleStore from '../../store/useSaleStore'
import { colors, styles } from '../../styles'
import { Text } from 'react-native'
import { Controller, useForm } from 'react-hook-form'
import Picker from 'react-native-picker-select'
import useCreatePurchaseRecord from '../../lib/mutations/useCreatePurchaseRecord'

const CreatePurchase: FC<{ navigation: any }> = ({ navigation }) => {
    const { mutate: createPurchaseRecord, isPending } = useCreatePurchaseRecord({ redirectOnSuccess: () => navigation.navigate("Purchases") });
    const { control, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        delete data.payment_mode;
        createPurchaseRecord(data);
    }


    return (
        <ScrollView contentContainerStyle={{ padding: 20, gap: 20 }}>
            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>Item name :</Text>
                <Controller
                    name='name'
                    control={control}
                    render={({ field: { value, onChange } }) => {
                        return (
                            <TextInput
                                value={value}
                                onChangeText={onChange}
                                style={styles.input}
                                placeholder='Enter name here...'
                            />
                        )
                    }}
                />
            </View>

            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>Amount :</Text>
                <Controller
                    name='amount'
                    control={control}
                    render={({ field: { value, onChange } }) => {
                        return (
                            <TextInput
                                value={value}
                                onChangeText={onChange}
                                style={styles.input}
                                placeholder='How much you bought'
                            />
                        )
                    }}
                />
            </View>

            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>Price Paid</Text>
                <Controller
                    name='price'
                    control={control}
                    render={({ field: { value, onChange } }) => {
                        return (
                            <TextInput
                                value={value}
                                onChangeText={onChange}
                                keyboardType='numeric'
                                style={styles.input}
                                placeholder='Enter name here...'
                            />
                        )
                    }}
                />
            </View>


            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>Payment Method</Text>
                <Controller
                    name='payment_mode'
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: "Please select payment method."
                        }
                    }}
                    render={({ field: { value, onChange } }) => {
                        return (
                            <Picker
                                onValueChange={onChange}
                                useNativeAndroidPickerStyle={false}
                                items={[
                                    { value: "cash", label: "Cash In Hand" },
                                    { value: "online", label: "Online (UPI/NETBANKING/E-WALLET)" },
                                ]}
                                style={{
                                    inputAndroid: {
                                        fontSize: 16,
                                        paddingHorizontal: 10,
                                        paddingVertical: 10,
                                        borderWidth: 1,
                                        borderColor: errors.payment_mode ? 'red' : colors.forePrimary,
                                        borderRadius: 8,
                                        color: colors.forePrimary,
                                        paddingRight: 30 // to ensure the text is never behind the icon
                                    },
                                }}
                            />
                        )
                    }}
                />
            </View>

            <Button title='Add Purchase Record' disabled={isPending} onPress={handleSubmit(onSubmit)} />
        </ScrollView>
    )
}

export default CreatePurchase;