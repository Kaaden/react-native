import React, { Component } from "react"
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { observer } from "mobx-react"
import Color from "./Color"
import Icon from "./Icon"
@observer
class Empty extends Component {

    render() {

        return (
            <View style={styles.contain}>
                <Icon name={"logo-snapchat"} size={30} color={Color.tintColor} />
                <Text style={styles.title}>暂无数据~</Text>
            </View>
        )
    }
}
export default Empty
const styles = StyleSheet.create({
    contain: {
        flexDirection: "column",
        alignItems: "center",
        width: Dimensions.get("window").width,
        justifyContent: "center",
        height: Dimensions.get("window").height / 2,
    },
    title: {
        color: Color.tintColor,
        marginTop: 10
    }
})