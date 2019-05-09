import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { observer, inject } from "mobx-react"
import { Ionicons } from '@expo/vector-icons';
import Colors from './Color';
@inject("rootStore")
@observer
class Header extends React.Component {
    constructor(props) {
        super(props)
        const { HomeStore } = this.props.rootStore
        this.HomeStore = HomeStore
    }
    render() {
        const { title } = this.props
        return (
            <View style={styles.container}>
                <Ionicons
                    name={"md-search"}
                    size={26}
                    style={styles.icon}
                />
                <Text style={styles.title} numberOfLines={1}>{title}</Text>
                <Ionicons name={"md-add"} size={26} style={styles.icon} />
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
