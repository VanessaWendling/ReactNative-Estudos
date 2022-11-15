import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProps {
    styles?: string
}

export function Button(props: ButtonProps) {
    return (
        <TouchableOpacity
            {...props}
            style={props.styles == 'outline' ?
                styles.btn_outline_primary
                : styles.btn_primary}>
            {props.children}
        </TouchableOpacity>);
}