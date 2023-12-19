import React from 'react'
import { TextInput, View } from 'react-native'
import Button from '../Button'
import useSaleStore from '../../store/useSaleStore'
import { FontAwesome } from '@expo/vector-icons'
import { colors, styles } from '../../styles'
import { Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Controller, useForm } from 'react-hook-form'
import Picker from 'react-native-picker-select'

const SaleForm = () => {
    const setForm = useSaleStore(state => state.setForm);
    const { control, handleSubmit } = useForm();
    const onSubmit = (data: any) => {
        console.log("see this data", data)
    }

    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: colors.backPrimary, height: 100 }}>
                <Button style={{
                    width: 50,
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                }} onPress={() => setForm(false)}>
                    <Ionicons name="chevron-back" size={24} color={colors.lightest} />
                </Button>
                <Text style={{ color: colors.lightest }}>Add new sale record</Text>
            </View>

            <View style={{ padding: 20, gap: 20 }}>
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>Item</Text>
                    <Controller
                        name='item_id'
                        control={control}
                        render={({ field: { value, onChange } }) => {
                            return (
                                <Picker
                                    onValueChange={onChange}
                                    useNativeAndroidPickerStyle={false}
                                    items={[
                                        { value: 1, label: "First Option" },
                                        { value: 2, label: "Second Option" },
                                        { value: 3, label: "Third Option" },
                                    ]}
                                    style={{
                                        inputAndroid: {
                                            fontSize: 16,
                                            paddingHorizontal: 10,
                                            paddingVertical: 10,
                                            borderWidth: 1,
                                            borderColor: colors.forePrimary,
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
                                        console.log(typeof numericValue);
                                        if (numericValue === 0) {
                                            console.log('see')
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
                        defaultValue={"1"}
                        render={({ field: { value, onChange } }) => {
                            return (
                                <TextInput
                                    value={value}
                                    onChangeText={text => {
                                        const numericValue = parseFloat(text);
                                        console.log(typeof numericValue);
                                        if (numericValue === 0) {
                                            console.log('see')
                                            onChange(1);
                                        }
                                        else {
                                            onChange(numericValue);
                                        }
                                    }}
                                    style={styles.input}
                                    placeholder='Total price here...'
                                    keyboardType='numeric'
                                />
                            )
                        }}
                    />
                </View>

                <Button title='Add Sale Record' onPress={handleSubmit(onSubmit)} />
            </View>
        </View>
    )
}

export default SaleForm