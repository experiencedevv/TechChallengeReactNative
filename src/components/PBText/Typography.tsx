import { TextStyle } from "react-native";

export const Typography = {
    h1: {
        fontSize: 100,
        fontWeight: "600" as TextStyle['fontWeight']
    },
    h4: {
        fontSize: 26,
        fontWeight: "600" as TextStyle['fontWeight']
    },
    h5: {
        fontSize: 20,
        fontWeight: "600" as TextStyle['fontWeight']
    },
    bodybold: {
        fontSize: 16,
        fontWeight: "700" as TextStyle['fontWeight']
    },
    body: {
        fontSize: 16,
        fontWeight: "400" as TextStyle['fontWeight']
    },
    caption: {
        fontSize: 14,
        fontWeight: "500" as TextStyle['fontWeight']
    },
    annotation: {
        fontSize: 10,
        fontWeight: "400" as TextStyle['fontWeight']
    },
    button: {
        fontSize: 18,
        fontWeight: "600" as TextStyle['fontWeight']
    },
}

export const FontSize = {
    regular: {
        weigth: "400",
        xs: 10,
        md: 14,
    },
    medium: {
        weight: "500",
        sm: 12,
        md: 14,
        lg: 20,
    },
    semibold: {
        weight: "600",
        sm: 14,
        lg: 26,
        xl: 160,
    },
    bold: {
        weight: "700",
        lg: 26,
    },
};

export const FontColor = {
    white: {
        color: "#fff",
    },
    red: {
        color: "#CD4A4A",
    },
};