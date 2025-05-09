import { View, StyleSheet, TouchableOpacity, StyleProp, TextStyle } from "react-native";
import { useCallback } from "react";

export type PBTableCellProps = {
    children: React.ReactNode
    style?: StyleProp<TextStyle> | undefined
    isSelected?: boolean
    isSelectionEnabled?: boolean
    hideSeparator?: boolean
    testID?: string
    onPress?: () => void
    backgroundWhenSelected?: string
}

export const PBTableCell = ({
    children,
    style,
    isSelected=false,
    isSelectionEnabled=false,
    hideSeparator=false,
    testID="",
    onPress,
    backgroundWhenSelected='#474747'
}: PBTableCellProps) => {
    const handlePress = useCallback(() => {
        onPress()
    }, [])

    const cellStyle = [
        s.container,
        style,
        isSelected && { backgroundColor: backgroundWhenSelected },
    ]

    return(
        <TouchableOpacity style={cellStyle}
            disabled={!isSelectionEnabled}
            onPress={onPress}
            testID={testID}
        >
            {children}
            { hideSeparator
                ? <></>
                : <View style={s.separator} />
            }
        </TouchableOpacity>
    );
}

const s = StyleSheet.create({
    container: {
        width: '100%',
        // height: 40,
        borderRadius: 2,
        justifyContent: 'flex-end'
    },

    title: {
        paddingBottom: 8,
    },

    rightIndent: {
        textAlign: 'right',
        alignSelf: 'flex-end',
    },

    separator: {
        backgroundColor: "#222222",
        width: '100%',
        height: 1,
    },
})