import { useState } from "react"
import { FlatList, RefreshControl, StyleSheet, View } from "react-native"

export function PBTable({ style=null, data, onRefresh=()=>{}, isRefreshing=false, cell }) {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <FlatList
            style={[s.container, style]}
            data={data}
            contentContainerStyle={{ paddingBottom: 16 }}
            // TODO: figure way to clear selected index when reloading table, so the background will not appear (current implementation does not work.)
            onLayout={ () => { setSelectedIndex(-1) } }
            refreshControl={
                <RefreshControl
                    refreshing={isRefreshing}
                    onRefresh={onRefresh}
                />
            }
            renderItem={({ item, index }) => (
                <View key={index}>
                    {cell(
                        item,
                        index,
                        selectedIndex === index,
                        () => setSelectedIndex(index)
                    )}
                </View>
            )}
        />
    )
}

const s = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 10,
    }
})