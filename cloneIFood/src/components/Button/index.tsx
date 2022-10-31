import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';


interface ButtonProps extends TouchableOpacityProps {
    title: string;
    color?: boolean
}

export function Button(props: ButtonProps) {
    return (
        <TouchableOpacity style={[styles.container, { backgroundColor: props.color ? "#F0001A" : 'trasparent' }]} {...props}>
            <Text style={{ color: props.color ? '#fff' : "#F0001A" }}>{props.title}</Text>
        </TouchableOpacity>
    );
}