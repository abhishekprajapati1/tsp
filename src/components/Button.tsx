import React, { FC, ReactNode } from 'react'
import { styles } from '../styles'
import { TouchableOpacity } from 'react-native'
import { Text } from 'react-native'

const Button: FC<{ onPress?: any, title?: string, style?: any, titleStyle?: any, children?: ReactNode, disabled?: boolean }> = ({ children, disabled, onPress, title = "Submit", style = styles.primaryBtn, titleStyle = styles.primaryBtnText }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={style}
            disabled={disabled}
        >
            {children ? children : (
                <Text style={titleStyle}>
                    {title}
                </Text>
            )}
        </TouchableOpacity>
    )
}

export default Button