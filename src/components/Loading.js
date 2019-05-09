import React, { Component } from "react"
import { View, Text, StyleSheet } from 'react-native';
import { observer } from "mobx-react"
import Color from "./Color"
import Icon from "./Icon"
@observer
class Loading extends Component {

    render() {
        const { loading } = this.props
        return (
            <View style={styles.contain}>
                <Icon name={loading ? "ios-refresh" : "ios-barcode"} size={26} color={Color.desc} />
                <Text style={styles.title}>{loading ? "正在加载中..." : "暂无更多~"}</Text>
            </View>
        )
    }
}
export default Loading
const styles = StyleSheet.create({
    contain: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
        height: 44,

    },
    title: {
        color: Color.desc,
        marginLeft:5
    }
})