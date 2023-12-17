import React, { FC, useEffect, useState } from 'react'
import { SwitchProps, Text } from 'react-native'
import { View } from 'react-native'
import { Switch } from 'react-native'
import { colors, styles } from '../styles'

const SwitchInput: FC<{ value: boolean, onChange: any, label?: string } & SwitchProps> = ({ value, onChange, label = "I am admin" }) => {
    const [checked, setChecked] = useState(false);
    const handleChange = (value: boolean) => {
        setChecked(value);
        if (onChange) onChange(value);
    }

    useEffect(() => {
        setChecked(value);
    }, [value]);

    return (
        <View style={styles.loginSwitch}>
            <Switch thumbColor={checked ? colors.backPrimary : colors.foreLighter} trackColor={{ false: colors.forePrimary, true: colors.backLighter }} style={{ width: 45 }} value={checked} onValueChange={value => handleChange(value)} />
            <Text style={styles.switchText}>{label}</Text>
        </View>
    )
}

export default SwitchInput