import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { observer, inject } from "mobx-react"

import { createStackNavigator } from 'react-navigation'
import Colors from './Color';
import Icon from "./Icon"
@inject("rootStore")
@observer
class Header extends React.Component {
    constructor(props) {
        super(props)
        const { HomeStore } = this.props.rootStore
        this.HomeStore = HomeStore
    }

    render() {
        const { title, _onPress } = this.props
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={_onPress} >

                    <Icon
                        name={"md-search"}
                        size={26}
                        color={Colors.tabIconSelected}
                    />
                </TouchableOpacity>
                <Text style={styles.title} numberOfLines={1}>{title}</Text>
                <Icon name={"md-add"} size={26} color={Colors.tabIconSelected} />
            </View>
        )
    }
}
export default Header

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 17,
        fontWeight: "bold",
        color: Colors.tabIconSelected
    },
    icon: {
        color: Colors.tabIconSelected,

    }
})
