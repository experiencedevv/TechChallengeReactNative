import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, StyleProp, ViewStyle } from "react-native";

type PBPrefetchViewProps = {
    style?: StyleProp<ViewStyle> | undefined;
    isLoading: boolean;
    view: React.ReactNode;
    timeout?: number;
    onRetry?: () => void;
    onCancel?: () => void;
}

export default function PBPrefetchView({
    style,
    isLoading,
    view,
    timeout = 10000, // default 10 seconds
    onRetry,
    onCancel
}: PBPrefetchViewProps) {

    const [hasTimedOut, setHasTimedOut] = useState(false);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        if (isLoading) {
            timeoutId = setTimeout(() => {
                setHasTimedOut(true);

                Alert.alert(
                    "Algo deu errado",
                    "O tempo de espera foi muito longo. Gostaria de tentar novamente?",
                    [
                        {
                            text: "Ok",
                            onPress: () => {
                                onRetry?.();
                            },
                        },
                        { text: "Cancelar", style: "cancel" },
                    ]
                );
            }, timeout);
        }

        return () => {
            clearTimeout(timeoutId);
            setHasTimedOut(false);
        };
    }, [isLoading, onRetry, timeout]);

    return (
        <>
            { isLoading ? (
                <ActivityIndicator
                    style={[{ backgroundColor: '#F5F5F5', flex: 1 }, style]}
                    size="large"
                    color={'#000'}
                />
            ) : (
                view
            )}
        </>
    );
}