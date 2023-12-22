import React, { FC, useEffect, useState } from 'react'
import { ScrollView, TextInput, View } from 'react-native'
import Button from '../../components/Button'
import useSaleStore from '../../store/useSaleStore'
import { colors, styles } from '../../styles'
import { Text } from 'react-native'
import { Controller, useForm } from 'react-hook-form'
import Picker from 'react-native-picker-select'
import useItems from '../../lib/queries/useItems'
import useCreateSaleRecord from '../../lib/mutations/useCreateSaleRecord'

const CreateSale: FC<{ navigation: any }> = ({ navigation }) => {
    const [total, setTotal] = useState(0);
    const setForm = useSaleStore(state => state.setForm);
    const { data: items, isLoading, isError } = useItems();
    const { mutate: createSaleRecord } = useCreateSaleRecord({ redirectOnSuccess: () => navigation.navigate("Sales") });
    const { control, handleSubmit, formState: { errors }, watch, setValue, getValues } = useForm();
    const quantity = watch("quantity");
    const item = watch("item_id");
    const onSubmit = (data: any) => {
        createSaleRecord(data);
    }

    useEffect(() => {
        let id = getValues("item_id");
        if (id && !isNaN(quantity)) {
            let itemPrice = items?.find((i: any) => i.id === id)?.price;
            if (!isNaN(itemPrice)) {
                const price = itemPrice * quantity;
                setTotal(price);
                setValue('total_price', price);
            } else {
                setTotal(0);
            }
        } else {
            setTotal(0);
        }
    }, [quantity, item]);


    if (isLoading) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }

    if (!items || isError) {
        return (
            <View>
                <Text>Error...</Text>
            </View>
        )
    }

    return (
        <ScrollView contentContainerStyle={{ padding: 20, gap: 20 }}>
            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>Item</Text>
                <Controller
                    name='item_id'
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: "Please select an item."
                        }
                    }}
                    render={({ field: { value, onChange } }) => {
                        return (
                            <Picker
                                value={value}
                                onValueChange={onChange}
                                useNativeAndroidPickerStyle={false}
                                items={items?.map((i: any) => ({ value: i.id, label: i.name }))}
                                style={{
                                    inputAndroid: {
                                        fontSize: 16,
                                        paddingHorizontal: 10,
                                        paddingVertical: 10,
                                        borderWidth: 1,
                                        borderColor: errors.item_id ? 'red' : colors.forePrimary,
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
            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>Quantity</Text>
                <Controller
                    name='quantity'
                    control={control}
                    defaultValue={"1"}
                    render={({ field: { value, onChange } }) => {
                        return (
                            <TextInput
                                value={value}
                                onChangeText={text => {
                                    const numericValue = parseFloat(text);
                                    if (numericValue === 0) {
                                        onChange(1);
                                    }
                                    else {
                                        onChange(numericValue);
                                    }
                                }}
                                style={styles.input}
                                placeholder='Enter quantity here...'
                                keyboardType='numeric'
                            />
                        )
                    }}
                />
            </View>

            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>Total Price</Text>
                <Controller
                    name='total_price'
                    control={control}
                    defaultValue={String(total)}
                    rules={{
                        required: "The price is required.",
                        min: {
                            value: 40,
                            message: "Minimum price should be 40"
                        }
                    }}
                    render={({ field: { value, onChange } }) => {
                        return (
                            <TextInput
                                value={value}
                                onChangeText={text => {
                                    const numericValue = parseFloat(text);
                                    if (numericValue === 0) {
                                        onChange(1);
                                    }
                                    else {
                                        onChange(numericValue);
                                    }
                                }}
                                style={{ ...styles.input, ...(errors.total_price && { borderColor: 'red' }) }}
                                placeholder={String(total) || "Enter price here..."}
                                keyboardType='numeric'
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

            <Button title='Add Sale Record' onPress={handleSubmit(onSubmit)} />
        </ScrollView>
    )
}

export default CreateSale