import { StyleProp, StyleSheet, Text, TextStyle } from "react-native"
import { Typography } from "./Typography"
import React from "react"

export type PBTextProps = {
    style?: StyleProp<TextStyle> | undefined
    typography?: 'h1' | 'h4' | 'h5' | 'bodybold' | 'body' | 'caption' | 'annotation' | 'button'
    children: React.ReactNode
    numberOfLines?: number
}

export const PBText = ({
    style,
    typography='body',
    children,
    numberOfLines=0
}: PBTextProps) => {
    return (
        <Text
            style={[
                typography === 'h1' && s.h1,
                typography === 'h4' && s.h4,
                typography === 'h5' && s.h5,
                typography === 'bodybold' && s.bodybold,
                typography === 'body' && s.body,
                typography === 'caption' && s.caption,
                typography === 'annotation' && s.annotation,
                typography === 'button' && s.button,
                style
            ]}
            numberOfLines={numberOfLines}
        >
            {children}
        </Text>
    )
}

const s = StyleSheet.create({
    h1: {
        fontSize: Typography.h1.fontSize,
        fontWeight: Typography.h1.fontWeight
    },
    h4: {
        fontSize: Typography.h4.fontSize,
        fontWeight: Typography.h4.fontWeight
    },
    h5: {
        fontSize: Typography.h5.fontSize,
        fontWeight: Typography.h5.fontWeight
    },
    bodybold: {
        fontSize: Typography.bodybold.fontSize,
        fontWeight: Typography.bodybold.fontWeight
    },
    body: {
        fontSize: Typography.body.fontSize,
        fontWeight: Typography.body.fontWeight
    },
    caption: {
        fontSize: Typography.caption.fontSize,
        fontWeight: Typography.caption.fontWeight
    },
    annotation: {
        fontSize: Typography.annotation.fontSize,
        fontWeight: Typography.annotation.fontWeight
    },
    button: {
        fontSize: Typography.button.fontSize,
        fontWeight: Typography.button.fontWeight,
        textAlign: 'center',
    },
})