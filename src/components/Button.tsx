import React, { FC, ReactNode } from 'react'
import { colors, styles } from '../styles'
import { ActivityIndicator, TextStyle, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import { Text } from 'react-native'
import LoadingIndicator from './LoadingIndicator'

export type ButtonProps = TouchableOpacityProps & {
    title?: string;
    titleStyle?: TextStyle,
    isRequesting?: boolean;
}


const Button: FC<ButtonProps> = ({ children, isRequesting, title = "Submit", style = styles.primaryBtn, titleStyle = styles.primaryBtnText, ...rest }) => {
    return (
        <TouchableOpacity
            style={style}
            {...rest}
        >
            {
                isRequesting && (
                    <ActivityIndicator color={colors.lightest} />
                )
            }
            {!isRequesting && (
                <>
                    {
                        children ? children : (
                            <Text style={titleStyle}>
                                {title}
                            </Text>
                        )
                    }
                </>
            )}
        </TouchableOpacity>
    )
}

export default Button