import React, { Component } from "react"
import { View, Text, StyleSheet } from 'react-native';
import { observer } from "mobx-react"
import Color from "./Color"
import Icon from "./Icon"
@observer
class Loading extends Component {

    render() {
        return (
            <View style={styles.contain}>
                <Icon name={"ios-barcode"} size={26} color={Color.desc} />
                <Text style={styles.title}>正在加载中...</Text>
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
        marginLeft: 5
    }
})