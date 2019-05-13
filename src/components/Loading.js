import React, { Component } from "react"
import { View, Text, StyleSheet } from 'react-native';
import { observer } from "mobx-react"
import Color from "./Color"
import Icon from "./Icon"
@observer
class Loading extends Component {

    render() {
        // const { height } = this.props
        return (
            <View style={[styles.contain, { height: 44 }]}>
                <Icon name={"ios-barcode"} size={26} color={Color.desc} _onPress={null} />
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
    },
    title: {
        color: Color.desc,
        marginLeft: 5
    }
})