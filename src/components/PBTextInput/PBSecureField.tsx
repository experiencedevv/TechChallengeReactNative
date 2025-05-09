import { Text, TouchableOpacity, View } from "react-native";
import { PBTextField, PBTextFieldProps } from "./PBTextField";
import { useState } from "react";

type PBSecureFieldProps = PBTextFieldProps & {
    displayShowPassword?: boolean;
};

export default function PBSecureField(props: PBSecureFieldProps) {
    const [toggleShowPassword, setToggleShowPassword] = useState(false);

    return (
        <View style={{ paddingTop: 42 }}>
            <PBTextField 
                secureTextEntry={!toggleShowPassword}
                iconView={ props.displayShowPassword ?
                    <TouchableOpacity
                        onPress={ () => setToggleShowPassword(!toggleShowPassword) }
                    >
                        <Text>{toggleShowPassword ? 'Esconder' : 'Mostrar'}</Text>
                    </TouchableOpacity>
                    : null
                }
                {...props}
            />
        </View>
    );
}