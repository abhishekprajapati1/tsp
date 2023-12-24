import React, { FC, useEffect } from 'react'
import { ScrollView, TextInput, View } from 'react-native'
import Button from '../../components/Button'
import { colors, styles } from '../../styles'
import { Text } from 'react-native'
import { Controller, useForm } from 'react-hook-form'
import useUpdateDetails from '../../lib/mutations/useUpdateDetails'
import { getEmailRules, getNameRules } from '../../lib/formrules'
import useUserDetails from '../../lib/queries/useUserDetails'
import LoadingIndicator from '../../components/LoadingIndicator'
import NoData from '../../components/NoData'

const EditProfile: FC<{ navigation: any }> = ({ navigation }) => {
    const { mutate: updateDetails, isPending } = useUpdateDetails({ redirectOnSuccess: () => navigation.navigate("Profile") });
    const { data, isLoading, isError, isFetching, isRefetching } = useUserDetails();
    const { control, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data: any) => {
        updateDetails(data);
    }


    useEffect(() => {
        if (data) {
            reset({ name: data.name, email: data.email })
        }
    }, [data]);

    if (isLoading || isFetching || isRefetching) {
        return <LoadingIndicator />
    }

    if (isError || !data) {
        return <NoData notFoundText='Something went wrong...' />
    }

    return (
        <ScrollView contentContainerStyle={{ padding: 20, gap: 20 }}>
            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>Full Name</Text>
                <Controller
                    name='name'
                    control={control}
                    rules={getNameRules(true)}
                    render={({ field: { value, onChange } }) => {
                        return (
                            <TextInput
                                value={value}
                                onChangeText={onChange}
                                style={{ ...styles.input, ...(errors.name && { borderColor: 'red' }) }}
                                placeholder='i.e. John Doe'
                            />
                        )
                    }}
                />
            </View>

            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>Email Address</Text>
                <Controller
                    name='email'
                    control={control}
                    rules={getEmailRules(true)}
                    render={({ field: { value, onChange } }) => {
                        return (
                            <TextInput
                                value={value}
                                onChangeText={onChange}
                                style={{ ...styles.input, ...(errors.email && { borderColor: 'red' }) }}
                                placeholder='i.e. john.doe@example.com'
                            />
                        )
                    }}
                />
            </View>

            <Button title='Save changes' disabled={isPending} isRequesting={isPending} onPress={handleSubmit(onSubmit)} />
        </ScrollView>
    )
}

export default EditProfile;