import React, { Component } from "react"
import { TouchableOpacity, View, Text, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { Color } from "../../../components"
import { observer } from "mobx-react"
@observer
class Search extends Component {
    render () {
        const { _onSearch } = this.props
        return (
            <View
                style={[styles.container]}
            >
                <TouchableOpacity
                    activeOpacity={1}
                    style={[styles.search]}
                    onPress={_onSearch}
                >
                    <Ionicons
                        size={iconSize}
                        name="ios-search"
                        color={Color.desc}
                        style={{ marginRight: pad / 2 }}
                    />
                    <Text style={styles.title}>搜索</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default Search
const iconSize = 16
const pad = 16
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        paddingHorizontal: pad,
        paddingVertical: 10,
    },
    search: {
        height: 34,
        backgroundColor: "#eeeeee",
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: pad,
    },
    title: {
        fontSize: 15,
        color: Color.desc,
    },
})
