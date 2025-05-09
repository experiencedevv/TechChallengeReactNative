import { PBText } from '../PBText/PBText';
import { Typography } from '../PBText/Typography';
import { View, StyleSheet, TextInput, KeyboardTypeOptions } from 'react-native';

export type PBTextFieldProps = {
    title?: string
    subtitle?: string
    placeholder?: string
    value?: string
    keyboardType?: KeyboardTypeOptions | undefined
    onChangeText?: (value: string) => void
    secureTextEntry?: boolean,
    iconView?: React.ReactNode
}

export const PBTextField = (props: PBTextFieldProps) => {
    return(
        <View>
            { props.title != null
                ? <PBText style={s.title} typography={'caption'}> {props.title} </PBText>
                : <></>
            }

            <View style={s.container}>

                <TextInput
                    style={s.input}
                    value={props.value}
                    placeholder={props.placeholder}
                    placeholderTextColor={"#C8C8C8"}
                    cursorColor={'black'}
                    onChangeText={props.onChangeText}
                    keyboardType={props.keyboardType}
                    secureTextEntry={props.secureTextEntry}
                />

                { props.iconView !== null ?
                    <View>
                        {props.iconView}
                    </View>
                : <></>
                }
                
            </View>
            { props.subtitle != null
                ? <PBText style={s.subtitle} typography={'annotation'}> {props.subtitle} </PBText>
                : <></>
            }
        </View>
    )
}

const s = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderColor: '#D9D9D9',
        borderRadius: 6,
        borderWidth: 1,
        height: 42,
        paddingHorizontal: 12
    },
    
    title: {
        paddingBottom: 6,
        paddingLeft: 6,
    },
    
    input: {
        color: 'black',
        fontSize: Typography.body.fontSize,
        fontWeight: Typography.body.fontWeight,
        flex: 1
    },

    subtitle: {
        color: '#656565',
        paddingTop: 6,
        paddingLeft: 6,
    }
})